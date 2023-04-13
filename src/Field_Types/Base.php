<?php
/**
 * The base custom field class.
 *
 * Custom field types such as texts, textarea etc can extend this class.
 * They will then be instantiated with details of the corresponding custom field.
 *
 * @since 1.0.0
 *
 */

namespace Hizzle\Forms\Field_Types;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * The base field class.
 *
 * @since 1.0.0
 */
abstract class Base {

	/**
	 * @var array
	 */
	public $supports = array(); // An array of supported features.

	/**
	 * Checks if the field supports a given feature.
	 *
	 * @since 1.0.0
	 * @param string $feature
	 * @return bool
	 */
	public function supports( $feature ) {
		return in_array( trim( $feature ), $this->supports );
	}

	/**
	 * Returns the field type.
	 *
	 * @return string
	 */
	abstract public function get_field_type();

	/**
	 * Returns the field name.
	 *
	 * @return string
	 */
	abstract public function get_field_name();

	/**
	 * Validates the field value.
	 *
	 * @param array $args Field args
	 * @param mixed $value
	 * @return \WP_Error
	 */
	abstract public function validate( $args, $value );

   /**
	 * Displays the actual markup for this field.
	 *
	 * @since 1.0.0
	 * @param array $args Field args
	 */
	abstract public function output( $args );

	/**
	 * Sanitizes the submitted value for storage.
	 *
	 * @since 1.0.0
	 * @param mixed $value Submitted value
	 */
	abstract public function sanitize_value( $value );

	/**
	 * Formats the value for display.
	 *
	 * @since 1.0.0
	 * @param mixed $value Sanitized value
	 */
	public function format_value( $value ) {
		$value = (string) map_deep( $this->sanitize_value( $value ), 'esc_html' );
		return '' === $value ? '&mdash;' : $value;
	}

	/**
	 * Displays attributes for the field.
	 *
	 * @since 1.0.0
	 * @param array $atts Field attributes
	 */
	public function display_attributes( $atts ) {

		foreach ( $atts as $key => $value ) {

			// Skip empty attributes.
			if ( '' === $value || false === $value || null === $value ) {
				continue;
			}

			// Skip boolean attributes.
			if ( true === $value ) {
				echo esc_attr( $key ) . ' ';
				continue;
			}

			// Ensure the value is a string.
			$value = is_array( $value ) ? implode( ', ', $value ) : (string) $value;

			echo esc_attr( $key ) . '="' . esc_attr( $value ) . '" ';

		}
	}
}
