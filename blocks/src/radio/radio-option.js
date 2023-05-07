/**
 * WordPress dependencies.
 */
import { createBlock } from '@wordpress/blocks';
import { RichText, useBlockProps, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import {useParentAttributes} from '../utils/use-parent-attributes';
import labelToName from '../utils/label-to-name';
import registerHizzleBlockType from '../utils/register-block';

registerHizzleBlockType( 'hizzle-forms/radio-option', {
	apiVersion: 2,
	title: __( 'Radio Option', 'hizzle-forms' ),
	icon: 'marker',
	category: 'hizzle-forms',
	parent: [ 'hizzle-forms/radio' ],
	attributes: {
		option: {
			type: 'string',
			default: '',
		},
		selected: {
			type: 'boolean',
			default: false,
		},
		isRadio: {
			type: 'boolean',
			default: true,
		},
		name: {
			type: 'string',
			default: '',
		},
	},
	supports: {
		anchor: true,
		spacing: {
			margin: true,
			padding: true
		},
		reusable: false,
	},
	edit: ( { clientId, onReplace, onRemove, mergeBlocks, attributes, setAttributes } ) => {
		const { label, isRadio, instanceID } = useParentAttributes( clientId );
		const type = isRadio ? 'radio' : 'checkbox';
		const blockProps = useBlockProps( { className: `hizzle-forms__${type}-option` } );
		const expectedName = labelToName( label, instanceID );

		// Ensure name is same as parent.
		useEffect( () => {
			if ( expectedName !== attributes.name ) {
				setAttributes( { name: expectedName } );
			}
		}, [ expectedName ] );

		// Ensure isRadio is same as parent.
		useEffect( () => {
			if ( isRadio !== attributes.isRadio ) {
				setAttributes( { isRadio: isRadio } );
			}
		}, [ isRadio ] );

		return (
			<>
				<BlockControls>
					<ToolbarGroup>
						<ToolbarButton
							icon="yes"
							title={ __( 'Selected', 'hizzle-forms' ) }
							isActive={ attributes.selected }
							onClick={ () => setAttributes( { selected: ! attributes.selected } ) }
						/>
					</ToolbarGroup>
				</BlockControls>

				<div { ...blockProps }>
					<input type={ type } checked={ attributes.selected } readOnly />
					<RichText
						tagName="label"
						value={ attributes.option }
						onChange={ ( value ) => setAttributes( { option: value } ) }
						placeholder={ __( 'Add option…', 'hizzle-forms' ) }
						onSplit={ ( value, isOriginal ) => {
							let newAttributes;
		
							if ( isOriginal || value ) {
								newAttributes = {
									...attributes,
									option: value,
									selected: false,
								};
							}

							const block = createBlock( 'hizzle-forms/radio', newAttributes );
		
							if ( isOriginal ) {
								block.clientId = clientId;
							}
		
							return block;
						} }
						onMerge={ mergeBlocks }
						onReplace={ onReplace }
						onRemove={ onRemove }
						preserveWhiteSpace={ false }
					/>
				</div>
			</>
		);
	},
	save: ( { attributes } ) => {
		const { option, selected, isRadio, name } = attributes;
		const type = isRadio ? 'radio' : 'checkbox';
		const extension = isRadio ? '' : '[]';
		const blockProps = useBlockProps.save( { className: `hizzle-forms__${type}-option` } );

		return (
			<label { ...blockProps }>
				<input
					type={ type }
					name={ `hizzle-forms[${name}]${extension}` }
					checked={ selected }
				/>
				<RichText.Content tagName="span" value={ option } />
			</label>
		);
	},
} );
