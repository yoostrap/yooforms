/**
 * WordPress dependencies
 */
import { useEffect } from '@wordpress/element';
import { ADDRESS_INPUT_TYPES } from './constants';

/**
 * Internal dependencies
 */
import WithEditWrapper from '../components/with-edit-wrapper';
import labelToName from '../utils/label-to-name';

const Edit = ({ attributes, setAttributes, clientId, isSelected }) => {

	// Reset instance ID once.
	useEffect( () => {
		if ( ! attributes.instanceID ) {
			setAttributes( { instanceID: clientId } );
		}
	}, [] );

	const expectedName = labelToName( attributes.label, attributes.instanceID );

	// Ensure name is same as parent.
	useEffect( () => {
		if ( expectedName !== attributes.name ) {
			setAttributes( { name: expectedName } );
		}
	}, [ expectedName ] );

	const inputType    = ADDRESS_INPUT_TYPES.includes( attributes.type ) ? 'text' : attributes.type;
	const autocomplete = ADDRESS_INPUT_TYPES.includes( attributes.type ) ? attributes.type : null;
	let fieldType      = 'text';

	if ( 'date' === inputType || 'number' === inputType ) {
		fieldType = inputType;
	}

	return (
		<WithEditWrapper attributes={attributes} setAttributes={setAttributes} isSelected={isSelected} fieldType={fieldType}>
			<input
				type={ inputType }
				className="hizzle-forms__field-input form-control"
				placeholder={ attributes.placeholder || "" }
				value={ attributes.value ? attributes.value : '' }
				onChange={ ( event ) => { setAttributes( { value: event.target.value } ) } }
				autoComplete={ autocomplete }
			/>
		</WithEditWrapper>
	);
};
export default Edit;
