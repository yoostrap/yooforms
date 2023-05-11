/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Rule name.
export const name = 'maxitems';

// Rule label.
export const label = __( 'Maximum items', 'hizzle-forms' );

// Checkbox label.
export const checkboxLabel = __( 'Set a maximum number of selectable items?', 'hizzle-forms' );

// Default error message.
export const defaultMessage = __( 'You must select at most {threshold} items.', 'hizzle-forms' );

// Value type.
export const fieldTypes = [ 'array' ];

// Edit details.
export const edit = [{
	name: 'threshold',
	type: 'number',
	label,
}]

// Validation function.
export const validate = function ( value, config ) {
	if ( value.length > parseInt( config.threshold ) ) {
		return false;
	}

	return true;
};

// Admin export.
export const admin = { name, label, checkboxLabel, defaultMessage, fieldTypes, edit };

// Frontend export.
export const frontend = { name, defaultMessage, validate };
