/**
 * WordPress dependencies.
 */
import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { withSelect } from "@wordpress/data";
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';

const addParentAtts = ( component ) => {
	return withSelect( ( select, { clientId } ) => {

		const { getBlockParentsByBlockName, getBlockAttributes } = select( 'core/block-editor' );

		console.log(getBlockAttributes( getBlockParentsByBlockName( clientId, 'hizzle-forms/radio' )[0] ));
		// Get parent block client ID.
		const { instanceID, isRadio } = getBlockAttributes( getBlockParentsByBlockName( clientId, 'hizzle-forms/radio' )[0] );

		return {
			parentInstanceID: instanceID,
			isRadio: isRadio,
		};
	})( component );
};

registerBlockType( 'hizzle-forms/radio-option', {
	apiVersion: 2,
	title: __( 'Radio Option', 'hizzle-forms' ),
	icon: 'editor-ul',
	category: 'hizzle-forms',
	ancestor: [ 'hizzle-forms/radio' ],
	attributes: {
		label: {
			type: 'string',
			source: 'html',
			selector: 'label',
		},
		selected: {
			type: 'boolean',
			default: false,
		},
		isRadio: {
			type: 'boolean',
			default: true,
		},
		parentInstanceID: {
			type: 'string',
		},
	},
	supports: {
		anchor: true,
		spacing: {
			margin: true,
			padding: true
		}
	},
	edit: addParentAtts( ( { parentInstanceID, isRadio, attributes, setAttributes } ) => {
		const { label, selected } = attributes;
		const type = isRadio ? 'radio' : 'checkbox';
		const blockProps = useBlockProps( { className: `hizzle-forms__${type}-option` } );

		// Ensure isRadio is same as parent.
		useEffect( () => {
			if ( isRadio !== attributes.isRadio ) {
				setAttributes( { isRadio: isRadio } );
			}
		}, [ isRadio ] );

		// Ensure parentInstanceID is same as parent.
		useEffect( () => {
			if ( parentInstanceID !== attributes.parentInstanceID ) {
				setAttributes( { parentInstanceID: parentInstanceID } );
			}
		}, [ parentInstanceID ] );

		return (
			<>
				<BlockControls>
					<ToolbarGroup>
						<ToolbarButton
							icon="yes"
							title={ __( 'Selected', 'hizzle-forms' ) }
							isActive={ selected }
							onClick={ () => setAttributes( { selected: ! selected } ) }
						/>
					</ToolbarGroup>
				</BlockControls>

				<label { ...blockProps }>
					<input type={ type } checked={ selected } readOnly />
					<RichText
						tagName="span"
						value={ label }
						onChange={ ( value ) => setAttributes( { label: value } ) }
						placeholder={ __( 'Enter option label...', 'hizzle-forms' ) }
					/>
				</label>
			</>
		);
	}),
	save: ( { attributes } ) => {
		const { label, selected } = attributes;
		const type = attributes.isRadio ? 'radio' : 'checkbox';
		const name = attributes.isRadio ? `hizzle-forms-${attributes.parentInstanceID}` : `hizzle-forms-${attributes.parentInstanceID}[]`;
		const blockProps = useBlockProps.save( { className: `hizzle-forms__${type}-option` } );

		return (
			<label { ...blockProps }>
				<input
					type={ type }
					name={ name }
					defaultChecked={ selected }
				/>
				<RichText.Content tagName="span" value={ label } />
			</label>
		);
	},
} );
