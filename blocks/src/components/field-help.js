import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Displays a help text editor for a field.
 * @param {Object} attributes The block's attributes. 
 */
export const FieldHelpEdit = ( {
	className,
	help,
	helpFieldName,
	placeholder,
	setAttributes,
} ) => {

	return (
		<RichText
			tagName="p"
			value={ help }
			className={ classnames( className, 'hizzle-forms__help-text' ) }
			onChange={ value => {
				if ( helpFieldName ) {
					setAttributes( { [ helpFieldName ]: value } );
					return;
				}
				setAttributes( { help: value } );
			} }
			placeholder={ placeholder ?? __( 'Enter help text…', 'hizzle-forms' ) }
			withoutInteractiveFormatting
		/>
	);
};

/**
 * Displays a help text for a field.
 * @param {Object} attributes The block's attributes.
 */
export const FieldHelpSave = ( {
	className,
	help,
} ) => {
	return (
		<RichText.Content
			tagName="p"
			className={ classnames( className, 'hizzle-forms__help-text' ) }
			value={ help }
		/>
	);
}
