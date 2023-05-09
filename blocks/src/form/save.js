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
		</form>
	);
};
export default Save;
