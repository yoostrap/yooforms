import {
	InnerBlocks,
	InspectorControls,
	URLInput,
	__experimentalBlockVariationPicker as BlockVariationPicker,
} from '@wordpress/block-editor';
import { createBlock, registerBlockVariation } from '@wordpress/blocks';
import {
	BaseControl,
	PanelBody,
	SelectControl,
	TextareaControl,
} from '@wordpress/components';
import { compose, withInstanceId } from '@wordpress/compose';
import { withDispatch, withSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { filter, get, map } from 'lodash';
import InspectorHint from '../components/inspector-hint';
import HizzleEmailConnectionSettings from './email-connection-settings';

// Allowed child blocks for the form.
const ALLOWED_BLOCKS = [
	'hizzle-forms/name',
    'hizzle-forms/first-name',
    'hizzle-forms/last-name',
    'hizzle-forms/email',
    'hizzle-forms/text',
    'hizzle-forms/email',
    'hizzle-forms/number',
    'hizzle-forms/url',
    'hizzle-forms/tel',
    'hizzle-forms/date',
    'hizzle-forms/time',
    'hizzle-forms/month',
    'hizzle-forms/week',
	'hizzle-forms/color',
	'hizzle-forms/range',
	'hizzle-forms/textarea',
	'hizzle-forms/checkbox',
	'hizzle-forms/radio',
	'hizzle-forms/select',
	'hizzle-forms/multi-checkbox',
	'core/audio',
	'core/columns',
	'core/group',
	'core/heading',
	'core/image',
	'core/list',
	'core/paragraph',
	'core/row',
	'core/separator',
	'core/spacer',
	'core/stack',
	'core/subhead',
	'core/video',
];

export function HizzleFormEdit( {
	attributes,
	setAttributes,
	siteTitle,
	postTitle,
	postAuthorEmail,
	hasInnerBlocks,
	replaceInnerBlocks,
	selectBlock,
	clientId,
	instanceId,
	className,
	blockType,
	variations,
	defaultVariation,
	style,
} ) {
	const {
		to,
		subject,
		action,
		redirect,
		message,
		title,
	} = attributes;

	const formClassnames = classnames( className, 'hizzle-forms', {
		'is-placeholder': ! hasInnerBlocks && registerBlockVariation,
	} );

	const createBlocksFromInnerBlocksTemplate = innerBlocksTemplate => {
		const blocks = map( innerBlocksTemplate, ( [ name, attr, innerBlocks = [] ] ) =>
			createBlock( name, attr, createBlocksFromInnerBlocksTemplate( innerBlocks ) )
		);

		return blocks;
	};

	const setVariation = variation => {
		if ( variation.attributes ) {
			setAttributes( variation.attributes );
		}

		if ( variation.innerBlocks ) {
			replaceInnerBlocks( clientId, createBlocksFromInnerBlocksTemplate( variation.innerBlocks ) );
		}

		selectBlock( clientId );
	};

	useEffect( () => {
		if ( to === undefined && postAuthorEmail ) {
			setAttributes( { to: postAuthorEmail } );
		}

		if ( subject === undefined && siteTitle !== undefined && postTitle !== undefined ) {
			const emailSubject = '[' + siteTitle + '] ' + postTitle;
			setAttributes( { subject: emailSubject } );
		}
	}, [ to, postAuthorEmail, subject, siteTitle, postTitle, setAttributes ] );

	const renderSubmissionSettings = () => {
		return (
			<>
				<InspectorHint>
					{ __( 'Customize the view after form submission:', 'hizzle-forms' ) }
				</InspectorHint>
				<SelectControl
					label={ __( 'On Submission', 'hizzle-forms' ) }
					value={ action }
					options={ [
						{ label: __( 'Show a success message', 'hizzle-forms' ), value: 'message' },
						{ label: __( 'Redirect the user', 'hizzle-forms' ), value: 'redirect' },
					] }
					onChange={ newMessage => setAttributes( { customThankyou: newMessage } ) }
				/>

				{ 'message' === action && (
					<TextareaControl
						label={ __( 'Success Message', 'hizzle-forms' ) }
						value={ message }
						placeholder={ __( 'Thank you for contacting us. We will be in touch with you shortly.', 'hizzle-forms' ) }
						onChange={ message => setAttributes( { message } ) }
					/>
				) }

				{ 'redirect' === action && (
					<BaseControl
						label={ __( 'Redirect URL', 'hizzle-forms' ) }
						id={ `hizzle-forms-${ instanceId }-thankyou-url` }
					>
						<URLInput
							id={ `hizzle-forms-${ instanceId }-thankyou-url` }
							value={ redirect }
							className="hizzle-forms__thankyou-redirect-url"
							onChange={ redirect => setAttributes( { redirect } ) }
						/>
					</BaseControl>
				) }
			</>
		);
	};

	const renderVariationPicker = () => {
		return (
			<div className={ formClassnames }>
				<BlockVariationPicker
					icon={ get( blockType, [ 'icon', 'src' ] ) }
					label={ get( blockType, [ 'title' ] ) }
					instructions={ __(
						'Start building a form by selecting one of these form templates, or search in the patterns library for more forms:',
						'hizzle-forms'
					) }
					variations={ filter( variations, v => ! v.hiddenFromPicker ) }
					onSelect={ ( nextVariation = defaultVariation ) => {
						setVariation( nextVariation );
					} }
				/>
			</div>
		);
	};

	if ( ! hasInnerBlocks && registerBlockVariation ) {
		return renderVariationPicker();
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Submission Settings', 'hizzle-forms' ) } initialOpen={ false }>
					{ renderSubmissionSettings() }
				</PanelBody>
				<PanelBody title={ __( 'Email Connection', 'hizzle-forms' ) }>
					<HizzleEmailConnectionSettings
						emailAddress={ to }
						emailSubject={ subject }
						instanceId={ instanceId }
						postAuthorEmail={ postAuthorEmail }
						setAttributes={ setAttributes }
					/>
				</PanelBody>

			</InspectorControls>

			<div className={ formClassnames } style={ style }>
				<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } templateInsertUpdatesSelection={ false } />
			</div>
		</>
	);
}

export default compose( [
	withSelect( ( select, props ) => {
		const { getBlockType, getBlockVariations, getDefaultBlockVariation } = select( 'core/blocks' );
		const { getBlocks } = select( 'core/block-editor' );
		const { getEditedPostAttribute } = select( 'core/editor' );
		const { getSite, getUser } = select( 'core' );
		const innerBlocks = getBlocks( props.clientId );

		const authorId = getEditedPostAttribute( 'author' );
		const authorEmail = authorId && getUser( authorId ) && getUser( authorId ).email;
		const postTitle = getEditedPostAttribute( 'title' );

		// Prevent the submit button from being removed.
		const submitButton = innerBlocks.find( block => block.name === 'hizzle-forms/submit' );
		if ( submitButton && ! submitButton.attributes.lock ) {
			const lock = { move: false, remove: true };
			submitButton.attributes.lock = lock;
		}

		return {
			blockType: getBlockType && getBlockType( props.name ),
			defaultVariation: getDefaultBlockVariation && getDefaultBlockVariation( props.name, 'block' ),
			variations: getBlockVariations && getBlockVariations( props.name, 'block' ),

			innerBlocks,
			hasInnerBlocks: innerBlocks.length > 0,
			siteTitle: get( getSite && getSite(), [ 'title' ] ),
			postTitle: postTitle,
			postAuthorEmail: authorEmail,
		};
	} ),
	withDispatch( dispatch => {
		const { replaceInnerBlocks, selectBlock } = dispatch( 'core/block-editor' );
		return { replaceInnerBlocks, selectBlock };
	} ),
	withInstanceId,
] )( HizzleFormEdit );
