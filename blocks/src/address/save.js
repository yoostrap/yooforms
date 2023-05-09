/**
 * Internal dependencies
 */
import WithSaveWrapper from '../components/with-save-wrapper';

const Save = ( { attributes } ) => {

	// Generate field name from the label.
	const instanceID = attributes.instanceID || '';

	return (
		<WithSaveWrapper attributes={ attributes }>
			<input
				type="text"
				name={`hizzle-forms[${attributes.name}]`}
				id={`hizzle-forms-field-${instanceID}`}
				className="hizzle-forms__field-input form-control"
				placeholder={ attributes.placeholder || '' }
				value={ attributes.value ? attributes.value : '' }
				required={ attributes.required }
				autoComplete={ attributes.autocomplete }
			/>
		</WithSaveWrapper>
	);

};
export default Save;
