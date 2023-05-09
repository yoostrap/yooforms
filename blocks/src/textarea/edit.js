/**
 * WordPress dependencies
 */
import { useEffect } from '@wordpress/element';

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

	return (
		<WithEditWrapper attributes={attributes} setAttributes={setAttributes} isSelected={isSelected}>
			<textarea
				className="hizzle-forms__field-input form-control"
				placeholder={ attributes.placeholder || "" }
				value={ attributes.value ? attributes.value : '' }
				onChange={ ( event ) => { setAttributes( { value: event.target.value } ) } }
				rows="8"
			/>
		</WithEditWrapper>
	);
};
export default Edit;
