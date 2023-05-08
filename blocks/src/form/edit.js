/**
 * WordPress dependencies
 */
import {
	InnerBlocks,
	InspectorControls,
	URLInput,
	useBlockProps
} from '@wordpress/block-editor';
import {
	BaseControl,
	PanelBody,
	SelectControl,
	TextareaControl,
	TextControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import InspectorHint from '../components/inspector-hint';
import HizzleEmailConnectionSettings from './email-connection-settings';

// Allowed child blocks for the form.
const ALLOWED_BLOCKS = [
	'hizzle-forms/address',
    'hizzle-forms/input',
	'hizzle-forms/textarea',
	'hizzle-forms/checkbox',
	'hizzle-forms/radio',
	'hizzle-forms/select',
	'hizzle-forms/multi-checkbox',
	'core/audio',
	'core/heading',
	'core/image',
	'core/list',
	'core/paragraph',
	'core/separator',
	'core/spacer',
	'core/subhead',
	'core/video',
];

// Template.
const template = [
	[ 'hizzle-forms/address', { required: true, label: __( 'Name', 'hizzle-forms' ), autocomplete: 'name' } ],
	[ 'hizzle-forms/input', { required: true, type: 'email', label: __( 'Email', 'hizzle-forms' ) } ],
	[ 'hizzle-forms/textarea', { label: __( 'Message', 'hizzle-forms' ) } ],
	[
		'hizzle-forms/submit',
		{
			text: __( 'Contact Us', 'hizzle-forms' ),
			lock: { remove: true },
		},
	],
];

function HizzleFormEdit( {
	attributes,
	setAttributes,
	instanceId,
	className,
	style,
} ) {
	const {
		emails,
		action,
		redirect,
		message,
		title,
	} = attributes;

	const formClassnames = classnames( className, 'hizzle-forms' );

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

	// Display the form.
	return (
		<div {...useBlockProps()}>
			<InspectorControls>

				<PanelBody title={ __( 'Form Settings', 'hizzle-forms' ) }>
					<TextControl
						label={ __( 'Form Name', 'hizzle-forms' ) }
						value={ title }
						placeholder={ __( 'Contact Form.', 'hizzle-forms' ) }
						onChange={ title => setAttributes( { title } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Submission Settings', 'hizzle-forms' ) } initialOpen={ false }>
					{ renderSubmissionSettings() }
				</PanelBody>

				<HizzleEmailConnectionSettings emails={emails} setAttributes={ setAttributes } />

			</InspectorControls>

			<div className={ formClassnames } style={ style }>
				<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } template={template} />
			</div>
		</div>
	);
}

export default compose( [
	withSelect( ( select, { clientId } ) => {
		return {
			isEditing: select( 'hizzle/forms' ).isEditingHizzleForm( clientId ),
		};
	} ),
	withDispatch( ( dispatch, { clientId } ) => ( {
		setIsEditing: isEditing => {
			dispatch( 'hizzle/forms' ).setEditingHizzleForm( clientId, isEditing );
		},
		saveHizzleForm: () => {
			dispatch( 'hizzle/forms' ).saveHizzleForm( clientId );
		},
		saveHizzleForm: () => {
			dispatch( 'hizzle/forms' ).deleteHizzleForm( clientId );
		},
	} ) ),
] )( HizzleFormEdit );
