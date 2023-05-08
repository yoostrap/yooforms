/**
 * Internal dependencies
 */
import './view.scss';
import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';
import domReady from '@wordpress/dom-ready';

domReady( () => {

	// Watch for form submissions.
	document.addEventListener( 'submit', ( e ) => {

		// Our forms have the .wp-block-hizzle-forms-forms class.
		if ( ! e.target.classList.contains( 'wp-block-hizzle-forms-forms' ) ) {
			return;
		}

		// Prevent the form from submitting.
		e.preventDefault();

		// Get the form.
		const form = e.target;

		console.log( form );
		// TODO: Complete.
	} );
} );
