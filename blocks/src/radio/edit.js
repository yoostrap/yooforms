/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import WithEditWrapper from '../components/with-edit-wrapper';

const template = [
    [ 'hizzle-forms/radio-option', { "option": "First Option", "selected": true } ],
    [ 'hizzle-forms/radio-option', { "option": "Second Option" } ],
    [ 'hizzle-forms/radio-option', { "option": "Third Option" } ],
];

const Edit = ({ attributes, setAttributes, clientId, isSelected }) => {

	// Reset instance ID once.
	useEffect( () => {
		if ( ! attributes.instanceID ) {
			setAttributes( { instanceID: clientId } );
		}
	}, [] );

	return (
		<WithEditWrapper attributes={attributes} setAttributes={setAttributes} isSelected={isSelected}>
			<div className="hizzle-forms__radio-options" data-instance-id={ attributes.instanceID }>
				<InnerBlocks allowedBlocks={['hizzle-forms/radio-option']} template={template} />
			</div>
		</WithEditWrapper>
	);
};
export default Edit;
