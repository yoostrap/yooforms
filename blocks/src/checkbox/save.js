/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';


/**
 * Internal dependencies
 */
import WithSaveWrapper from '../components/with-save-wrapper';

const Save = ( { attributes } ) => {

	return (
		<WithSaveWrapper attributes={ attributes } disableLabel={true} className="hizzle-forms-field__checkbox">
			<label>
				<input type="checkbox" defaultChecked={ attributes.checked } />
				<RichText.Content tagName="span" value={ label } />
			</label>
		</WithSaveWrapper>
	);
};
export default Save;
