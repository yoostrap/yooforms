/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Rule name.
export const name = 'required';

// Rule label.
export const label = __( 'Required', 'hizzle-forms' );

// Checkbox label.
export const checkboxLabel = __( 'Is this field required?', 'hizzle-forms' );

// Default error message.
export const defaultMessage = __( 'This field is required.', 'hizzle-forms' );

// Value type.
export const fieldTypes = [ 'all' ];

// Edit details.
export const edit = []

// Validation function.
export const validate = function ( value, config ) {
	return value.length > 0;
};

// Admin export.
export const admin = { name, label, checkboxLabel, defaultMessage, fieldTypes, edit };

// Frontend export.
export const frontend = { name, defaultMessage, validate };
