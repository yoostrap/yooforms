<?php
/**
 * Text fields.
 *
 * @since 1.0.0
 *
 */

namespace Hizzle\Forms\Field_Types;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * The text field class.
 *
 * @since 1.0.0
 */
class Text extends Base {

	/**
	 * @var array An array of supported features.
	 */
	public $supports = array( 'label', 'placeholder', 'default', 'required', 'classes', 'max_length', 'min_length', 'description' );

	/**
	 * Returns the field type.
	 *
	 * @return string
	 */
	public function get_field_type() {
		return 'text';
	}

	/**
	 * Returns the input type.
	 *
	 * @return string
	 */
	public function get_input_type() {
		return $this->get_field_type();
	}

	/**
	 * Returns the autocomplete value.
	 *
	 * @return string|false
	 */
	protected function get_autocomplete() {
		return false;
	}

	/**
	 * Returns the field name.
	 *
	 * @return string
	 */
	public function get_field_name() {
		return __( 'Text', 'hizzle-forms' );
	}

	/**
	 * Validates the field value.
	 *
	 * @param array $args Field args
	 * @param mixed $value
	 * @return \WP_Error|true
	 */
	public function validate( $args, $value ) {

		// Validate required.
		if ( $this->supports( 'required' ) && ! empty( $args['required'] ) && empty( $value ) && '0' !== (string) $value ) {
			return new \WP_Error( 'required', __( 'This field is required.', 'hizzle-forms' ) );
		}

		// Validate min length.
		if ( $this->supports( 'min_length' ) && ! empty( $args['min_length'] ) && strlen( (string) $value ) < $args['min_length'] ) {
			return new \WP_Error( 'min_length', sprintf( __( 'This field must be at least %s characters long.', 'hizzle-forms' ), $args['min_length'] ) );
		}

		// Validate max length.
		if ( $this->supports( 'max_length' ) && ! empty( $args['max_length'] ) && strlen( (string) $value ) > $args['max_length'] ) {
			return new \WP_Error( 'max_length', sprintf( __( 'This field must be at most %s characters long.', 'hizzle-forms' ), $args['max_length'] ) );
		}

		return true;
	}

	/**
	 * Displays the opening wrapper.
	 *
	 * @param array $args Field args
	 */
	public function display_opening_wrapper( $args ) {

		// Base classes.
		$classes = array(
			'hizzle-form-field',
			'hizzle-form-field--' . $this->get_field_type(),
			'hizzle-form-field__' . sanitize_html_class( $args['key'] )
		);

		// Add custom classes.
		if ( $this->supports( 'classes' ) && ! empty( $args['classes'] ) ) {
			$classes[] = $args['classes'];
		}

		$id = empty( $args['id'] ) ? 'hizzle-form-field-' . sanitize_html_class( $args['key'] ) : $args['id'];

		?>
			<div class="<?php echo esc_attr( implode( ' ', $classes ) ); ?>" id="<?php echo esc_attr( $id ); ?>">

				<?php if ( $this->supports( 'label' ) && ! empty( $args['label'] ) ) : ?>
					<label class="hizzle-form-field__label" for="<?php echo esc_attr( $args['id'] ); ?>">
						<?php echo wp_kses_post( $args['label'] ); ?>
					</label>
				<?php endif; ?>

		<?php
	}

	/**
	 * Displays the closing wrapper.
	 *
	 * @param array $args Field args
	 */
	public function display_closing_wrapper( $args ) {

		// Check if we have a description.
		if ( $this->supports( 'description' ) && ! empty( $args['description'] ) ) {
			?>
				<p class="hizzle-form-field__description"><?php echo wp_kses_post( $args['description'] ); ?></p>
			<?php
		}

		?>
			</div>
		<?php
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
			'type'          => $this->get_input_type(),
			'name'          => 'hizzle_forms[' . $args['key'] . ']',
			'id'            => empty( $args['id'] ) ? 'hizzle-form-field-' . sanitize_html_class( $args['key'] ) : $args['id'],
			'value'         => $value,
			'placeholder'   => empty( $args['placeholder'] ) ? '' : $args['placeholder'],
			'class'         => 'hizzle-form-field__input',
			'required'      => ! empty( $args['required'] ),
			'aria-required' => ! empty( $args['required'] ),
			'maxlength'     => empty( $args['max_length'] ) ? '' : $args['max_length'],
			'minlength'     => empty( $args['min_length'] ) ? '' : $args['min_length'],
			'autocomplete'  => $this->get_autocomplete(),
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

		// Display the opening wrapper.
		$this->display_opening_wrapper( $args );

		// Display the input open.
		echo '<input ';

		// Display the attributes.
		$this->display_attributes( $atts );

		// Display the input close.
		echo '/>';

		// Display the closing wrapper.
		$this->display_closing_wrapper( $args );
	}

	/**
	 * Sanitizes the submitted value.
	 *
	 * @since 1.0.0
	 * @param mixed $value Submitted value
	 */
	public function sanitize_value( $value ) {
		return sanitize_text_field( $value );
	}
}
