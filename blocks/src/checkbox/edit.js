/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

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
		<WithEditWrapper attributes={attributes} setAttributes={setAttributes} isSelected={isSelected} disableLabel showChecked>
			<input type="checkbox" checked={ attributes.checked } onChange={ (e) => setAttributes( { checked: e.target.checked } ) } />
			<RichText
				tagName="label"
				value={ attributes.label }
				onChange={ ( value ) => setAttributes( { label: value } ) }
				data-instance-id={ attributes.instanceID }
				placeholder={ __( 'Enter checkbox label', 'hizzle-forms' ) }
			/>
		</WithEditWrapper>
	);
};
export default Edit;
