/**
 * WordPress dependencies.
 */
import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

registerBlockType( 'hizzle-forms/radio-option', {
	apiVersion: 2,
	title: __( 'Radio Option', 'hizzle-forms' ),
	icon: 'editor-ul',
	category: 'hizzle-forms',
	parent: [ 'hizzle-forms/radio' ],
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
	},
	supports: {
		anchor: true,
		spacing: {
			margin: true,
			padding: true
		}
	},
	edit: ( { attributes, setAttributes } ) => {
		const { label, selected } = attributes;
		const blockProps = useBlockProps( { className: 'hizzle-forms__radio-option' } );

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
					<input type="radio" checked={ selected } />
					<RichText
						tagName="span"
						value={ label }
						onChange={ ( value ) => setAttributes( { label: value } ) }
						placeholder={ __( 'Option label', 'hizzle-forms' ) }
					/>
				</label>
			</>
		);
	},
	save: ( { attributes } ) => {
		const { label, selected } = attributes;
		const blockProps = useBlockProps.save( { className: 'hizzle-forms__radio-option' } );

		return (
			<label { ...blockProps }>
				<input type="radio" checked={ selected } />
				<RichText.Content tagName="span" value={ label } />
			</label>
		);
	}
} );
