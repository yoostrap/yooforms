<?php

namespace Hizzle\Forms;

/**
 * Container for a single field.
 *
 * @since   1.0.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Container for a single field.
 *
 */
class Field {

	/**
	 * @var string $instanceID The field instance ID.
	 */
	public $instance_id = '';

	/**
	 * @var string $field_type The field type.
	 */
	public $field_type = 'hizzle-forms/input';

	/**
	 * @var string $label The field label.
	 */
	public $label = '';

	/**
	 * @var string $name The field name.
	 */
	public $name = '';

	/**
	 * @var string $placeholder The field placeholder.
	 */
	public $placeholder = '';

	/**
	 * @var string $help The help text.
	 */
	public $help = '';

	/**
	 * @var string|string[] $value The field value.
	 */
	public $value = '';

	/**
	 * @var array $options The field options.
	 */
	public $options = array();

	/**
	 * @var array $validation The field validations.
	 */
	public $validation = array();

	/**
	 * @var array $extra The extra field attributes.
	 */
	public $extra = array();

	/**
	 * Class Constructor.
	 *
	 * @param array $args The field arguments.
	 */
	public function __construct( $args ) {

		if ( empty( $args['name'] ) ) {
			return;
		}

		// Set the field type.
		$this->field_type = $args['name']; // Field type === the block name.

		// Set the field attributes.
		if ( ! empty( $args['attributes'] ) ) {
			foreach ( $args['attributes'] as $key => $value ) {

				// Set the instance ID.
				if ( 'instanceID' === $key ) {
					$this->instance_id = $value;
					continue;
				}

				// Check if the key is a valid property.
				if ( property_exists( $this, $key ) ) {
					$this->$key = $value;
				} else {
					$this->extra[ $key ] = $value;
				}
			}
		}

		// Prepare radio and multi-checkbox options.
		if ( 'hizzle-forms/radio' === $this->field_type ) {
			$this->prepare_radio_options( empty( $args['innerBlocks'] ) ? array() : $args['innerBlocks'] );
		}

		// Combine options.
		$this->options = array_combine( $this->options, $this->options );

		do_action( 'hizzle_forms_field_init', $this );
	}

	/**
	 * Prepares radio options.
	 *
	 * @param array $options The radio options.
	 */
	private function prepare_radio_options( $options ) {

		$this->options = array();

		// Multi-checkboxes.
		if ( empty( $this->extra['isRadio'] ) ) {
			$this->value = array();
		}

		foreach ( $options as $option ) {

			if ( 'hizzle-forms/radio-option' !== $option['name'] || ! isset( $option['attributes']['option'] ) || '' === $option['attributes']['option'] ) {
				continue;
			}

			$this->options[] = $option['attributes']['option'];

			if ( ! empty( $option['attributes']['selected'] ) ) {

				if ( is_array( $this->value ) ) {
					$this->value[] = $option['attributes']['option'];
				} else {
					$this->value = $option['attributes']['option'];
				}
			}
		}
	}

	/**
	 * Prepares the field value.
	 *
	 * @param array $data The submitted data value.
	 */
	public function prepare_value( $data ) {

		// Checkbox.
		if ( 'hizzle-forms/checkbox' === $this->field_type ) {
			$this->value = ! empty( $data[ $this->name ] );
			return;
		}

		// Multi-checkboxes.
		if ( 'hizzle-forms/radio' === $this->field_type && empty( $this->extra['isRadio'] ) ) {
			$this->value = empty( $data[ $this->name ] ) ? array() : $data[ $this->name ];
			$this->value = array_map( 'sanitize_text_field', wp_parse_list( $this->value ) );
			return;
		}

		$value = isset( $data[ $this->name ] ) ? $data[ $this->name ] : '';

		// Inputs.
		if ( 'hizzle-forms/input' === $this->field_type && ! empty( $this->extra['type'] ) && '' !== $value ) {

			// Number.
			if ( 'number' === $this->extra['type'] ) {
				$this->value = floatval( $value );
				return;
			}

			// Date.
			if ( 'date' === $this->extra['type'] ) {
				$this->value = gmdate( 'Y-m-d', strtotime( $value ) );
				return;
			}

			// Time.
			if ( 'time' === $this->extra['type'] ) {
				$this->value = gmdate( 'H:i:s', strtotime( $value ) );
				return;
			}
		}

		// Textarea.
		if ( 'hizzle-forms/textarea' === $this->field_type ) {
			$this->value = sanitize_textarea_field( $value );
			return;
		}

		// Default.
		$this->value = map_deep( $value, 'sanitize_text_field' );
	}

	/**
	 * Validates a given form field.
	 *
	 * @return true|\WP_Error
	 */
	public function validate() {
		$is_valid = true;

		if ( is_array( $this->validation ) ) {
			foreach ( $this->validation as $validation ) {

				// Abort if no validation.
				if ( empty( $validation['name'] ) ) {
					continue;
				}

				$method = 'validate_' . $validation['name'];
				$result = false;

				if ( method_exists( $this, $method ) ) {
					$result = $this->$method( $validation );
				}

				$result = apply_filters( 'hizzle_forms_validate_' . $validation['name'], $result, $validation, $this );

				// Move to next validation if the field is valid.
				if ( true === $result ) {
					continue;
				}

				$is_valid = new \WP_Error( $this->instance_id, $result );
				break;
			}
		}

		return apply_filters( 'hizzle_forms_validate_field', $is_valid, $this );
	}

	/**
	 * Validates a required field.
	 *
	 * @param array $validation The validation arguments.
	 */
	protected function validate_required( $validation ) {
		$is_valid = is_array( $this->value ) ? ! empty( $this->value ) : '' !== $this->value;

		if ( ! $is_valid ) {
			return ! empty( $validation['errorMessage'] ) ? $validation['errorMessage'] : __( 'This field is required.', 'hizzle-forms' );
		}

		return true;
	}

	/**
	 * Validates a minimum number.
	 *
	 * @param array $validation The validation arguments.
	 * @param string $message The error message.
	 */
	protected function validate_minnumber( $validation, $message = '' ) {

		if ( empty( $validation['threshold'] ) ) {
			return true;
		}

		$threshold = floatval( $validation['threshold'] );
		$value     = is_string( $this->value ) ? strlen( $this->value ) : $this->value;
		$is_valid  = is_array( $value ) ? count( $value ) >= $threshold : $value >= $threshold;

		if ( ! $is_valid ) {

			if ( empty( $message ) ) {
				$message = __( 'The value must be at least {threshold}.', 'hizzle-forms' );
			}

			return str_replace( '{threshold}', $threshold, ! empty( $validation['errorMessage'] ) ? $validation['errorMessage'] : $message );
		}

		return true;
	}

	/**
	 * Validates a minimum length.
	 *
	 * @param array $validation The validation arguments.
	 */
	protected function validate_minlength( $validation ) {
		return $this->validate_minnumber( $validation, __( 'The value must be at least {threshold} characters long.', 'hizzle-forms' ) );
	}

	/**
	 * Validates the minimum items.
	 *
	 * @param array $validation The validation arguments.
	 */
	protected function validate_minitems( $validation ) {
		return $this->validate_minnumber( $validation, __( 'You must select at least {threshold} items.', 'hizzle-forms' ) );
	}

	/**
	 * Validates a minimum date.
	 *
	 * @param array $validation The validation arguments.
	 */
	protected function validate_mindate( $validation ) {

		if ( empty( $validation['threshold'] ) ) {
			return true;
		}

		$threshold = strtotime( $validation['threshold'] );
		$value     = empty( $this->value ) ? 0 : strtotime( $this->value );
		$is_valid  = $value >= $threshold;

		if ( ! $is_valid ) {

			$message = __( 'The earliest date allowed is {threshold}.', 'hizzle-forms' );

			return str_replace( '{threshold}', gmdate( 'Y-m-d', $threshold ), ! empty( $validation['errorMessage'] ) ? $validation['errorMessage'] : $message );
		}

		return true;
	}

	/**
	 * Validates a maximum number.
	 *
	 * @param array $validation The validation arguments.
	 * @param string $message The error message.
	 */
	protected function validate_maxnumber( $validation, $message = '' ) {

		if ( empty( $validation['threshold'] ) ) {
			return true;
		}

		$threshold = floatval( $validation['threshold'] );
		$value     = is_string( $this->value ) ? strlen( $this->value ) : $this->value;
		$is_valid  = is_array( $value ) ? count( $value ) <= $threshold : $value <= $threshold;

		if ( ! $is_valid ) {

			if ( empty( $message ) ) {
				$message = __( 'The value must be at most {threshold}.', 'hizzle-forms' );
			}

			return str_replace( '{threshold}', $threshold, ! empty( $validation['errorMessage'] ) ? $validation['errorMessage'] : $message );
		}

		return true;
	}

	/**
	 * Validates a maximum length.
	 *
	 * @param array $validation The validation arguments.
	 */
	protected function validate_maxlength( $validation ) {
		return $this->validate_maxnumber( $validation, __( 'The value must be at most {threshold} characters long.', 'hizzle-forms' ) );
	}

	/**
	 * Validates the maximum items.
	 *
	 * @param array $validation The validation arguments.
	 */
	protected function validate_maxitems( $validation ) {
		return $this->validate_maxnumber( $validation, __( 'You must select at most {threshold} items.', 'hizzle-forms' ) );
	}

	/**
	 * Validates a maximum date.
	 *
	 * @param array $validation The validation arguments.
	 */
	protected function validate_maxdate( $validation ) {

		if ( empty( $validation['threshold'] ) ) {
			return true;
		}

		$threshold = strtotime( $validation['threshold'] );
		$value     = empty( $this->value ) ? 0 : strtotime( $this->value );
		$is_valid  = $value <= $threshold;

		if ( ! $is_valid ) {

			$message = __( 'The latest date allowed is {threshold}.', 'hizzle-forms' );

			return str_replace( '{threshold}', gmdate( 'Y-m-d', $threshold ), ! empty( $validation['errorMessage'] ) ? $validation['errorMessage'] : $message );
		}

		return true;
	}
}
