/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import WithSaveWrapper from '../components/with-save-wrapper';

const Save = ( { attributes } ) => {

	// Generate field name from the label.
	const instanceID = attributes.instanceID || '';

	return (
		<WithSaveWrapper attributes={ attributes } disableLabel>
			<label>
				<input
					type="checkbox"
					checked={ attributes.value }
					name={`hizzle-forms[${attributes.name}]`}
					id={`hizzle-forms-field-${instanceID}`}
					value={ attributes.label.replace( /(<([^>]+)>)/ig, '' ) }
					required={ attributes.required }
				/>
				<RichText.Content tagName="span" value={ attributes.label } />
			</label>
		</WithSaveWrapper>
	);
};
export default Save;
