import classnames from 'classnames';
import { isEmpty } from 'lodash';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import HizzleFieldControls from './field-controls';

/**
 * Returns a function to edit a field label.
 *
 * @param {Object} attributes The block's attributes.
 * @param {string} label The label.
 * @param {Function} setAttributes The setAttributes function.
 */
const FieldLabel = ( { label, setAttributes } ) => {

	return (
		<div className="hizzle-forms__field-label">
			<RichText
				tagName="label"
				value={ label }
				className="hizzle-forms-field-label__input"
				onChange={ value => setAttributes( { label: value } ) }
				placeholder={ __( 'Add label…', 'hizzle-forms' ) }
				withoutInteractiveFormatting
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
			/>
		</div>
	)
}

/**
 * Returns a function to edit a field help text.
 *
 * @param {Object} attributes The block's attributes.
 * @param {string} attributes.label The label.
 * @param {Function} attributes.setAttributes The setAttributes function.
 */
const HelpText = ( { help, setAttributes } ) => {

	return (
		<div className="hizzle-forms__field-help-text">
			<RichText
				tagName="p"
				value={ help }
				className="hizzle-forms-field-help-text__input"
				onChange={ value => setAttributes( { help: value } ) }
				placeholder={ __( 'Add help text…', 'hizzle-forms' ) }
			/>
		</div>
	)
}

/**
 * Returns a function to containing an edit wrapper.
 *
 * @param {Object} attributes The block's attributes. 
 */
export default function WithEditWrapper ( {attributes, setAttributes, disableLabel, disableHelpText, children, className, isSelected, ...props} ) {

	const classes = classnames( 'hizzle-forms-field', className, {
		'is-selected': isSelected,
		'has-placeholder': ! isEmpty( attributes.placeholder ),
	} );

	const blockProps = useBlockProps( { className: classes });

	return (
		<div { ...blockProps }>
			{ ! disableLabel && <FieldLabel label={ attributes.label } setAttributes={ setAttributes } /> }
			{ children }
			{ ! disableHelpText && <HelpText help={ attributes.help } setAttributes={ setAttributes } /> }
			<HizzleFieldControls setAttributes={ setAttributes } attributes={ attributes } { ...props} />
		</div>

	);
}
