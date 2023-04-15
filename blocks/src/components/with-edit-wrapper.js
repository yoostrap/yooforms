import classnames from 'classnames';
import { isEmpty } from 'lodash';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import HizzleFieldControls from './field-controls';

/**
 * Returns a function to containing an edit wrapper.
 *
 * @param {Object} attributes The block's attributes. 
 */
export default function WithEditWrapper ( {attributes, setAttributes, disableLabel, disableHelpText, children, className, isSelected, ...props} ) {

	const showHelpText = ! disableHelpText && ( isSelected || ! isEmpty( attributes.help ) );
	const showLabel	   = ! disableLabel && ( isSelected || ! isEmpty( attributes.label ) );

	return (
		<div { ...useBlockProps( { className: classnames( 'hizzle-forms-field', className ) }) }>

			{ showLabel && (
				<div className="hizzle-forms__field-label">
					<RichText
						tagName="label"
						value={ attributes.label }
						className="hizzle-forms-field-label__input"
						onChange={ value => {
							setAttributes( { label: value } );
						} }
						placeholder={ __( 'Add label…', 'hizzle-forms' ) }
					/>
				</div>
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
		</div>

	);
}
