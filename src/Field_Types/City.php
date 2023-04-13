<?php
/**
 * Address fields.
 *
 * @since 1.0.0
 *
 */

namespace Hizzle\Forms\Field_Types;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * The address field class.
 *
 * @since 1.0.0
 */
class City extends Address {

    /**
	 * Returns the field type.
	 *
	 * @return string
	 */
	public function get_field_type() {
		return 'address-level2';
	}

    /**
	 * Returns the field name.
	 *
	 * @return string
	 */
	public function get_field_name() {
		return __( 'City', 'hizzle-forms' );
	}

}
