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
		"name": "hizzle-forms/radio-option",
		"attributes": { "label": "First Option", "selected": true }
	},
	{
		"name": "hizzle-forms/radio-option",
		"attributes": { "label": "Second Option" }
	},
	{
		"name": "hizzle-forms/radio-option",
		"attributes": { "label": "Third Option" }
	}
]

const Edit = ({ attributes, setAttributes }) => {

	return (
		<WithEditWrapper attributes={attributes} setAttributes={setAttributes} className="hizzle-forms-field__radio">
			<div className="hizzle-forms__radio-options">
				<InnerBlocks allowedBlocks={['hizzle-forms/radio-option']} template={template} />
			</div>
		</WithEditWrapper>
	);
};
export default Edit;
