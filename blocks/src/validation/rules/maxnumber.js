/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Rule name.
export const name = 'maxnumber';

// Rule label.
export const label = __( 'Maximum number', 'hizzle-forms' );

// Default error message.
export const defaultMessage = __( 'The value must be at most {threshold}.', 'hizzle-forms' );

// Value type.
export const fieldTypes = [ 'number' ];

// Edit details.
export const edit = [{
	name: 'threshold',
	type: 'number',
	label,
}]

// Validation function.
export const validate = function ( value, config ) {
	if ( parseFloat( value ) > parseFloat( config.threshold ) ) {
		return false;
	}

	return true;
};

// Admin export.
export const admin = { name, label, defaultMessage, fieldTypes, edit };

// Frontend export.
export const frontend = { name, defaultMessage, validate };
