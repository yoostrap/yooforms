/**
 * WordPress dependencies
 */
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

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

	const options = Array.isArray( attributes.options ) ? attributes.options : [];

	return (
		<WithEditWrapper attributes={attributes} setAttributes={setAttributes} isSelected={isSelected} fieldType="text" hasOptions>
			<select
				className="hizzle-forms__field-select"
				value={ attributes.value ? attributes.value : '' }
				onChange={ ( event ) => { setAttributes( { value: event.target.value } ) } }
			>
				{ attributes.placeholder && <option value="">{ attributes.placeholder }</option> }
				{ options.map( ( option, index ) => <option value={ option } key={ index }>{ option }</option> ) }
			</select>
		</WithEditWrapper>
	);
};
export default Edit;
