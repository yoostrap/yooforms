/**
 * WordPress dependencies.
 */
import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

registerBlockType( 'hizzle-forms/checkbox-option', {
	apiVersion: 2,
	title: __( 'Checkbox Option', 'hizzle-forms' ),
	icon: 'editor-ul',
	category: 'hizzle-forms',
	ancestor: [ 'hizzle-forms/checkbox' ],
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
		const blockProps = useBlockProps( { className: 'hizzle-forms__checkbox-option' } );

		return (
			<>
				<BlockControls>
					<ToolbarGroup>
						<ToolbarButton
							icon="yes"
							title={ __( 'Checked', 'hizzle-forms' ) }
							isActive={ selected }
							onClick={ () => setAttributes( { selected: ! selected } ) }
						/>
					</ToolbarGroup>
				</BlockControls>

				<label { ...blockProps }>
					<input type="checkbox" checked={ selected } onChange={ (e) => setAttributes( { selected: e.target.checked } ) } />
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
		const blockProps = useBlockProps.save( { className: 'hizzle-forms__checkbox-option' } );

		return (
			<label { ...blockProps }>
				<input type="checkbox" defaultChecked={ selected } />
				<RichText.Content tagName="span" value={ label } />
			</label>
		);
	}
} );
