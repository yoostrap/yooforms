<?php

namespace Hizzle\Forms;

/**
 * Parses merge tags.
 *
 * @since 1.0.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Class Merge_Tags
 *
 */
class Merge_Tags {

	/**
	 * @var string The escape function for replacement values.
	 */
	protected $escape_function = null;

	/**
	 * @var array Array of registered dynamic content tags
	 */
	public $tags = array();

	/**
	 * Class constructor.
	 */
	public function __construct() {

		// Prepare submission.
		add_action( 'hizzle_forms_after_validate_submission', array( $this, 'prepare_submission' ) );

		// Form responses.
		add_filter( 'hizzle_forms_form_response_message', array( $this, 'replace_in_form_response' ) );
		add_filter( 'hizzle_forms_form_redirect_url', array( $this, 'replace_in_form_redirect_url' ) );

		// Emails.
		add_filter( 'hizzle_forms_email_recipient', array( $this, 'replace_in_email_recipient' ) );
		add_filter( 'hizzle_forms_email_reply_to', array( $this, 'replace_in_email_recipient' ) );
		add_filter( 'hizzle_forms_email_from_name', array( $this, 'replace_in_email_from_name' ) );
		add_filter( 'hizzle_forms_email_subject', array( $this, 'replace_in_form_response' ) );
		add_filter( 'hizzle_forms_email_message', array( $this, 'replace_in_email_body' ) );

	}

	/**
	 * Prepares the submission for processing.
	 *
	 * @param Submission $submission The submission.
	 */
	public function prepare_submission( $submission ) {

		// Reset tags.
		$this->tags = array(
			'cookie'          => array(
				'description' => __( 'Data from a cookie.', 'hizzle-forms' ),
				'callback'    => array( $this, 'get_cookie' ),
				'example'     => "cookie name='my_cookie' default='Default Value'",
			),
			'email'           => array(
				'description' => __( 'The email address of the current visitor (if known).', 'hizzle-forms' ),
				'replacement' => '',
			),
			'admin_email'     => array(
				'description' => __( 'The admin email.', 'hizzle-forms' ),
				'replacement' => get_option( 'admin_email' ),
			),
			'site_title'      => array(
				'description' => __( 'The site title.', 'hizzle-forms' ),
				'replacement' => get_option( 'blogname' ),
			),
			'home_url'        => array(
				'description' => __( 'The home URL.', 'hizzle-forms' ),
				'replacement' => get_home_url(),
			),
			'current_url'     => array(
				'description' => __( 'The URL of the page.', 'hizzle-forms' ),
				'replacement' => $submission->submission_page,
			),
			'current_date'    => array(
				'description' => __( 'The current date.', 'hizzle-forms' ),
				'replacement' => date_i18n( get_option( 'date_format' ) ),
			),
			'current_time'    => array(
				'description' => __( 'The current time.', 'hizzle-forms' ),
				'replacement' => date_i18n( get_option( 'time_format' ) ),
			),
			'ip_address'      => array(
				'description' => __( 'The visitor\'s IP address.', 'hizzle-forms' ),
				'replacement' => $submission->ip_address,
			),
			'user_agent'      => array(
				'description' => __( 'The visitor\'s user agent.', 'hizzle-forms' ),
				'replacement' => $submission->user_agent,
			),
			'response_fields' => array(
				'description' => __( 'The submitted form fields.', 'hizzle-forms' ),
				'replacement' => '',
			),
		);

		// Form tags.
		$this->tags['form_id'] = array(
			'description' => __( 'The ID of the form.', 'hizzle-forms' ),
			'replacement' => $submission->form->id,
		);

		$this->tags['instance_id'] = array(
			'description' => __( 'The instance ID of the form.', 'hizzle-forms' ),
			'replacement' => $submission->form->instance_id,
		);

		$this->tags['form_name'] = array(
			'description' => __( 'The name of the form.', 'hizzle-forms' ),
			'replacement' => $submission->form->title,
		);

		$all_values = array();

		foreach ( $submission->form->fields as $field ) {

			// Skip fields without a name.
			if ( empty( $field->name ) ) {
				continue;
			}

			$value = $field->get_formatted_value();

			if ( is_email( $value ) && empty( $this->tags['email']['replacement'] ) ) {
				$this->tags['email']['replacement'] = $value;
			}

			// Add field tag.
			$this->tags[ $field->name ] = array(
				'description' => $field->label,
				'replacement' => $value,
			);

			if ( '' !== $value ) {
				$all_values[ $field->name ] = $value;
			}
		}

		// Add response fields tag.
		$this->tags['response_fields']['replacement'] = $this->get_formatted_values( $all_values );

		// Default email.
		if ( empty( $this->tags['email']['replacement'] ) && is_user_logged_in() ) {
			$user                               = wp_get_current_user();
			$this->tags['email']['replacement'] = $user->user_email;
		}

		do_action( 'hizzle_forms_prepare_submission_merge_tags', $this );
	}

	/**
	 * Formats submission values for display.
	 *
	 * @param array $values The values.
	 * @return string
	 */
	public function get_formatted_values( $values ) {

		$output = '';

		foreach ( $values as $name => $value ) {
			$output .= sprintf( '<strong>%s</strong>: %s<br />', $name, $value );
		}

		return $output;
	}

	/**
	 * Registers a new tag
	 */
	public function add_tag( $tag, $details ) {
		$this->tags[ $tag ] = $details;
	}

	/**
	 * Removes a tag
	 */
	public function remove_tag( $tag ) {

		if ( isset( $this->tags[ $tag ] ) ) {
			unset( $this->tags[ $tag ] );
		}

	}

	/**
	 * Returns all tags
	 *
	 * @return array
	 */
	public function all() {
		return $this->tags;
	}

	/**
	 * @param array $matches
	 *
	 * @return string
	 */
	protected function replace_tag( $matches ) {
		$tags = $this->all();
		$tag  = $matches[1];

		// Abort if tag is not supported.
		if ( ! isset( $tags[ $tag ] ) ) {
			return $matches[0];
		}

		// Generate replacement.
		$config      = $tags[ $tag ];
		$replacement = '';

		// Parse attributes.
		$attributes = array();
		if ( isset( $matches[2] ) ) {
			$attribute_string = $matches[2];
			$attributes       = shortcode_parse_atts( $attribute_string );
		}

		if ( isset( $config['replacement'] ) ) {
			$replacement = $config['replacement'];
		} elseif ( isset( $config['callback'] ) ) {

			// call function
			if ( empty( $config['no_args'] ) ) {
				$replacement = call_user_func( $config['callback'], $attributes, $tag );
			} else {
				$replacement = call_user_func( $config['callback'] );
			}
		}

		if ( is_array( $replacement ) ) {
			if ( ! is_scalar( current( $replacement ) ) ) {
				$replacement = wp_json_encode( $replacement );
			} else {
				$replacement = implode( ', ', $replacement );
			}
		}

		if ( ! is_scalar( $replacement ) ) {
			$replacement = wp_json_encode( $replacement );
		}

		$replacement = (string) $replacement;

		if ( ( '' === $replacement || null === $replacement ) && isset( $attributes['default'] ) ) {
			$replacement = trim( $attributes['default'] );
		}

		if ( is_callable( $this->escape_function ) ) {
			$replacement = call_user_func( $this->escape_function, $replacement );
		}

		return $replacement;
	}

	/**
	 * @param string $string The string containing dynamic content tags.
	 * @param string $escape_function Escape mode for the replacement value. Leave empty for no escaping.
	 * @return string
	 */
	protected function replace( $string, $escape_function = '' ) {
		$this->escape_function = $escape_function;

		// Replace strings like this: {tagname attr="value"}.
		$string = preg_replace_callback( '/\{(\w+)(\ +(?:(?!\{)[^}\n])+)*\}/', array( $this, 'replace_tag' ), $string );

		// Call again to take care of nested variables.
		$string = preg_replace_callback( '/\{(\w+)(\ +(?:(?!\{)[^}\n])+)*\}/', array( $this, 'replace_tag' ), $string );
		return $string;
	}

	/**
	 * @param string $string
	 *
	 * @return string
	 */
	public function replace_in_email_body( $string ) {
		return $this->replace( $string, 'wp_kses_post' );
	}

	/**
	 * @param string $string
	 *
	 * @return string
	 */
	public function replace_in_email_from_name( $string ) {
		return $this->replace( $string, 'sanitize_text_field' );
	}

	/**
	 * @param string $string
	 *
	 * @return string
	 */
	public function replace_in_form_response( $string ) {
		return $this->replace( $string, 'esc_html' );
	}

	/**
	 * @param string $string
	 *
	 * @return string
	 */
	public function replace_in_form_redirect_url( $string ) {
		return $this->replace( $string, 'urlencode' );
	}

	/**
	 * @param string $string
	 *
	 * @return string
	 */
	public function replace_in_email_recipient( $string ) {
		return $this->replace( $string, 'sanitize_email' );
	}

	/**
	 * Gets data variable from cookie.
	 *
	 * @param array $args
	 *
	 * @return string
	 */
	public static function get_cookie( $args = array() ) {
		if ( empty( $args['name'] ) ) {
			return '';
		}

		$name    = $args['name'];
		$default = isset( $args['default'] ) ? $args['default'] : '';

		if ( isset( $_COOKIE[ $name ] ) ) {
			return esc_html( stripslashes( $_COOKIE[ $name ] ) );
		}

		return esc_html( $default );
	}

}
