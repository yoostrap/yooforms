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
		<form { ...useBlockProps.save( props ) }>
			<InnerBlocks.Content />
			<div className="hizzle-forms__form-error" />
		</form>
	);
};
export default Save;
