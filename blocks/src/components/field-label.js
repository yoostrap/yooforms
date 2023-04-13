import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Displays a label editor for a field.
 * @param {Object} attributes The block's attributes. 
 */
export const FieldLabelEdit = ( {
	className,
	label,
	labelFieldName,
	placeholder,
	resetFocus,
	setAttributes,
} ) => {

	return (
		<div className={ classnames( className, 'hizzle-forms__field-label' ) }>
			<RichText
				tagName="label"
				value={ label }
				className="hizzle-forms-field-label__input"
				onChange={ value => {
					resetFocus && resetFocus();
					if ( labelFieldName ) {
						setAttributes( { [ labelFieldName ]: value } );
						return;
					}
					setAttributes( { label: value } );
				} }
				placeholder={ placeholder ?? __( 'Add label…', 'hizzle-forms' ) }
				withoutInteractiveFormatting
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
			/>
		</div>
	);
};

/**
 * Displays a label for a field.
 * @param {Object} attributes The block's attributes.
 */
export const FieldLabelSave = ( {
	className,
	label,
} ) => {
	return (
		<div className={ classnames( className, 'hizzle-forms__field-label' ) }>
			<RichText.Content
				tagName="label"
				value={ label }
			/>
		</div>
	);
}
