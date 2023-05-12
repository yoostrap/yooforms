import { TextControl, TextareaControl, Button, Flex, FlexItem , ToggleControl, PanelBody} from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';

/**
 * Displays controls for a single email connection.
 *
 * @param {Object} props
 * @param {number} props.index
 * @param {boolean} props.active
 * @param {boolean} props.canDelete
 * @param {string} props.email
 * @param {string} props.subject
 * @param {string} props.message
 * @param {Function} props.setAttributes
 * @param {Function} props.deleteConnection
 * @param {Function} props.insertConnection
 * @returns {JSX.Element}
 */
const EmailConnection = ( { index, active, email, subject, message, setAttributes, canDelete, deleteConnection, insertConnection } ) => {

	const panelTitle = sprintf(
		__( 'Email Connection #%d', 'hizzle-forms' ),
		index + 1
	);

	return (
		<PanelBody title={ panelTitle } initialOpen={ false }>

			<ToggleControl
				label={ __( 'Send this email', 'hizzle-forms' ) }
				help={ active ? __( 'This email will be sent.', 'hizzle-forms' ) : __( 'This email will not be sent.', 'hizzle-forms' ) }
				checked={ active }
				onChange={ active => setAttributes( { active } ) }
			/>

			<TextControl
				label={ __( 'Recipient', 'hizzle-forms' ) }
				placeholder={ __( '{admin_email}, {email}, example@gmail.com', 'hizzle-forms' ) }
				value={ email ? email : '' }
				onChange={ ( email ) => setAttributes( { email } ) }
				help={ __( 'You can enter multiple email addresses separated by commas.', 'hizzle-forms' ) }
			/>

			<TextControl
				label={ __( 'Email subject line', 'hizzle-forms' ) }
				value={ subject ? subject : '' }
				placeholder={ __( 'Enter a subject', 'hizzle-forms' ) }
				onChange={ subject => setAttributes( { subject } ) }
			/>

			<TextareaControl
				value={ message ? message : '' }
				onChange={ message => setAttributes( { message } ) }
				label={ __( 'Email content', 'hizzle-forms' ) }
				placeholder={ __( 'Enter email content…', 'hizzle-forms' ) }
				rows={ 10 }
			/>

			<Flex>
				<FlexItem>
					<Button
						variant="secondary"
						isSmall
						onClick={ insertConnection }
					>
						{ __( 'Add Connection', 'hizzle-forms' ) }
					</Button>
				</FlexItem>
				{ canDelete && (
					<FlexItem>
						<Button
							isDestructive
							isSmall
							onClick={ deleteConnection }
						>
							{ __( 'Delete Connection', 'hizzle-forms' ) }
						</Button>
					</FlexItem>
				) }
			</Flex>

		</PanelBody>
	)
};

/**
 * Displays controls for all email connections.
 *
 * @param {Object} props
 * @param {Array} props.emails
 * @param {Function} props.setAttributes
 * @returns {JSX.Element}
 */
const EmailConnections = ( { emails, setAttributes } ) => {

	// If we have no emails, add a default one.
	useEffect( () => {
		if ( ! Array.isArray( emails ) || emails.length === 0 ) {
			setAttributes( { emails: [
				{
					email: "{admin_email}",
					subject: __( 'New form response', 'hizzle-forms' ),
					message: __( 'You have received a new response to your contact form. \n\nHere are the details:\n\n{response_fields}\n\nThank you,\n{site_title}\n\n<hr>\nURL: {current_url} \nIP Address: {user_ip}\nUser Agent: {user_agent}\nTime: {current_date} at {current_time}', 'hizzle-forms' ),
					active: false
				}
			] } );
		}
	}, [ emails ] );

	// Abort if we don't have emails.
	if ( ! Array.isArray( emails ) ) {
		return null;
	}

	// Only allow deleting if we have more than one email.
	const canDelete = emails.length > 1;

	return (
		<>
			{ emails.map( ( email, index ) => (
				<EmailConnection
					key={ index }
					index={ index }
					canDelete={ canDelete }
					setAttributes={ ( attributes ) => {
						const newEmails = [ ...emails ];
						newEmails[ index ] = {
							...newEmails[ index ],
							...attributes
						};
						setAttributes( { emails: newEmails } );
					} }
					deleteConnection={ () => {
						const newEmails = [ ...emails ];
						newEmails.splice( index, 1 );
						setAttributes( { emails: newEmails } );
					} }
					insertConnection={ () => {
						const newEmails = [ ...emails ];
						newEmails.splice( index + 1, 0, {
							email: '',
							subject: '',
							message: '',
							active: false
						} );
						setAttributes( { emails: newEmails } );
					} }
					{ ...email }
				/>
			) ) }
		</>
	);
};

export default EmailConnections;
