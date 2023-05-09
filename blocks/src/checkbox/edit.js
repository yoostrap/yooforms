/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
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
		<WithEditWrapper attributes={attributes} setAttributes={setAttributes} isSelected={isSelected} disableLabel showChecked>
			<input type="checkbox" checked={ attributes.checked } onChange={ (e) => setAttributes( { checked: e.target.checked } ) } />
			<RichText
				tagName="label"
				value={ attributes.label }
				onChange={ ( value ) => setAttributes( { label: value } ) }
				placeholder={ __( 'Enter checkbox label', 'hizzle-forms' ) }
			/>
		</WithEditWrapper>
	);
};
export default Edit;
