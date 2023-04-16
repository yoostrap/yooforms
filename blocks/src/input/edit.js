/**
 * WordPress dependencies
 */
import { withInstanceId } from '@wordpress/compose';
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import WithEditWrapper from '../components/with-edit-wrapper';

const Edit = ({ attributes, setAttributes, clientId }) => {

	// Reset instance ID once.
	useEffect( () => {
		if ( ! attributes.instanceID ) {
			setAttributes( { instanceID: clientId } );
		}
	}, [] );

	return (
		<WithEditWrapper attributes={attributes} setAttributes={setAttributes}>
			<input
				type={ attributes.type }
				className="hizzle-forms__field-input form-control"
				placeholder={ attributes.placeholder }
				value={ attributes.value ? attributes.value : '' }
				pattern={ attributes.pattern }
				data-instance-id={ attributes.instanceID }
			/>
		</WithEditWrapper>
	);
};
export default withInstanceId( Edit );
