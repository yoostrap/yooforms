/**
 * WordPress dependencies
 */
import { withInstanceId } from '@wordpress/compose';
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
			<input
				type={ attributes.type }
				className="hizzle-forms__field-input form-control"
				placeholder={ attributes.placeholder }
				value={ attributes.value ? attributes.value : '' }
				pattern={ attributes.pattern }
				data-instance-id={ attributes.instanceID }
				onChange={ ( event ) => { setAttributes( { value: event.target.value } ) } }
			/>
		</WithEditWrapper>
	);
};
export default withInstanceId( Edit );
