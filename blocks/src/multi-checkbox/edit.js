/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import WithEditWrapper from '../components/with-edit-wrapper';

const template = [
	{
		"name": "hizzle-forms/checkbox-option",
		"attributes": { "label": "First Option", "selected": true }
	},
	{
		"name": "hizzle-forms/checkbox-option",
		"attributes": { "label": "Second Option" }
	},
	{
		"name": "hizzle-forms/checkbox-option",
		"attributes": { "label": "Third Option" }
	}
]

const Edit = ({ attributes, setAttributes }) => {

	return (
		<WithEditWrapper attributes={attributes} setAttributes={setAttributes} className="hizzle-forms-field__multi-checkbox">
			<div className="hizzle-forms__checkbox-options">
				<InnerBlocks allowedBlocks={['hizzle-forms/checkbox-option']} template={template} />
			</div>
		</WithEditWrapper>
	);
};
export default Edit;
