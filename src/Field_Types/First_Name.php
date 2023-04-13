<?php
/**
 * First name fields.
 *
 * @since 1.0.0
 *
 */

namespace Hizzle\Forms\Field_Types;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * The first name field class.
 *
 * @since 1.0.0
 */
class First_Name extends Address {

    /**
	 * Returns the field type.
	 *
	 * @return string
	 */
	public function get_field_type() {
		return 'given-name';
	}

    /**
	 * Returns the field name.
	 *
	 * @return string
	 */
	public function get_field_name() {
		return __( 'First Name', 'hizzle-forms' );
	}
}
