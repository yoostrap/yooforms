import classnames from 'classnames';
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * Returns a function to display a field label.
 *
 * @param {Object} attributes The block's attributes.
 * @param {string} attributes.label The label.
 * @param {string} attributes.instanceID The instance ID.
 */
const FieldLabel = ( { label, instanceID } ) => {

	// Abort if no label.
	if ( ! label ) {
		return null;
	}

	return (
		<div className="hizzle-forms__field-label">
			<RichText.Content tagName="label" htmlFor={`hizzle-forms-field-${instanceID}`} value={ label } />
		</div>
	)
}

/**
 * Returns a function to display a field help text.
 *
 * @param {Object} attributes The block's attributes.
 * @param {string} attributes.help The help text.
 */
const HelpText = ( { help } ) => {

	// Abort if no help text.
	if ( ! help ) {
		return null;
	}

	return (
		<div className="hizzle-forms__field-help-text">
			<RichText.Content tagName="p" value={ help } />
		</div>
	)
}

/**
 * Returns a function to containing a save wrapper.
 *
 * @param {Object} attributes The block's attributes. 
 */
export default function WithSaveWrapper ( {attributes, children, className, customClass } ) {

	const classes = classnames( 'hizzle-forms-field', className, customClass );

	const blockProps = useBlockProps.save( { className: classes });

	return (
		<div { ...blockProps }>
			<FieldLabel label={ attributes.label } instanceID={ attributes.instanceID } />
			{ children }
			<HelpText help={ attributes.help }/>
		</div>

	);
}
