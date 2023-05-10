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
			$this->init( get_page_by_path( $form_or_instance_id, OBJECT, array( 'hizzle_form' ) ) );
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

				$this->fields[ $field->name ] = $field;
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
			'redirect' => $this->redirect,
			'message'  => $this->message,
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

}
