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
		this.field.querySelectorAll( ':input' ).forEach( input => {

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

		// Loop through all rules.
		this.rules.forEach( rule => {

			// Abort if not supported.
			if ( ! allRules[ rule.name ] ) {
				return;
			}

			// Validate.
			if ( allRules[ rule.name ].validate( this.field.value, rule ) ) {
				return;
			}

			// Add error.
			this.errors.push( rule.errorMessage || allRules[ rule.name ].defaultMessage );
		} );

		// Hides or shows the error message.
		this.toggleError();
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

		// Skip if field has not data-validation attribute.
		if ( ! field.dataset.validation || ! Array.isArray( field.dataset.validation ) || ! field.dataset.validation.length ) {
			return;
		}

		const instanceID = field.dataset.instanceId;

		if ( instanceID ) {
			fields[ instanceID ] = new Field( field, field.dataset.validation );
		}

	});

	return {

		/**
		 * @var {Array} errors Custom error messages.
		 */
		errors: [],

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
