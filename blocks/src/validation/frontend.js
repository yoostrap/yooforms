import allRules from './rules/frontend';

/**
 * Container for a single field.
 */
class Field {

	/**
	 * @var {boolean} submissionAttempted Checks if submission was attempted.
	 */
	submissionAttempted = false;

	/**
	 * @var {Array} errors Holds all errors for this field.
	 */
	errors = [];

	/**
	 * @var {Array} rules Holds all rules for this field.
	 */
	rules = [];

	/**
	 * @var {Element} field The HTML element.
	 */
	field = null;

	/**
	 * Class constructor.
	 *
	 * @param {Element} field The HTML element.
	 * @param {Array} rules The rules for this field.
	 */
	constructor( field, rules ) {
		this.field = field;
		this.rules = rules;

		this.initEventListeners();
	}

	/**
	 * Inits event listeners.
	 */
	initEventListeners() {

		// Search for :input elements in the field.
		// This includes input, select and textarea elements.
		this.field.querySelectorAll( 'input, select, textarea' ).forEach( input => {

			// On blur, set touched to true and validate.
			input.addEventListener( 'blur', () => {
				this.validate();
			} );

			// On input, validate if submission was attempted.
			input.addEventListener( 'input', () => {
				if ( this.submissionAttempted ) {
					this.validate();
				}
			} );
		} );
	}

	/**
	 * Validates the field.
	 */
	validate() {
		this.errors = [];
		const value = this.getValue();

		// Loop through all rules.
		this.rules.forEach( rule => {

			// Abort if not supported.
			if ( ! allRules[ rule.name ] ) {
				return;
			}

			// Validate.
			if ( allRules[ rule.name ].validate( value, rule ) ) {
				return;
			}

			// Prepare the error message.
			let errorMessage = rule.errorMessage || allRules[ rule.name ].defaultMessage;

			// Replace placeholders.
			Object.keys( rule ).forEach( key => {
				errorMessage = errorMessage.replace( `{${ key }}`, rule[ key ] );
			} );

			// Add error.
			this.errors.push( errorMessage );
		} );

		// Hides or shows the error message.
		this.toggleError();
	}

	/**
	 * Retrieves the current field value.
	 */
	getValue() {

		// Radio and multiple checkboxes.
		if ( this.field.classList.contains( 'wp-block-hizzle-forms-radio' ) ) {

			// Loop through all inputs.
			const checkedCheckboxes = [];
			let isCheckbox = false;

			this.field.querySelectorAll( 'input' ).forEach( input => {

				isCheckbox = 'checkbox' === input.type;

				// If type === radio, return if checked.
				if ( ! isCheckbox && input.checked ) {
					return input.value;
				}

				// If type === checkbox, push to array if checked.
				if ( isCheckbox && input.checked ) {
					checkedCheckboxes.push( input.value );
				}
			});

			return isCheckbox ? checkedCheckboxes : '';
		}

		// Checkbox.
		if ( this.field.classList.contains( 'wp-block-hizzle-forms-checkbox' ) ) {
			const checkbox = this.field.querySelector( 'input[type="checkbox"]' );
			return checkbox ? checkbox.checked : false;
		}

		// Others.
		const input = this.field.querySelector( 'select, input, textarea' );
		return input ? input.value : '';
	}

	/**
	 * Toggles the error message.
	 *
	 * Message container is .hizzle-forms__field-error
	 */
	toggleError() {
		const errorContainer = this.field.querySelector( '.hizzle-forms__field-error' );

		// If there are errors, show the first one.
		if ( this.errors.length ) {
			errorContainer.innerHTML = this.errors[ 0 ];
			this.field.classList.add( 'hizzle-forms__field--has-error' );
			return;
		}

		// Otherwise, hide the error message.
		errorContainer.innerHTML = '';
		this.field.classList.remove( 'hizzle-forms__field--has-error' );
	}
}

/**
 * Handles form validation.
 *
 * @param {Element} form
 * @return {Object}
 */
export default function initForm( form ) {

	const fields = {};

	// Loop through all fields.
	// Each field wrapper has the .hizzle-forms-field class.
	form.querySelectorAll( '.hizzle-forms-field' ).forEach( field => {

		const instanceID = field.dataset.instanceId;

		try{

			let validation = field.dataset.validation ? JSON.parse( field.dataset.validation ) : [];

			// Skip if field has not data-validation attribute.
			if ( ! Array.isArray( validation ) ) {
				validation = [];
			}

			if ( instanceID ) {
				fields[ instanceID ] = new Field( field, validation );
			}
		} catch (e) {
			fields[ instanceID ] = new Field( field, [] );
			console.error(e)
		}
	});

	return {

		/**
		 * @var {Array} errors Custom error messages.
		 */
		errors: [],

		/**
		 * @var {Field} fields Tracked form fields.
		 */
		fields,

		/**
		 * Validates the form.
		 *
		 * @return {boolean} True if valid, false if not.
		 */
		validate() {
			let hasError = false;
			this.errors = [];

			// Loop through all fields.
			Object.keys( fields ).forEach( field => {
				fields[ field ].submissionAttempted = true;
				fields[ field ].validate();

				if ( fields[ field ].errors.length ) {
					hasError = true;
				}
			} );

			return ! hasError;
		},

		/**
		 * Displays a custom error message.
		 *
		 * @param {string} errorCode The error code.
		 * @param {string} errorMessage The error message.
		 */
		displayError( errorCode, errorMessage ) {

			// Is there a field with this error code?
			if ( fields[ errorCode ] ) {
				fields[ errorCode ].errors = [errorMessage];
				fields[ errorCode ].toggleError();
				return;
			}

			// Otherwise, add the error to the global errors array.
			this.errors = [errorMessage];
			this.toggleError();
		},

		/**
		 * Toggles the error message.
		 *
		 * Message container is .hizzle-forms__form-error
		 */
		toggleError() {
			const errorContainer = form.querySelector( '.hizzle-forms__form-error' );

			// If there are errors, show the first one.
			if ( this.errors.length ) {
				errorContainer.innerHTML = this.errors[ 0 ];
				errorContainer.classList.add( 'hizzle-forms__form--has-error' );
				return;
			}

			// Otherwise, hide the error message.
			errorContainer.innerHTML = '';
			errorContainer.classList.remove( 'hizzle-forms__form--has-error' );
		}
	}
}
