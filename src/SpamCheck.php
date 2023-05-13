<?php

namespace Hizzle\Forms;

/**
 * Fights against SPAM submissions.
 *
 * @since 1.0.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Fights against SPAM submissions.
 *
 */
class SpamCheck {

	/**
	 * Class Constructor.
	 *
	 */
	public function __construct() {
		add_action( 'hizzle_forms_validate_submission', array( $this, 'check_submission' ) );
		add_filter( 'render_block', array( $this, 'inject_spam_fields' ), 10, 2 );
	}

	/**
	 * Checks the submission for SPAM.
	 *
	 * @param Submission $submission The submission object.
	 */
	public function check_submission( $submission ) {

		// Abort if the user is logged in.
		if ( ! apply_filters( 'hizzle_forms_should_check_spam', get_current_user_id() > 0, $submission ) ) {
			return;
		}

		try {
			$this->check_honeypot( $submission );
			$this->check_akismet( $submission );
		} catch ( \Exception $e ) {
			$submission->errors->add( 'spam', $e->getMessage() );
		}
	}

	/**
	 * Checks the submission for SPAM (Honeypot).
	 *
	 * @param Submission $submission The submission object.
	 */
	public function check_honeypot( $submission ) {
		if ( empty( $submission->data['hizzle_message'] ) ) {
			return;
		}

		throw new \Exception( 'Could not verify submission: Suspected SPAM.' );
	}

	/**
	 * Checks the time it took to submit the form.
	 *
	 * @param Submission $submission The submission object.
	 */
	public function check_time_to_submit( $submission ) {

		// Time it took to submit the form (in seconds).
		$time_to_submit = $submission->time_to_submit;

		// Time threshold (in seconds).
		$threshold = apply_filters( 'hizzle_forms_time_threshold', 3 );

		if ( $time_to_submit < $threshold ) {
			throw new \Exception( 'Could not verify submission: Suspected SPAM.' );
		}
	}

	/**
	 * Checks the submission for SPAM (Akismet).
	 *
	 * @param Submission $submission The submission object.
	 */
	public function check_akismet( $submission ) {

		// Check if a modern version of Akismet is active.
		if ( ! method_exists( 'Akismet', 'http_post' ) ) {
			return;
		}

		// If no key is configured, then there's no point in doing any of this.
		if ( ! \Akismet::get_api_key() ) {
			return;
		}

		// Get current time in ISO.
		$comment = array(
			'blog'             => get_option( 'home' ),
			'blog_lang'        => get_locale(),
			'blog_charset'     => get_option( 'blog_charset' ),
			'permalink'        => $submission->submission_page,
			'user_ip'          => $submission->ip_address,
			'user_agent'       => $submission->user_agent,
			'referrer'         => $submission->referrer,
			'comment_type'     => 'contact-form',
			'comment_date_gmt' => gmdate( 'c', strtotime( $submission->date ) ),
			'user_agent'       => ( isset( $_SERVER['HTTP_USER_AGENT'] ) ? $_SERVER['HTTP_USER_AGENT'] : null ),
		);

		// Comment fields.
		$used_full_name = false;
		foreach ( $submission->form->fields as $field ) {

			// Abort if no value.
			if ( empty( $submission->data[ $field->name ] ) || ! is_string( $submission->data[ $field->name ] ) ) {
				continue;
			}

			$value = trim( $submission->data[ $field->name ] );

			// Name.
			if ( $field->is_input_type( 'name', 'given-name', 'family-name' ) && ! $used_full_name ) {

				$comment['comment_author'] = $comment['comment_author'] ? $comment['comment_author'] : '';

				if ( $field->is_input_type( 'name' ) ) {
					$comment['comment_author'] = $value;
					$used_full_name            = true;
				} elseif ( $field->is_input_type( 'given-name' ) ) {
					$comment['comment_author'] = trim( $value . ' ' . $comment['comment_author'] );
				} elseif ( $field->is_input_type( 'family-name' ) ) {
					$comment['comment_author'] = trim( $comment['comment_author'] . ' ' . $value );
				}

				return;
			}

			// Email.
			if ( empty( $comment['comment_author_email'] ) && is_email( $value ) ) {
				$comment['comment_author_email'] = $value;
			}

			// URL.
			if ( empty( $comment['comment_author_url'] ) && filter_var( $value, FILTER_VALIDATE_URL ) ) {
				$comment['comment_author_url'] = $value;
			}

			// Comment content.
			if ( 'hizzle-forms/textarea' === $field->field_type ) {
				$comment['comment_content'] = $value;
			}
		}

		// Posted data.
		if ( method_exists( 'Akismet', 'prepare_custom_form_values' ) ) {
			$comment = \Akismet::prepare_custom_form_values( $comment );
		}

		// Server data.
		foreach ( $_SERVER as $key => $value ) {
			if ( ! is_string( $value ) ) {
				continue;
			}

			if ( preg_match( '/^HTTP_COOKIE/', $key ) ) {
				continue;
			}

			// Send any potentially useful $_SERVER vars, but avoid sending junk we don't need.
			if ( preg_match( '/^(HTTP_|REMOTE_ADDR|REQUEST_URI|DOCUMENT_URI)/', $key ) ) {
				$comment[ "$key" ] = $value;
			}
		}

		// Testing.
		if ( defined( 'IS_TEST' ) && IS_TEST ) {
			$comment['is_test'] = 'true';
		}

		$comment  = apply_filters( 'hizzle_forms_akismet_fields', $comment, $submission );
		$response = \Akismet::http_post( \Akismet::build_query( $comment ), 'comment-check' );

		if ( 'true' === $response[1] || true === $response[1] ) {
			throw new \Exception( 'Could not verify submission: Suspected SPAM.' );
		}
	}

	/**
	 * Injects SPAM fields into the form block.
	 *
	 * @param string $block_content The block content.
	 * @param array $block The block details.
	 * @return string.
	 */
	public function inject_spam_fields( $block_content, $block ) {

		// Only inject into the form block.
		if ( 'hizzle-forms/form' !== $block['blockName'] ) {
			return $block_content;
		}

		// Add honeypot field.
		$block_content = str_replace(
			'</form>',
			'<p style="display: none !important;"><label>&#916;<textarea name="hizzle_message" cols="45" rows="8" maxlength="100"></textarea></label></form>',
			$block_content
		);

		// Add aksimet fields.
		if ( method_exists( 'Akismet', 'inject_custom_form_fields' ) ) {
			$block_content = \Akismet::inject_custom_form_fields( $block_content );
		}

		return $block_content;
	}
}
