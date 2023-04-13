<?php
/**
 * Hidden fields.
 *
 * @since 1.0.0
 *
 */

namespace Hizzle\Forms\Field_Types;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * The hidden field class.
 *
 * @since 1.0.0
 */
class Hidden extends Text {

    /**
	 * @var array An array of supported features.
	 */
	public $supports = array( 'label', 'default', 'default_as_value' );

    /**
	 * Returns the field type.
	 *
	 * @return string
	 */
	public function get_field_type() {
		return 'hidden';
	}

    /**
	 * Returns the field name.
	 *
	 * @return string
	 */
	public function get_field_name() {
		return __( 'Hidden', 'hizzle-forms' );
	}

    /**
	 * Returns the input attributes.
	 *
	 * @since 1.0.0
	 * @param array $args Field args
	 */
	public function get_atts( $args ) {

		$value = ! isset( $args['value'] ) ? '' : $args['value'];

		if ( $this->supports( 'default' ) && '' === $value && ! empty( $args['default'] ) ) {
			$value = $args['default'];
		}

		return array(
			'type'  => $this->get_input_type(),
			'name'  => 'hizzle_forms[' . $args['key'] . ']',
			'id'    => empty( $args['id'] ) ? 'hizzle-form-field-' . sanitize_html_class( $args['key'] ) : $args['id'],
			'value' => $value,
            'class' => 'hizzle-form-field-' . $this->get_field_type(),
		);

	}

    /**
	 * Displays the actual markup for this field.
	 *
	 * @since 1.0.0
	 * @param array $args Field args
	 */
	public function output( $args ) {

		$atts = apply_filters( 'hizzle_forms_field_attributes', $this->get_atts( $args ), $args, $this );

		// Display the input open.
		echo '<input ';

		// Display the attributes.
		$this->display_attributes( $atts );

		// Display the input close.
		echo '/>';
	}
}
