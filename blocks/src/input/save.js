/**
 * Internal dependencies
 */
import WithSaveWrapper from '../components/with-save-wrapper';
import { ADDRESS_INPUT_TYPES } from './constants';

const Save = ( { attributes } ) => {

	// Prepare attributes.
	const instanceID   = attributes.instanceID || '';
	const fieldType    = ADDRESS_INPUT_TYPES.includes( attributes.type ) ? 'text' : attributes.type;
	const autocomplete = ADDRESS_INPUT_TYPES.includes( attributes.type ) ? attributes.type : null;

	return (
		<WithSaveWrapper attributes={ attributes }>
			<input
				type={ fieldType }
				name={`hizzle-forms[${attributes.name}]`}
				id={`hizzle-forms-field-${instanceID}`}
				className="hizzle-forms__field-input form-control"
				placeholder={ attributes.placeholder || '' }
				value={ attributes.value ? attributes.value : '' }
				autoComplete={ autocomplete }
			/>
		</WithSaveWrapper>
	);

};
export default Save;
