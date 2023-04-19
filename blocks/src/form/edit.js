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
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
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
	'core/columns',
	'core/group',
	'core/heading',
	'core/list',
	'core/paragraph',
	'core/row',
	'core/separator',
	'core/spacer',
	'core/stack',
	'core/subhead',
];

export default function HizzleFormEdit( {
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
				<PanelBody title={ __( 'Submission Settings', 'hizzle-forms' ) } initialOpen={ false }>
					{ renderSubmissionSettings() }
				</PanelBody>
				<HizzleEmailConnectionSettings emails={emails} setAttributes={ setAttributes } />

			</InspectorControls>

			<div className={ formClassnames } style={ style }>
				<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } templateInsertUpdatesSelection={ false } />
			</div>
		</div>
	);
}
