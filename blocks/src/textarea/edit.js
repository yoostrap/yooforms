/**
 * WordPress dependencies
 */
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import WithEditWrapper from '../components/with-edit-wrapper';

const Edit = ({ attributes, setAttributes, clientId, isSelected }) => {

	// Reset instance ID once.
	useEffect( () => {
		if ( ! attributes.instanceID ) {
			setAttributes( { instanceID: clientId } );
		}
	}, [] );

	return (
		<WithEditWrapper attributes={attributes} setAttributes={setAttributes} isSelected={isSelected}>
			<textarea
				className="hizzle-forms__field-input form-control"
				placeholder={ attributes.placeholder || "" }
				value={ attributes.value ? attributes.value : '' }
				data-instance-id={ attributes.instanceID }
				onChange={ ( event ) => { setAttributes( { value: event.target.value } ) } }
				rows="8"
			/>
		</WithEditWrapper>
	);
};
export default Edit;
