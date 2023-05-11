import { __ } from '@wordpress/i18n';
import { compact } from 'lodash';

const PRIMARY_COLOR = '#AA00FF';

/** @typedef {import('@wordpress/blocks').WPBlockVariation} WPBlockVariation */

/**
 * The available input variations.
 *
 * @type {WPBlockVariation[]}
 */
const variations = compact( [
	{
		name: 'hizzle-text-input',
		isDefault: true,
		title: __( 'Text', 'hizzle-forms' ),
		description: __( 'Add a single-line text input field to your form.', 'hizzle-forms' ),
		keywords:  [ __( 'text', 'hizzle-forms' ) ],
		attributes: { type: 'text' },
		icon: {
            src: 'editor-textcolor',
            foreground: PRIMARY_COLOR,
        },
	},
	{
		name: 'hizzle-name',
		title: __( 'Full Name', 'hizzle-forms' ),
		description: __( 'Collect the full name.', 'hizzle-forms' ),
		keywords:  [ __( 'full name', 'hizzle-forms' ) ],
		attributes: { type: 'name' },
		icon: {
            src: 'nametag',
            foreground: PRIMARY_COLOR,
        },
	},
	{
		name: 'hizzle-given-name',
		title: __( 'First Name', 'hizzle-forms' ),
		description: __( 'Collect the first name.', 'hizzle-forms' ),
		keywords:  [ __( 'first name', 'hizzle-forms' ) ],
		attributes: { type: 'given-name' },
		icon: {
            src: 'id',
            foreground: PRIMARY_COLOR,
        },
	},
	{
		name: 'hizzle-family-name',
		title: __( 'Last Name', 'hizzle-forms' ),
		description: __( 'Collect the last name.', 'hizzle-forms' ),
		keywords:  [ __( 'last name', 'hizzle-forms' ) ],
		attributes: { type: 'family-name' },
		icon: {
			src: 'buddicons-groups',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-address-line1',
		title: __( 'Address Line 1', 'hizzle-forms' ),
		description: __( 'Collect the first line of the address.', 'hizzle-forms' ),
		keywords:  [ __( 'address', 'hizzle-forms' ) ],
		attributes: { type: 'address-line1' },
		icon: {
            src: 'admin-home',
            foreground: PRIMARY_COLOR,
        },
	},
	{
		name: 'hizzle-address-line2',
		title: __( 'Address Line 2', 'hizzle-forms' ),
		description: __( 'Collect the second line of the address.', 'hizzle-forms' ),
		keywords:  [ __( 'address', 'hizzle-forms' ) ],
		attributes: { type: 'address-line2' },
		icon: {
			src: 'building',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-address-city',
		title: __( 'City', 'hizzle-forms' ),
		description: __( 'Collect the city.', 'hizzle-forms' ),
		keywords:  [ __( 'address', 'hizzle-forms' ), __( 'city', 'hizzle-forms' ) ],
		attributes: { type: 'address-level2' },
		icon: {
			src: 'location',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-address-state',
		title: __( 'State', 'hizzle-forms' ),
		description: __( 'Collect the state.', 'hizzle-forms' ),
		keywords:  [ __( 'address', 'hizzle-forms' ), __( 'state', 'hizzle-forms' ) ],
		attributes: { type: 'address-level1' },
		icon: {
			src: 'location-alt',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-address-zip',
		title: __( 'Zip Code', 'hizzle-forms' ),
		description: __( 'Collect the zip code.', 'hizzle-forms' ),
		keywords:  [ __( 'address', 'hizzle-forms' ), __( 'zip', 'hizzle-forms' ), __( 'postal code', 'hizzle-forms' ) ],
		attributes: { type: 'postal-code' },
		icon: {
			src: 'admin-multisite',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-organization',
		title: __( 'Company / Organization', 'hizzle-forms' ),
		description: __( 'Collect the company or organization.', 'hizzle-forms' ),
		keywords:  [ __( 'organization', 'hizzle-forms' ), __( 'company', 'hizzle-forms' ) ],
		attributes: { type: 'organization' },
		icon: {
			src: 'groups',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-password-input',
		title: __( 'Password', 'hizzle-forms' ),
		description: __( 'Add a single-line password input field to your form.', 'hizzle-forms' ),
		keywords:  [ __( 'password', 'hizzle-forms' ) ],
		attributes: { type: 'password' },
		icon: {
			src: 'lock',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-email-input',
		title: __( 'Email', 'hizzle-forms' ),
		description: __( 'Add a single-line email input field to your form.', 'hizzle-forms' ),
		keywords:  [ __( 'email', 'hizzle-forms' ) ],
		attributes: { type: 'email' },
		icon: {
			src: 'email',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-url-input',
		title: __( 'URL', 'hizzle-forms' ),
		description: __( 'Add a single-line URL input field to your form.', 'hizzle-forms' ),
		keywords:  [ __( 'url', 'hizzle-forms' ), __( 'website', 'hizzle-forms' ) ],
		attributes: { type: 'url' },
		icon: {
			src: 'admin-links',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-tel-input',
		title: __( 'Telephone', 'hizzle-forms' ),
		description: __( 'Add a single-line telephone input field to your form.', 'hizzle-forms' ),
		keywords:  [ __( 'telephone', 'hizzle-forms' ) ],
		attributes: { type: 'tel' },
		icon: {
			src: 'phone',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-number-input',
		title: __( 'Number', 'hizzle-forms' ),
		description: __( 'Add a single-line number input field to your form.', 'hizzle-forms' ),
		keywords:  [ __( 'number', 'hizzle-forms' ) ],
		attributes: { type: 'number', min: 0, max: 10000, step: 1 },
		icon: {
			src: 'editor-ol-rtl',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-date-input',
		title: __( 'Date', 'hizzle-forms' ),
		description: __( 'Add a single-line date input field to your form.', 'hizzle-forms' ),
		keywords:  [ __( 'date', 'hizzle-forms' ) ],
		attributes: { type: 'date' },
		icon: {
			src: 'calendar-alt',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-time-input',
		title: __( 'Time', 'hizzle-forms' ),
		description: __( 'Add a single-line time input field to your form.', 'hizzle-forms' ),
		keywords:  [ __( 'time', 'hizzle-forms' ) ],
		attributes: { type: 'time' },
		icon: {
			src: 'clock',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-month-input',
		title: __( 'Month', 'hizzle-forms' ),
		description: __( 'Add a single-line month input field to your form.', 'hizzle-forms' ),
		keywords:  [ __( 'month', 'hizzle-forms' ) ],
		attributes: { type: 'month' },
		icon: {
			src: 'schedule',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-week-input',
		title: __( 'Week', 'hizzle-forms' ),
		description: __( 'Add a single-line week input field to your form.', 'hizzle-forms' ),
		keywords:  [ __( 'week', 'hizzle-forms' ) ],
		attributes: { type: 'week' },
		icon: {
			src: 'tide',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-color-input',
		title: __( 'Color', 'hizzle-forms' ),
		description: __( 'Add a single-line color input field to your form.', 'hizzle-forms' ),
		keywords:  [ __( 'color', 'hizzle-forms' ) ],
		attributes: { type: 'color' },
		icon: {
			src: 'color-picker',
			foreground: PRIMARY_COLOR,
		},
	},
] );

/**
 * Add `isActive` function to all `input` variations, if not defined.
 * `isActive` function is used to find a variation match from a created
 *  Block by providing its attributes.
 */
variations.forEach( ( variation ) => {

	// Example.
	variation.example = {
		attributes: {
			label: variation.title,
			placeholder: __( 'Enter your text', 'hizzle-forms' ),
			validation: [{ name: 'required' }],
			help: variation.description,
			value: '',
			...variation.attributes
		}
	};

	// Add `isActive` function if not defined.
	if ( ! variation.isActive ) {
		variation.isActive = ['type'];
	}

	// Add input to keywords.
	variation.keywords.push( __( 'input', 'hizzle-forms' ) );

	// Set category.
	variation.category = 'hizzle-forms';

} );

export default variations;