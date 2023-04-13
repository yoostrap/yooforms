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
class Address extends Text {

    /**
	 * @var array An array of supported features.
	 */
	public $supports = array( 'label', 'placeholder', 'default', 'required', 'classes', 'max_length', 'min_length', 'description', 'address' );

    /**
	 * Returns the field type.
	 *
	 * @return string
	 */
	public function get_field_type() {
		return 'address-line1';
	}

    /**
	 * Returns the input type.
	 *
	 * @return string
	 */
	public function get_input_type() {
		return 'text';
	}

	/**
	 * Returns the autocomplete value.
	 *
	 * @return string|false
	 */
	protected function get_autocomplete() {
		return $this->get_field_type();
	}

    /**
	 * Returns the field name.
	 *
	 * @return string
	 */
	public function get_field_name() {
		return __( 'Address', 'hizzle-forms' );
	}

    /**
	 * Returns the input attributes.
	 *
	 * @since 1.0.0
	 * @param array $args Field args
	 */
	public function get_atts( $args ) {
        return array_merge(
            parent::get_atts( $args ),
            array(
                'data-is-address'  => true,
                'data-is-billing'  => empty( $args['is_shipping'] ),
                'data-is-shipping' => ! empty( $args['is_shipping'] ),
            )
        );
    }
}
