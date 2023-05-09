/**
 * Internal dependencies
 */
import './view.scss';
import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';
import domReady from '@wordpress/dom-ready';

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

	// Watch for form submissions.
	document.addEventListener('submit', (e) => {

		// Our forms have the .wp-block-hizzle-forms-form class.
		if (!e.target.classList.contains('wp-block-hizzle-forms-form')) {
			return;
		}

		// Prevent the form from submitting.
		e.preventDefault();

		// Get the form.
		const form = e.target;

		// Get the form ID from data-instance-id attribute.
		const formID = form.dataset.instanceId;

		// Get the form fields.
		const fields = new FormData(form);

		// Add the conversion page to the form fields.
		fields.append('hizzle_conversion_page', window.location.href);

		console.log(formDataToObject(fields));
		// Add submitting class to the form.
		form.classList.add('hizzle-forms-submitting');

		// Post the form.
		apiFetch({
			path: '/hizzle/v1/forms/submit/' + formID,
			method: 'POST',
			data: formDataToObject(fields),
		}).then((res) => {

			if ('message' === res.action) {
				// TODO:
			}

			if ('redirect' === res.action) {
				// TODO:
			}

			return res;
		}).catch((err) => {
			console.log(err);
		}).finally(() => {
			// Remove submitting class from the form.
			form.classList.remove('hizzle-forms-submitting');
		});

	});
});
