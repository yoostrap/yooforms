import { __ } from '@wordpress/i18n';
import { compact } from 'lodash';
import Logo from '../components/logo';

const defaultAttributes = {
	emails: [
		{
			email: '{admin_email}',
			subject: __( 'New Response: Contact Form', 'hizzle-forms' ),
			message: __( 'You have received a new response to your contact form. <br><br>Here are the details:<br><br>{response_fields}<br><br>Thank you,<br>Your Site<br><br>{user_ip}<br>{user_agent}<br>{user_date}', 'hizzle-forms' ),
			active: true
		},
		{
			email: '{user_email}',
			subject: __( 'Thank you for contacting us', 'hizzle-forms' ),
			message: __( 'Thank you for contacting us. We will be in touch with you shortly.<br><br>Here are the details of your message:<br><br>{response_fields}<br><br>Thank you,<br>Your Site<br><br>{user_ip}<br>{user_agent}<br>{user_date}', 'hizzle-forms' ),
			active: true
		},
	],
	action: 'message',
	redirect: '',
	message: __( 'Thank you for contacting us. We will be in touch with you shortly.', 'hizzle-forms' ),
	title: __( 'Contact Form', 'hizzle-forms' ),
}

const variations = compact( [
	{
		name: 'hizzle-contact-form',
		isDefault: true,
		title: __( 'Contact Form', 'hizzle-forms' ),
		description: __( 'Add a contact form to your page.', 'hizzle-forms' ),
		category: 'hizzle-forms',
		attributes: defaultAttributes,
		icon: Logo,
		innerBlocks: [
			[ 'hizzle-forms/name', { required: true, label: __( 'Name', 'hizzle-forms' ) } ],
			[ 'hizzle-forms/email', { required: true, label: __( 'Email', 'hizzle-forms' ) } ],
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
		category: 'hizzle-forms',
		description: __(
			'A simple way to collect information from folks visiting your site.',
			'hizzle-forms'
		),
		keywords: [
			__( 'subscribe', 'hizzle-forms' ),
			__( 'email', 'hizzle-forms' ),
			__( 'signup', 'hizzle-forms' ),
		],
		attributes: {
			...defaultAttributes,
			title: __( 'Newsletter Sign-up', 'hizzle-forms' ),
		},
		icon: Logo,
		innerBlocks: [
			[ 'hizzle-forms/name', { required: true, label: __( 'Name', 'hizzle-forms' ) } ],
			[ 'hizzle-forms/email', { required: true, label: __( 'Email', 'hizzle-forms' ) } ],
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
		category: 'hizzle-forms',
		attributes: {
			...defaultAttributes,
			title: __( 'RSVP Form', 'hizzle-forms' ),
		},
		icon: Logo,
		innerBlocks: [
			[ 'hizzle-forms/name', { required: true, label: __( 'Name', 'hizzle-forms' ) } ],
			[ 'hizzle-forms/email', { required: true, label: __( 'Email', 'hizzle-forms' ) } ],
			[
				'hizzle-forms/radio',
				{
					label: __( 'Attending?', 'hizzle-forms' ),
					required: true,
					innerBlocks: [
						[ 'hizzle-forms/radio-option', { label: __( 'Yes', 'hizzle-forms' ), selected: true, } ],
						[ 'hizzle-forms/radio-option', { label: __( 'No', 'hizzle-forms' ) } ],
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
		category: 'hizzle-forms',
		attributes: {
			...defaultAttributes,
			title: __( 'Registration Form', 'hizzle-forms' ),
		},
		icon: Logo,
		innerBlocks: [
			[ 'hizzle-forms/name', { required: true, label: __( 'Name', 'hizzle-forms' ) } ],
			[ 'hizzle-forms/email', { required: true, label: __( 'Email', 'hizzle-forms' ) } ],
			[ 'hizzle-forms/tel', { label: __( 'Phone', 'hizzle-forms' ) } ],
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
		category: 'hizzle-forms',
		attributes: {
			...defaultAttributes,
			title: __( 'Appointment Form', 'hizzle-forms' ),
		},
		icon: Logo,
		innerBlocks: [
			[ 'hizzle-forms/name', { required: true, label: __( 'Name', 'hizzle-forms' ) } ],
			[ 'hizzle-forms/email', { required: true, label: __( 'Email', 'hizzle-forms' ) } ],
			[ 'hizzle-forms/tel', { required: true, label: __( 'Phone', 'hizzle-forms' ) } ],
			[ 'hizzle-forms/date', { label: __( 'Date', 'hizzle-forms' ), required: true } ],
			[
				'hizzle-forms/radio',
				{
					label: __( 'Time', 'hizzle-forms' ),
					required: true,
					innerBlocks: [
						[ 'hizzle-forms/radio-option', { label: __( 'Morning', 'hizzle-forms' ), selected: true, } ],
						[ 'hizzle-forms/radio-option', { label: __( 'Afternoon', 'hizzle-forms' ) } ],
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
		name: 'hizzlefeedback-form',
		title: __( 'Feedback Form', 'hizzle-forms' ),
		description: __( 'Add a Feedback form to your page', 'hizzle-forms' ),
		category: 'hizzle-forms',
		attributes: {
			...defaultAttributes,
			title: __( 'Feedback Form', 'hizzle-forms' ),
		},
		icon: Logo,
		innerBlocks: [
			[ 'hizzle-forms/name', { required: true, label: __( 'Name', 'hizzle-forms' ) } ],
			[ 'hizzle-forms/email', { required: true, label: __( 'Email', 'hizzle-forms' ) } ],
			[
				'hizzle-forms/radio',
				{
					label: __( 'Please rate our website', 'hizzle-forms' ),
					required: true,
					innerBlocks: [
						[ 'hizzle-forms/radio-option', { label: __( '1 - Very Bad', 'hizzle-forms' ), selected: true, } ],
						[ 'hizzle-forms/radio-option', { label: __( '2 - Poor', 'hizzle-forms' ) } ],
						[ 'hizzle-forms/radio-option', { label: __( '3 - Average', 'hizzle-forms' ) } ],
						[ 'hizzle-forms/radio-option', { label: __( '4 - Good', 'hizzle-forms' ) } ],
						[ 'hizzle-forms/radio-option', { label: __( '5 - Excellent', 'hizzle-forms' ) } ],
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
] );

export default variations;