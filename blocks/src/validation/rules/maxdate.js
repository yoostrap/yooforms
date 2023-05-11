/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Rule name.
export const name = 'maxdate';

// Rule label.
export const label = __( 'Maximum date', 'hizzle-forms' );

// Checkbox label.
export const checkboxLabel = __( 'Set a maximum date?', 'hizzle-forms' );

// Default error message.
export const defaultMessage = __( 'The oldest date allowed is {threshold}.', 'hizzle-forms' );

// Value type.
export const fieldTypes = [ 'date' ];

// Edit details.
export const edit = [{
	name: 'threshold',
	type: 'date',
	label,
}]

// Validation function.
export const validate = function ( value, config ) {
	if (
		/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test( value ) &&
		/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test( config.threshold ) &&
		value > config.threshold
	) {
		return false;
	}

	return true;
};

// Admin export.
export const admin = { name, label, checkboxLabel, defaultMessage, fieldTypes, edit };

// Frontend export.
export const frontend = { name, defaultMessage, validate };
