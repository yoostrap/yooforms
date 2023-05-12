<?php

namespace Hizzle\Forms;

/**
 * Container for a single form.
 *
 * @since   1.0.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Container for a single form.
 *
 */
class Form {

	/**
	 * @var int $id The form ID.
	 */
	public $id;

	/**
	 * @var string $instance_id The form instance ID.
	 */
	public $instance_id;

	/**
	 * @var string $title The form title.
	 */
	public $title;

	/**
	 * @var string $action The submission action.
	 */
	public $action = 'message';

	/**
	 * @var string $redirect The redirect URL.
	 */
	public $redirect = '';

	/**
	 * @var string $message The response message.
	 */
	public $message = '';

	/**
	 * @var Email[] $emails The form emails.
	 */
	public $emails = array();

	/**
	 * @var Field[] $fields The form fields.
	 */
	public $fields = array();

	/**
	 * Class Constructor.
	 *
	 * @param int|string|\WP_Post $form_or_instance_id The form ID or instance ID.
	 */
	public function __construct( $form_or_instance_id ) {

		if ( is_a( $form_or_instance_id, 'WP_Post' ) ) {
			$this->init( $form_or_instance_id );
		} elseif ( is_numeric( $form_or_instance_id ) ) {
			$this->init( get_post( $form_or_instance_id ) );
		} elseif ( is_string( $form_or_instance_id ) ) {
			$this->init(
				current(
					get_posts(
						array(
							'name'        => $form_or_instance_id,
							'post_type'   => 'hizzle_form',
							'numberposts' => 1,
						)
					)
				)
			);
		}

		$this->action   = empty( $this->action ) ? 'message' : $this->action;
		$this->redirect = empty( $this->redirect ) ? home_url() : $this->redirect;
		$this->message  = empty( $this->message ) ? __( 'Thank you for contacting us. We will be in touch with you shortly.', 'hizzle-forms' ) : $this->message;

		do_action( 'hizzle_forms_form_init', $this );
	}

	/**
	 * Initializes the form.
	 *
	 * @param \WP_Post $form The form post object.
	 */
	private function init( $form ) {

		// Abort if the form is not valid.
		if ( ! is_a( $form, 'WP_Post' ) || 'hizzle_form' !== $form->post_type ) {
			return;
		}

		// Prepare the form.
		$this->id          = $form->ID;
		$this->instance_id = $form->post_name;
		$this->title       = $form->post_title;

		// Add attributes.
		$data = json_decode( $form->post_content, true );

		if ( empty( $data ) ) {
			return;
		}

		$attributes = isset( $data['attributes'] ) ? $data['attributes'] : array();

		foreach ( array( 'action', 'redirect', 'message' ) as $attribute ) {
			if ( isset( $attributes[ $attribute ] ) ) {
				$this->$attribute = $attributes[ $attribute ];
			}
		}

		// Emails.
		if ( ! empty( $attributes['emails'] ) ) {
			foreach ( $attributes['emails'] as $email ) {
				$this->emails[] = new Email( $email );
			}
		}

		// Fields.
		if ( ! empty( $data['innerBlocks'] ) ) {
			foreach ( $data['innerBlocks'] as $field ) {
				$field = new Field( $field );

				if ( ! empty( $field->instance_id ) ) {
					$this->fields[ $field->name ] = $field;
				}
			}
		}
	}

	/**
	 * Checks if the form exists.
	 *
	 * @return bool
	 */
	public function exists() {
		return ! empty( $this->id );
	}

	/**
	 * Retrieves the appropriate form response.
	 *
	 * @return array
	 */
	public function get_response() {
		$response = array(
			'action'   => $this->action,
			'redirect' => apply_filters( 'hizzle_forms_form_redirect_url', $this->redirect, $this ),
			'message'  => apply_filters( 'hizzle_forms_form_response_message', $this->message, $this ),
		);

		return apply_filters( 'hizzle_forms_form_response', $response, $this );
	}

	/**
	 * Validates a given form field.
	 *
	 * @param string $field_name The field name.
	 * @param string $value      The field value.
	 * @param Submission $submission The submission object.
	 * @return true|\WP_Error
	 */
	public function validate_field( $field_name, $value, $submission ) {

		// Abort if the field does not exist.
		if ( ! isset( $this->fields[ $field_name ] ) ) {
			return true;
		}

		return apply_filters(
			'hizzle_forms_validate_field',
			$this->fields[ $field_name ]->validate( $value, $submission ),
			$field_name,
			$value,
			$submission,
			$this
		);
	}

	/**
	 * Sends the form's emails.
	 *
	 * @param Submission $submission The submission
	 */
	public function send_emails( $submission ) {

		do_action( 'hizzle_forms_form_before_send_emails', $this, $submission );

		// Send the emails.
		foreach ( $this->emails as $email ) {
			$email->send( $submission );
		}

		do_action( 'hizzle_forms_form_after_send_emails', $this, $submission );
	}
}
