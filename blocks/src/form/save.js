/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = ( { attributes } ) => {

	const props = {
		'data-instance-id': attributes.instanceID || '',
		method: 'POST',
	}

	return (
		<form { ...useBlockProps.save( props ) } novalidate>
			<InnerBlocks.Content />
			<div className="hizzle-forms__form-error" />
			<div className="hizzle-forms-spinner__wrapper">
				<div className="hizzle-forms-spinner"></div>
			</div>
		</form>
	);
};
export default Save;
