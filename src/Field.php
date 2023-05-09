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
     * @var string|string $value The field value.
     */
    public $value = '';

    /**
     * @var array $options The field options.
     */
    public $options = array();

    /**
     * @var array $validations The field validations.
     */
    public $validations = array();

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

}
