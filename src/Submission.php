<?php

namespace Hizzle\Forms;

/**
 * Container for a single submission.
 *
 * @since   1.0.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Container for a single submission.
 *
 */
class Submission {

	/**
	 * @var Form $form The form being submitted.
	 */
	public $form;

	/**
	 * @var \WP_Error $errors The submitted errors.
	 */
	public $errors;

	/**
	 * @var array $data The submitted data.
	 */
	public $data = array();

	/**
	 * @var string $user_agent The user agent.
	 */
	public $user_agent = '';

	/**
	 * @var string $ip_address The IP address.
	 */
	public $ip_address = '';

	/**
	 * @var string $date The submission date.
	 */
	public $date = '';

	/**
	 * @var string $submission_page The submission page.
	 */
	public $submission_page = '';

	/**
	 * @var bool $has_processed Whether the submission has been processed.
	 */
	public $has_processed = false;

	/**
	 * Class Constructor.
	 *
	 */
	public function __construct() {
		$this->errors = new \WP_Error();
		$this->date   = gmdate( 'Y-m-d H:i:s' );
	}

	/**
	 * Checks if we have a submission.
	 *
	 * @return bool
	 */
	public function has_submission() {
		return ! empty( $this->form ) && ! empty( $this->data );
	}

	/**
	 * Processes the submission.
	 *
	 * @return array|\WP_Error
	 */
	public function process() {

		// Processed submissions should not be processed again.
		if ( $this->has_processed ) {
			return $this->get_response();
		}

		// Prevent double processing.
		$this->has_processed = true;

		// Set-up the meta data.
		$this->ip_address = $this->get_remote_ip_addr();

		if ( ! empty( $_SERVER['HTTP_USER_AGENT'] ) ) {
			$this->user_agent = substr( $_SERVER['HTTP_USER_AGENT'], 0, 254 );
		}

		// Validate the submission.
		if ( ! $this->validate() ) {
			return $this->get_response();
		}

		do_action( 'hizzle_forms_after_validate_submission', $this );

		// TODO: Send emails etc.

		return $this->get_response();
	}

	/**
	 * Get the visitors IP address.
	 *
	 * @return string|false
	 */
	private function get_remote_ip_addr() {

		if ( isset( $_SERVER['HTTP_X_REAL_IP'] ) ) {
			return sanitize_text_field( wp_unslash( $_SERVER['HTTP_X_REAL_IP'] ) );
		}

		if ( isset( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ) {
			// Proxy servers can send through this header like this: X-Forwarded-For: client1, proxy1, proxy2
			// Make sure we always only send through the first IP in the list which should always be the client IP.
			return (string) rest_is_ip_address( trim( current( preg_split( '/,/', sanitize_text_field( wp_unslash( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ) ) ) ) );
		}

		if ( isset( $_SERVER['REMOTE_ADDR'] ) ) {
			return sanitize_text_field( wp_unslash( $_SERVER['REMOTE_ADDR'] ) );
		}

		return '';
	}

	/**
	 * Returns the appropriate submission response.
	 *
	 * @return array|\WP_Error
	 */
	public function get_response() {

		// Abort if we have errors.
		if ( $this->errors->has_errors() ) {
			return $this->errors;
		}

		// Return the response.
		return $this->form->get_response();
	}

	/**
	 * Validates the submission.
	 *
	 * @return bool
	 */
	private function validate() {

		// Abort if we have no submission.
		if ( ! $this->has_submission() ) {
			$this->errors = new \WP_Error( 'no_submission', __( 'No data was submitted.', 'hizzle-forms' ) );
			return false;
		}

		// Custom validations.
		do_action( 'hizzle_forms_validate_submission', $this );

		// Check if we have errors.
		if ( $this->errors->has_errors() ) {
			return false;
		}

		// Validate the form fields.
		foreach ( $this->data as $field_id => $value ) {
			$result = $this->form->validate_field( $field_id, $value, $this );

			if ( is_wp_error( $result ) ) {
				$this->errors->add( $field_id, $result->get_error_message() );
			}
		}

		// Check if we have errors.
		if ( $this->errors->has_errors() ) {
			return false;
		}

		return true;
	}
}
