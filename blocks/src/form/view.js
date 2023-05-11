/**
 * WordPress dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';
import domReady from '@wordpress/dom-ready';

/**
 * Internal dependencies
 */
import './view.scss';
import validateForm from '../validation/frontend';

/**
 * Converts a key to a value or object.
 *
 * key[]=value becomes { key: [ value ] }
 * key[key2]=value becomes { key: { key2: value } }
 * key[key2][key3]=value becomes { key: { key2: { key3: value } } }
 * key[][key3]=value becomes { key: [ { key3: value } ] }
 * key=value becomes { key: value }
 *
 * @param {string} key
 * @param {string} value
 * @param {Object} obj
 * @return {Object}
 */
const keyToValue = (key, value, obj) => {

	if ( '' === key ) {
		return value;
	}

	// Split the key into parts.
	const parts = key.split('[');

	// If there are no parts, return the value.
	if (parts.length === 1) {
		return { ...obj, [key]: value };
	}

	// If only one part remains, return the value.
	if (parts.length === 2) {
		const [first, second] = parts;

		const innerKey = second.slice(0, -1);

		// If '' === innerKey, it's an array.
		if (innerKey === '') {
			const previous = obj[first] || [];
			previous.push(value);

			return { ...obj, [first]: previous };
		}

		// Otherwise, it's an object.
		const previous = obj[first] || {};
		return { ...obj, [first]: { ...previous, [innerKey]: value } };
	}

	// Otherwise, this is a nested object, e.g  key[key2][key3]=value or key[][key3]=value.
	const [first, ...rest] = parts;
	let innerKey = rest.join('['); // Either key2][key3]=value or ][key3]=value.

	// Process nested object, e.g key2][key3]=value.
	if ( ! innerKey.startsWith(']') ) {
		const previous = obj[first] || {};
		return { ...obj, [first]: keyToValue( innerKey.replace(/\]/, ''), value, previous) };
	}

	// Process nested array, e.g. ][key3]=value.
	const previous = obj[first] || [];

	// Unwrap second key.
	previous.push( keyToValue( innerKey.slice(1).replace(/\[/, '').replace(/\]/, ''), value, {} ) );

	return { ...obj, [first]: previous };
};

/**
 * 
 * @param {FormData} formData 
 * @returns {Object}
 */
const formDataToObject = (formData ) => {
	let data = {};

	// Convert the form data to an object.
	formData.forEach((value, key) => {
		data = keyToValue(key, value, data);
	});

	return data;
};

domReady(() => {

	// Init all forms.
	const forms = document.querySelectorAll('.wp-block-hizzle-forms-form');

	// Loop through each form.
	forms.forEach((form) => {
		const validation = validateForm(form);

		// Reset error message when a field changes.
		form.querySelectorAll('input, select, textarea').forEach((field) => {
			field.addEventListener('change', () => {
				if ( validation.errors.length > 0 ) {
					validation.errors = [];
					validation.toggleError();
				}
			});
		});

		// Scrolls to the first error.
		const scrollToFirstError = () => {
			const firstError = form.querySelector('.hizzle-forms__field--has-error');
			if ( firstError ) {
				firstError.scrollIntoView({ behavior: 'smooth' });
			}
		};

		// Watch for submissions.
		form.addEventListener('submit', (e) => {

			// Prevent the form from submitting.
			e.preventDefault();

			// Abort if the form is invalid.
			if ( ! validation.validate() ) {

				// Scroll to the first error.
				scrollToFirstError();
				return;
			}

			// Get the form ID from data-instance-id attribute.
			const formID = form.dataset.instanceId;

			// Get the form fields.
			const fields = new FormData(form);

			// Add the conversion page to the form fields.
			fields.append('hizzle_conversion_page', window.location.href);

			// Add submitting class to the form.
			form.classList.add('hizzle-forms-submitting');

			// Post the form.
			apiFetch({
				path: '/hizzle/v1/forms/submit/' + formID,
				method: 'POST',
				data: formDataToObject(fields),
			})

			// On success, either show a success message or redirect.
			.then((res) => {

				// Replace the form with the message.
				if ('message' === res.action) {
					form.outerHTML = `<div class="wp-block-hizzle-forms__success-message">${res.message}</div>`;
					form.classList.remove('hizzle-forms-submitting');
				}

				if ('redirect' === res.action) {
					window.location.href = res.redirect;
				}

				return res;
			})

			// On error, show an error message.
			.catch((err) => {

				if ( err.code ) {
					validation.displayError( err.code, err.message );

					// Additional errors.
					if ( err.additional_errors ) {
						err.additional_errors.forEach((error) => {
							validation.displayError( error.code, error.message );
						});
					}
				} else {
					validation.displayError( 'unknown', __( 'An unknown error occurred while submitting the form. Check your network connectivity then try again.', 'hizzle-forms' ) );
				}

				// Remove submitting class from the form.
				form.classList.remove('hizzle-forms-submitting');

				// Scroll to the first error.
				scrollToFirstError();
			});
		});
	});
});
