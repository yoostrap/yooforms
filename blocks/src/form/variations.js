import { __ } from '@wordpress/i18n';
import Logo from '../components/logo';

const variations = [
	{
		name: 'hizzle-contact-form',
		isDefault: true,
		title: __( 'Contact Form', 'hizzle-forms' ),
		description: __( 'Add a contact form to your page.', 'hizzle-forms' ),
		keywords: [ __( 'contact', 'hizzle-forms' ), __( 'email', 'hizzle-forms' ) ],
		innerBlocks: [
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
		],
	},
	{
		name: 'hizzle-newsletter-form',
		title: __( 'Newsletter Sign-up', 'hizzle-forms' ),
		description: __(
			'A simple way to collect information from folks visiting your site.',
			'hizzle-forms'
		),
		keywords: [
			__( 'subscribe', 'hizzle-forms' ),
			__( 'email', 'hizzle-forms' ),
			__( 'signup', 'hizzle-forms' ),
		],
		innerBlocks: [
			[ 'hizzle-forms/address', { required: true, label: __( 'Name', 'hizzle-forms' ), autocomplete: 'name' } ],
			[ 'hizzle-forms/input', { required: true, type: 'email', label: __( 'Email', 'hizzle-forms' ) } ],
			[ 'hizzle-forms/checkbox', {} ],
			[
				'hizzle-forms/submit',
				{
					text: __( 'Subscribe', 'hizzle-forms' ),
					lock: { remove: true },
				},
			],
		],
	},
	{
		name: 'hizzle-rsvp-form',
		title: __( 'RSVP Form', 'hizzle-forms' ),
		description: __( 'Add an RSVP form to your page', 'hizzle-forms' ),
		keywords: [ __( 'rsvp', 'hizzle-forms' ), __( 'event', 'hizzle-forms' ) ],
		innerBlocks: [
			[ 'hizzle-forms/address', { required: true, label: __( 'Name', 'hizzle-forms' ), autocomplete: 'name' } ],
			[ 'hizzle-forms/input', { required: true, type: 'email', label: __( 'Email', 'hizzle-forms' ) } ],
			[
				'hizzle-forms/radio',
				{
					label: __( 'Attending?', 'hizzle-forms' ),
					required: true,
					isRadio: true,
					innerBlocks: [
						[ 'hizzle-forms/radio-option', { option: __( 'Yes', 'hizzle-forms' ), selected: true, } ],
						[ 'hizzle-forms/radio-option', { option: __( 'No', 'hizzle-forms' ) } ],
					],
				},
			],
			[ 'hizzle-forms/textarea', { label: __( 'Other Details', 'hizzle-forms' ) } ],
			[
				'hizzle-forms/submit',
				{
					text: __( 'Send RSVP', 'hizzle-forms' ),
					lock: { remove: true },
				},
			],
		],
	},
	{
		name: 'hizzle-registration-form',
		title: __( 'Registration Form', 'hizzle-forms' ),
		description: __( 'Add a Registration form to your page', 'hizzle-forms' ),
		keywords: [ __( 'register', 'hizzle-forms' ), __( 'event', 'hizzle-forms' ) ],
		innerBlocks: [
			[ 'hizzle-forms/address', { required: true, label: __( 'Name', 'hizzle-forms' ), autocomplete: 'name' } ],
			[ 'hizzle-forms/input', { required: true, type: 'email', label: __( 'Email', 'hizzle-forms' ) } ],
			[ 'hizzle-forms/input', { type: 'tel', label: __( 'Phone', 'hizzle-forms' ) } ],
			[
				'hizzle-forms/select',
				{
					label: __( 'How did you hear about us?', 'hizzle-forms' ),
					options: [
						__( 'Search Engine', 'hizzle-forms' ),
						__( 'Social Media', 'hizzle-forms' ),
						__( 'TV', 'hizzle-forms' ),
						__( 'Radio', 'hizzle-forms' ),
						__( 'Friend or Family', 'hizzle-forms' ),
					],
				},
			],
			[ 'hizzle-forms/textarea', { label: __( 'Other Details', 'hizzle-forms' ) } ],
			[
				'hizzle-forms/submit',
				{
					text: __( 'Send', 'hizzle-forms' ),
					lock: { remove: true },
				},
			],
		],
	},
	{
		name: 'hizzle-appointment-form',
		title: __( 'Appointment Form', 'hizzle-forms' ),
		description: __( 'Add an Appointment booking form to your page', 'hizzle-forms' ),
		keywords: [ __( 'appointment', 'hizzle-forms' ), __( 'event', 'hizzle-forms' ) ],
		innerBlocks: [
			[ 'hizzle-forms/address', { required: true, label: __( 'Name', 'hizzle-forms' ), autocomplete: 'name' } ],
			[ 'hizzle-forms/input', { required: true, type: 'tel', label: __( 'Email', 'hizzle-forms' ) } ],
			[ 'hizzle-forms/input', { required: true, type: 'tel', label: __( 'Phone', 'hizzle-forms' ) } ],
			[ 'hizzle-forms/input', { type: 'tel', label: __( 'Date', 'hizzle-forms' ), required: true } ],
			[
				'hizzle-forms/radio',
				{
					label: __( 'Time', 'hizzle-forms' ),
					required: true,
					isRadio: true,
					innerBlocks: [
						[ 'hizzle-forms/radio-option', { option: __( 'Morning', 'hizzle-forms' ), selected: true, } ],
						[ 'hizzle-forms/radio-option', { option: __( 'Afternoon', 'hizzle-forms' ) } ],
					],
				},
			],
			[ 'hizzle-forms/textarea', { label: __( 'Notes', 'hizzle-forms' ) } ],
			[
				'hizzle-forms/submit',
				{
					text: __( 'Book Appointment', 'hizzle-forms' ),
					lock: { remove: true },
				},
			],
		],
	},
	{
		name: 'hizzle-feedback-form',
		title: __( 'Feedback Form', 'hizzle-forms' ),
		description: __( 'Add a Feedback form to your page', 'hizzle-forms' ),
		keywords: [ __( 'feedback', 'hizzle-forms' ), __( 'event', 'hizzle-forms' ) ],
		innerBlocks: [
			[ 'hizzle-forms/address', { required: true, label: __( 'Name', 'hizzle-forms' ), autocomplete: 'name' } ],
			[ 'hizzle-forms/input', { required: true, type: 'tel', label: __( 'Email', 'hizzle-forms' ) } ],
			[
				'hizzle-forms/radio',
				{
					label: __( 'Please rate our website', 'hizzle-forms' ),
					required: true,
					isRadio: true,
					innerBlocks: [
						[ 'hizzle-forms/radio-option', { option: __( '1 - Very Bad', 'hizzle-forms' ), selected: true, } ],
						[ 'hizzle-forms/radio-option', { option: __( '2 - Poor', 'hizzle-forms' ) } ],
						[ 'hizzle-forms/radio-option', { option: __( '3 - Average', 'hizzle-forms' ) } ],
						[ 'hizzle-forms/radio-option', { option: __( '4 - Good', 'hizzle-forms' ) } ],
						[ 'hizzle-forms/radio-option', { option: __( '5 - Excellent', 'hizzle-forms' ) } ],
					],
				},
			],
			[ 'hizzle-forms/textarea', { label: __( 'How could we improve?', 'hizzle-forms' ) } ],
			[
				'hizzle-forms/submit',
				{
					text: __( 'Send Feedback', 'hizzle-forms' ),
					lock: { remove: true },
				},
			],
		],
	},
]

/**
 * Add `isActive` function to all `input` variations, if not defined.
 * `isActive` function is used to find a variation match from a created
 *  Block by providing its attributes.
 */
variations.forEach( ( variation ) => {

	// Attributes.
	variation.attributes = {
		emails: [
			{
				email: '{admin_email}',
				subject: __( 'New Response: Contact Form', 'hizzle-forms' ),
				message: __( 'You have received a new response to your contact form. \n\nHere are the details:\n\n{response_fields}\n\nThank you,\nYour Site\n\n{user_ip}\n{user_agent}\n{user_date}', 'hizzle-forms' ),
				active: true
			},
			{
				email: '{user_email}',
				subject: __( 'Thank you for contacting us', 'hizzle-forms' ),
				message: __( 'Thank you for contacting us. We will be in touch with you shortly.\n\nHere are the details of your message:\n\n{response_fields}\n\nThank you,\nYour Site\n\n{user_ip}\n{user_agent}\n{user_date}', 'hizzle-forms' ),
				active: true
			},
		],
		action: 'message',
		redirect: '',
		message: __( 'Thank you for contacting us. We will be in touch with you shortly.', 'hizzle-forms' ),
		title: variation.title,
	}

	// Category.
	variation.category = 'hizzle-forms';

	// Logo.
	variation.icon = Logo;

	// Example.
	variation.example = {
		attributes: variation.attributes,
		innerBlocks: variation.innerBlocks,
	};

	// Add `isActive` function if not defined.
	if ( ! variation.isActive ) {
		variation.isActive = ( blockAttributes, variationAttributes ) => blockAttributes.title === variationAttributes.title;
	}

	console.log( variation )
} );

export default variations;