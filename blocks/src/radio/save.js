/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import WithSaveWrapper from '../components/with-save-wrapper';

const Save = ( { attributes } ) => {

	const instanceID = attributes.instanceID || '';

	return (
		<WithSaveWrapper attributes={ attributes }>
			<div className="hizzle-forms__radio-options" id={`hizzle-forms-field-${instanceID}`} data-instance-id={ instanceID }>
				<InnerBlocks.Content />
			</div>
		</WithSaveWrapper>
	);
};
export default Save;
