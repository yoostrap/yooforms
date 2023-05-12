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
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import InspectorHint from '../components/inspector-hint';
import HizzleEmailConnectionSettings from './email-connection-settings';

// Allowed child blocks for the form.
const ALLOWED_BLOCKS = [
    'hizzle-forms/input',
	'hizzle-forms/textarea',
	'hizzle-forms/checkbox',
	'hizzle-forms/radio',
	'hizzle-forms/select',
	'hizzle-forms/multi-checkbox',
	'hizzle-forms/submit',
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
	[ 'hizzle-forms/input', { validation: [{ name: 'required' }], label: __( 'Name', 'hizzle-forms' ), type: 'name' } ],
	[ 'hizzle-forms/input', { validation: [{ name: 'required' }], type: 'email', label: __( 'Email', 'hizzle-forms' ) } ],
	[ 'hizzle-forms/textarea', { label: __( 'Message', 'hizzle-forms' ) } ],
	[
		'hizzle-forms/submit',
		{
			text: __( 'Contact Us', 'hizzle-forms' ),
		},
	],
];

export default function HizzleFormEdit( { attributes, setAttributes, className, style, clientId } ) {
	const {
		emails,
		action,
		redirect,
		message,
		title,
		instanceID,
	} = attributes;

	const formClassnames = classnames( className, 'hizzle-forms' );

	// Reset instance ID once.
	useEffect( () => {
		if ( ! instanceID ) {
			setAttributes( { instanceID: clientId } );
		}
	}, [] );

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
