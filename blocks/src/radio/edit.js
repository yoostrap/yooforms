/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import WithEditWrapper from '../components/with-edit-wrapper';

const template = [
    [ 'hizzle-forms/radio-option', { "label": "First Option", "selected": true } ],
    [ 'hizzle-forms/radio-option', { "label": "Second Option" } ],
    [ 'hizzle-forms/radio-option', { "label": "Third Option" } ],
];

const Edit = ({ attributes, setAttributes }) => {

	return (
		<WithEditWrapper attributes={attributes} setAttributes={setAttributes}>
			<div className="hizzle-forms__radio-options" data-instance-id={ attributes.instanceID }>
				<InnerBlocks allowedBlocks={['hizzle-forms/radio-option']} template={template} />
			</div>
		</WithEditWrapper>
	);
};
export default Edit;
