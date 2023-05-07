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
		<WithSaveWrapper attributes={ attributes }>
			<input
				type={ attributes.type }
				name={`hizzle-forms[${name}]`}
				id={`hizzle-forms-field-${instanceID}`}
				className="hizzle-forms__field-input form-control"
				placeholder={ attributes.placeholder || '' }
				value={ attributes.value ? attributes.value : '' }
				required={ attributes.required }
				data-instance-id={ instanceID }
			/>
		</WithSaveWrapper>
	);

};
export default Save;
