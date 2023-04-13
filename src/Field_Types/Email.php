<?php
/**
 * Email fields.
 *
 * @since 1.0.0
 *
 */

namespace Hizzle\Forms\Field_Types;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * The email field class.
 *
 * @since 1.0.0
 */
class Email extends Text {

    /**
	 * Returns the field type.
	 *
	 * @return string
	 */
	public function get_field_type() {
		return 'email';
	}

    /**
	 * Returns the field name.
	 *
	 * @return string
	 */
	public function get_field_name() {
		return __( 'Email', 'hizzle-forms' );
	}

    /**
	 * Validates the field value.
	 *
	 * @param array $args Field args
	 * @param mixed $value
	 * @return \WP_Error|true
	 */
	public function validate( $args, $value ) {
        if ( '' !== $value && ! filter_var( $value, FILTER_VALIDATE_EMAIL ) ) {
            return new \WP_Error( 'invalid_email', __( 'Please enter a valid email address.', 'hizzle-forms' ) );
        }

        return parent::validate( $args, $value );
    }

    /**
	 * Sanitizes the submitted value.
	 *
	 * @since 1.0.0
	 * @param mixed $value Submitted value
	 */
	public function sanitize_value( $value ) {
		return sanitize_email( $value );
	}
}
