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
	let value          = attributes.value ? attributes.value : '';
console.log( attributes.type, fieldType, autocomplete );
	// Fixes The specified value "" does not conform to the required format.  The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
	if ( 'color' === fieldType && ! value.startsWith( '#' ) ) {
		value = '#000000';
	}

	return (
		<WithSaveWrapper attributes={ attributes }>
			<input
				type={ fieldType }
				name={`hizzle-forms[${attributes.name}]`}
				id={`hizzle-forms-field-${instanceID}`}
				className="hizzle-forms__field-input form-control"
				placeholder={ attributes.placeholder || '' }
				value={ value }
				autoComplete={ autocomplete }
			/>
		</WithSaveWrapper>
	);

};
export default Save;
