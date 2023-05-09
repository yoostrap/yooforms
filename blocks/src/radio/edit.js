/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import WithEditWrapper from '../components/with-edit-wrapper';
import labelToName from '../utils/label-to-name';

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

	const expectedName = labelToName( attributes.label, attributes.instanceID );

	// Ensure name is same as parent.
	useEffect( () => {
		if ( expectedName !== attributes.name ) {
			setAttributes( { name: expectedName } );
		}
	}, [ expectedName ] );

	return (
		<WithEditWrapper attributes={attributes} setAttributes={setAttributes} isSelected={isSelected} hidePlaceholder>
			<div className="hizzle-forms__radio-options">
				<InnerBlocks allowedBlocks={['hizzle-forms/radio-option']} template={template} />
			</div>
		</WithEditWrapper>
	);
};
export default Edit;
