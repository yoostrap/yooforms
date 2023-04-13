<?php
/**
 * Phone fields.
 *
 * @since 1.0.0
 *
 */

namespace Hizzle\Forms\Field_Types;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * The phone field class.
 *
 * @since 1.0.0
 */
class Phone extends Text {

    /**
	 * Returns the field type.
	 *
	 * @return string
	 */
	public function get_field_type() {
		return 'phone';
	}

    /**
	 * Returns the field name.
	 *
	 * @return string
	 */
	public function get_field_name() {
		return __( 'Phone Number', 'hizzle-forms' );
	}

    /**
	 * Returns the autocomplete value.
	 *
	 * @return string|false
	 */
	protected function get_autocomplete() {
		return 'tel';
	}
}
