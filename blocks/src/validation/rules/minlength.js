/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Rule name.
export const name = 'minlength';

// Rule label.
export const label = __( 'Minimum length', 'hizzle-forms' );

// Default error message.
export const defaultMessage = __( 'The value must be at least {threshold} characters long.', 'hizzle-forms' );

// Value type.
export const fieldTypes = [ 'text', 'textarea' ];

// Edit details.
export const edit = [{
	name: 'threshold',
	type: 'number',
	label,
}]

// Validation function.
export const validate = function ( value, config ) {
	if ( value.length < parseInt( config.threshold ) ) {
		return false;
	}

	return true;
};

// Admin export.
export const admin = { name, label, defaultMessage, fieldTypes, edit };

// Frontend export.
export const frontend = { name, defaultMessage, validate };
