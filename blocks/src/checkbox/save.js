/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import WithSaveWrapper from '../components/with-save-wrapper';
import labelToName from '../utils/label-to-name';

const Save = ( { attributes } ) => {

	// Generate field name from the label.
	const instanceID = attributes.instanceID || '';
	const name       = labelToName( attributes.label, instanceID );

	return (
		<WithSaveWrapper attributes={ attributes } disableLabel>
			<label>
				<input
					type="checkbox"
					checked={ attributes.checked }
					name={`hizzle-forms[${name}]`}
					id={`hizzle-forms-field-${instanceID}`}
					required={ attributes.required }
					data-instance-id={ instanceID }
				/>
				<RichText.Content tagName="span" value={ attributes.label } />
			</label>
		</WithSaveWrapper>
	);
};
export default Save;
