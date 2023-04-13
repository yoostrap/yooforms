<?php
/**
 * URL fields.
 *
 * @since 1.0.0
 *
 */

namespace Hizzle\Forms\Field_Types;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * The url field class.
 *
 * @since 1.0.0
 */
class URL extends Text {

    /**
	 * Returns the field type.
	 *
	 * @return string
	 */
	public function get_field_type() {
		return 'url';
	}

    /**
	 * Returns the field name.
	 *
	 * @return string
	 */
	public function get_field_name() {
		return __( 'URL', 'hizzle-forms' );
	}

    /**
	 * Returns the autocomplete value.
	 *
	 * @return string|false
	 */
	protected function get_autocomplete() {
		return 'url';
	}

	/**
	 * Validates the field value.
	 *
	 * @param array $args Field args
	 * @param mixed $value
	 * @return \WP_Error|true
	 */
	public function validate( $args, $value ) {

		// Check if this is a valid URL.
		if ( '' !== $value && ! filter_var( $value, FILTER_VALIDATE_URL ) ) {
			return new \WP_Error( 'invalid_url', __( 'Please enter a valid URL.', 'hizzle-forms' ) );
		}

		return parent::validate( $args, $value );
	}

}
