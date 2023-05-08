/**
 * WordPress dependencies.
 */
import {
	RichText,
	useBlockProps,
	__experimentalUseBorderProps as useBorderProps,
	__experimentalUseColorProps as useColorProps,
	__experimentalGetSpacingClassesAndStyles as useSpacingProps,
	__experimentalGetBorderClassesAndStyles as getBorderClassesAndStyles,
	__experimentalGetColorClassesAndStyles as getColorClassesAndStyles,
	__experimentalGetSpacingClassesAndStyles as getSpacingClassesAndStyles,
	__experimentalGetElementClassName,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import registerHizzleBlockType from '../utils/register-block';

registerHizzleBlockType( 'hizzle-forms/submit', {
	apiVersion: 2,
	title: __( 'Submit Button', 'hizzle-forms' ),
	description: __( 'A button to submit the form.', 'hizzle-forms' ),
	icon: 'button',
	category: 'hizzle-forms',
	parent: [ "hizzle-forms/form" ],
	attributes: {
		text: {
			type: 'string',
			source: 'html',
			selector: 'button',
			default: __( 'Submit', 'hizzle-forms' ),
		},
		backgroundColor: {
			type: 'string',
		},
		textColor: {
			type: 'string',
		},
		gradient: {
			type: 'string',
		},
	},
	supports: {
		anchor: true,
		align: false,
		alignWide: false,
		color: {
			__experimentalSkipSerialization: true,
			gradients: true,
			__experimentalDefaultControls: {
				background: true,
				text: true
			}
		},
		typography: {
			fontSize: true,
			lineHeight: true,
			__experimentalFontFamily: true,
			__experimentalFontWeight: true,
			__experimentalFontStyle: true,
			__experimentalTextTransform: true,
			__experimentalTextDecoration: true,
			__experimentalLetterSpacing: true,
			__experimentalDefaultControls: {
				fontSize: true
			}
		},
		reusable: false,
		shadow: true,
		spacing: {
			__experimentalSkipSerialization: true,
			padding: [ 'horizontal', 'vertical' ],
			__experimentalDefaultControls: {
				padding: true
			}
		},
		__experimentalBorder: {
			color: true,
			radius: true,
			style: true,
			width: true,
			__experimentalSkipSerialization: true,
			__experimentalDefaultControls: {
				color: true,
				radius: true,
				style: true,
				width: true
			}
		},
		__experimentalSelector: '.wp-block-hizzle-forms-submit button'
	},
	styles: [
		{ name: 'hizzle-1-6', 'label': '1/6' },
		{ name: 'hizzle-2-6', 'label': '2-6' },
		{ name: 'hizzle-3-6', 'label': '3-6' },
		{ name: 'hizzle-4-6', 'label': '4-6' },
		{ name: 'hizzle-5-6', 'label': '5/6' },
		{ name: 'hizzle-full', 'label': 'Full Width', 'isDefault': true }
	],
	edit: ( { attributes, setAttributes } ) => {
		const { text } = attributes;
		const blockProps = useBlockProps( { className: 'hizzle-forms-field hizzle-forms__submit-button' } );
		const borderProps = useBorderProps( attributes );
		const colorProps = useColorProps( attributes );
		const spacingProps = useSpacingProps( attributes );

		function setButtonText( newText ) {
			// Remove anchor tags from button text content.
			setAttributes( { text: newText.replace( /<\/?a[^>]*>/g, '' ) } );
		}

		return (
			<>
				<div { ...blockProps }>
					<RichText
						aria-label={ __( 'Button text' ) }
						placeholder={ __( 'Add button text…' ) }
						value={ text }
						onChange={ ( value ) => setButtonText( value ) }
						withoutInteractiveFormatting
						className={ classnames(
							'button btn',
							colorProps.className,
							borderProps.className,
							__experimentalGetElementClassName( 'button' )
						) }
						style={ {
							...borderProps.style,
							...colorProps.style,
							...spacingProps.style,
						} }
						identifier="text"
					/>
				</div>
			</>
		);
	},
	save: ( { attributes } ) => {
		const { text } = attributes;
		const blockProps = useBlockProps.save( { className: 'hizzle-forms-field hizzle-forms__submit-button' } );
		const borderProps = getBorderClassesAndStyles( attributes );
		const colorProps = getColorClassesAndStyles( attributes );
		const spacingProps = getSpacingClassesAndStyles( attributes );
		const buttonClasses = classnames(
			'button btn',
			colorProps.className,
			borderProps.className,
			__experimentalGetElementClassName( 'button' )
		);
		const buttonStyle = {
			...borderProps.style,
			...colorProps.style,
			...spacingProps.style,
		};

		return (
			<div { ...blockProps }>
				<RichText.Content
					tagName="button"
					className={ buttonClasses }
					type="submit"
					style={ buttonStyle }
					value={ text ? text : __( 'Submit', 'hizzle-forms' ) }
				/>
			</div>
		);
	}
} );
