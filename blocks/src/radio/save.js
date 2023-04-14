/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import WithSaveWrapper from '../components/with-save-wrapper';

const Save = ( { attributes } ) => {

	return (
		<WithSaveWrapper attributes={ attributes } className="hizzle-forms-field__radio">
			<div className="hizzle-forms__radio-options">
				<InnerBlocks.Content />
			</div>
		</WithSaveWrapper>
	);
};
export default Save;
