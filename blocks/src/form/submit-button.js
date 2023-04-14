/**
 * WordPress dependencies.
 */
import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

registerBlockType( 'hizzle-forms/submit', {
	apiVersion: 2,
	title: __( 'Submit Button', 'hizzle-forms' ),
	icon: 'button',
	category: 'hizzle-forms',
	parent: [ 'hizzle-forms/form' ],
	attributes: {
		text: {
			type: 'string',
			source: 'html',
			selector: 'button',
			default: __( 'Submit', 'hizzle-forms' ),
		}
	},
	supports: {
		anchor: true,
		spacing: {
			margin: true,
			padding: true
		}
	},
	edit: ( { attributes, setAttributes } ) => {
		const { text } = attributes;
		const blockProps = useBlockProps( { className: 'hizzle-forms__submit-button button btn' } );

		return (
			<button type="submit" { ...blockProps }>
				<RichText
					tagName="span"
					value={ text }
					onChange={ ( value ) => setAttributes( { text: value } ) }
					placeholder={ __( 'Enter button text...', 'hizzle-forms' ) }
				/>
			</button>
		);
	},
	save: ( { attributes } ) => {
		const { text } = attributes;
		const blockProps = useBlockProps.save( { className: 'hizzle-forms__submit-button button btn' } );

		return (
			<button type="submit" { ...blockProps }>
				<RichText.Content tagName="span" value={ text ? text : __( 'Submit', 'hizzle-forms' ) } />
			</button>
		);
	}
} );
