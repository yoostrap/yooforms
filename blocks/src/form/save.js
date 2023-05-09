/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = ( { attributes } ) => {

	return (
		<form { ...useBlockProps.save( { 'data-instance-id': attributes.instanceID || '' } ) }>
			<InnerBlocks.Content />
		</form>
	);
};
export default Save;
