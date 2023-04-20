/**
 * WordPress dependencies.
 */
import { registerBlockType, createBlock } from '@wordpress/blocks';
import { RichText, useBlockProps, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { noop } from 'lodash';

/**
 * Internal dependencies
 */
import {useParentAttributes} from '../utils/use-parent-attributes';
import labelToName from '../utils/label-to-name';

registerBlockType( 'hizzle-forms/radio-option', {
	apiVersion: 2,
	title: __( 'Radio Option', 'hizzle-forms' ),
	icon: 'editor-ul',
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
		}
	},
	edit: ( { clientId, attributes, setAttributes } ) => {
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

		// Handle split.
		const handleSplit = option =>
			createBlock( 'hizzle-forms/radio-option', {
				...attributes,
				option,
				selected: false,
			} );

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
						onSplit={ handleSplit }
						onReplace={noop}
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
