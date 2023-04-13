<?php
/**
 * Color fields.
 *
 * @since 1.0.0
 *
 */

namespace Hizzle\Forms\Field_Types;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * The color field class.
 *
 * @since 1.0.0
 */
class Color extends Text {

    /**
	 * @var array An array of supported features.
	 */
	public $supports = array( 'label', 'placeholder', 'default', 'required', 'classes', 'description' );

    /**
	 * Returns the field type.
	 *
	 * @return string
	 */
	public function get_field_type() {
		return 'color';
	}

    /**
	 * Returns the field name.
	 *
	 * @return string
	 */
	public function get_field_name() {
		return __( 'Color', 'hizzle-forms' );
	}
}
