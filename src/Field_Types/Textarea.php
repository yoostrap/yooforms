<?php
/**
 * Textarea fields.
 *
 * @since 1.0.0
 *
 */

namespace Hizzle\Forms\Field_Types;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * The textarea field class.
 *
 * @since 1.0.0
 */
class Textarea extends Text {

    /**
	 * Returns the field type.
	 *
	 * @return string
	 */
	public function get_field_type() {
		return 'textarea';
	}

    /**
	 * Returns the field name.
	 *
	 * @return string
	 */
	public function get_field_name() {
		return __( 'Textarea', 'hizzle-forms' );
	}

    /**
	 * Displays the actual markup for this field.
	 *
	 * @since 1.0.0
	 * @param array $args Field args
	 */
	public function output( $args ) {

		$atts  = apply_filters( 'hizzle_forms_field_attributes', $this->get_atts( $args ), $args, $this );
        $value = $atts['value'];

        unset( $atts['value'] );

		// Display the opening wrapper.
		$this->display_opening_wrapper( $args );

        ?>
            <textarea <?php $this->display_attributes( $atts ); ?>><?php echo esc_textarea( $value ); ?></textarea>
        <?php
	}

	/**
	 * Sanitizes the submitted value.
	 *
	 * @since 1.0.0
	 * @param mixed $value Submitted value
	 */
	public function sanitize_value( $value ) {
		return sanitize_textarea_field( $value );
	}
}
