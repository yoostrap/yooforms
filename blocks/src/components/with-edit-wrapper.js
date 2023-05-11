import classnames from 'classnames';
import { isEmpty } from 'lodash';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import HizzleFieldControls from './field-controls';
import HizzleValidationControls from './validation-controls';

/**
 * Returns a function to containing an edit wrapper.
 *
 * @param {Object} attributes The block's attributes. 
 */
export default function WithEditWrapper ( {attributes, setAttributes, disableLabel, disableHelpText, children, className, isSelected, fieldType, ...props} ) {

	const showHelpText = ! disableHelpText && ( isSelected || ! isEmpty( attributes.help ) );
	const showLabel	   = ! disableLabel && ( isSelected || ! isEmpty( attributes.label ) );

	return (
		<div { ...useBlockProps( { className: classnames( 'hizzle-forms-field', className ) }) }>

			{ showLabel && (
				<RichText
					tagName="label"
					value={ attributes.label }
					className="hizzle-forms__field-label"
					onChange={ value => {
						setAttributes( { label: value } );
					} }
					placeholder={ __( 'Add label…', 'hizzle-forms' ) }
				/>
			) }

			{ children }

			{ showHelpText && (
				<RichText
					tagName="p"
					value={ attributes.help }
					className="hizzle-forms__field-help-text"
					onChange={ value => setAttributes( { help: value } ) }
					placeholder={ __( 'Add help text…', 'hizzle-forms' ) }
				/>
			) }

			<HizzleFieldControls setAttributes={ setAttributes } attributes={ attributes } { ...props} />
			<HizzleValidationControls setAttributes={ setAttributes } attributes={ attributes } fieldType={fieldType} />
		</div>

	);
}
