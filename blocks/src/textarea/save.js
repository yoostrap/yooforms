/**
 * Internal dependencies
 */
import WithSaveWrapper from '../components/with-save-wrapper';

const Save = ( { attributes } ) => {

	// Generate field name from the label.
	const instanceID = attributes.instanceID || '';

	return (
		<WithSaveWrapper attributes={ attributes }>
			<textarea
				id={`hizzle-forms-field-${instanceID}`}
				className="hizzle-forms__field-input form-control"
				placeholder={ attributes.placeholder || '' }
				value={ attributes.value ? attributes.value : '' }
				name={`hizzle-forms[${attributes.name}]`}
				required={ attributes.required }
				rows="8"
			/>
		</WithSaveWrapper>
	);
};
export default Save;
