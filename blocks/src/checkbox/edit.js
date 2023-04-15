/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import WithEditWrapper from '../components/with-edit-wrapper';

const Edit = ({ attributes, setAttributes }) => {

	return (
		<WithEditWrapper attributes={attributes} setAttributes={setAttributes} disableLabel={true} showChecked={true} className="hizzle-forms-field__checkbox">
			<input type="checkbox" checked={ attributes.checked } onChange={ (e) => setAttributes( { checked: e.target.checked } ) } />
			<RichText
				tagName="label"
				value={ attributes.label }
				onChange={ ( value ) => setAttributes( { label: value } ) }
				placeholder={ __( 'Checkbox label', 'hizzle-forms' ) }
			/>
		</WithEditWrapper>
	);
};
export default Edit;
