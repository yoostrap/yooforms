/**
 * Internal dependencies
 */
import WithSaveWrapper from '../components/with-save-wrapper';

const Save = ( { attributes } ) => {

	const instanceID = attributes.instanceID || '';

	return (
		<WithSaveWrapper attributes={ attributes }>
			<input
				type="text"
				name={`hizzle-forms[${instanceID}]`}
				id={`hizzle-forms-field-${instanceID}`}
				className="hizzle-forms__field-input form-control"
				placeholder={ attributes.placeholder }
				value={ attributes.value ? attributes.value : '' }
				required={ attributes.required }
				autoComplete={ attributes.autocomplete }
				data-instance-id={ instanceID }
			/>
		</WithSaveWrapper>
	);

};
export default Save;
