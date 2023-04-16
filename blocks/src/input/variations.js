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
		keywords:  [ __( 'text', 'hizzle-forms' ), __( 'input', 'hizzle-forms' ) ],
		category: 'hizzle-forms',
		attributes: { type: 'text' },
		icon: {
            src: 'editor-textcolor',
            foreground: PRIMARY_COLOR,
        },
	},
	{
		name: 'hizzle-password-input',
		title: __( 'Password', 'hizzle-forms' ),
		description: __( 'Add a single-line password input field to your form.', 'hizzle-forms' ),
		keywords:  [ __( 'password', 'hizzle-forms' ), __( 'input', 'hizzle-forms' ) ],
		category: 'hizzle-forms',
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
		keywords:  [ __( 'email', 'hizzle-forms' ), __( 'input', 'hizzle-forms' ) ],
		category: 'hizzle-forms',
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
		keywords:  [ __( 'url', 'hizzle-forms' ), __( 'input', 'hizzle-forms' ) ],
		category: 'hizzle-forms',
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
		keywords:  [ __( 'telephone', 'hizzle-forms' ), __( 'input', 'hizzle-forms' ) ],
		category: 'hizzle-forms',
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
		keywords:  [ __( 'number', 'hizzle-forms' ), __( 'input', 'hizzle-forms' ) ],
		category: 'hizzle-forms',
		attributes: { type: 'number', min: 0, max: 10000, step: 1 },
		icon: {
			src: 'editor-ol-rtl',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-range-input',
		title: __( 'Range', 'hizzle-forms' ),
		description: __( 'Add a single-line range input field to your form.', 'hizzle-forms' ),
		keywords:  [ __( 'range', 'hizzle-forms' ), __( 'input', 'hizzle-forms' ) ],
		category: 'hizzle-forms',
		attributes: { type: 'range', min: 0, max: 100, step: 1 },
		icon: {
			src: 'editor-ol-rtl',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-date-input',
		title: __( 'Date', 'hizzle-forms' ),
		description: __( 'Add a single-line date input field to your form.', 'hizzle-forms' ),
		keywords:  [ __( 'date', 'hizzle-forms' ), __( 'input', 'hizzle-forms' ) ],
		category: 'hizzle-forms',
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
		keywords:  [ __( 'time', 'hizzle-forms' ), __( 'input', 'hizzle-forms' ) ],
		category: 'hizzle-forms',
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
		keywords:  [ __( 'month', 'hizzle-forms' ), __( 'input', 'hizzle-forms' ) ],
		category: 'hizzle-forms',
		attributes: { type: 'month' },
		icon: {
			src: 'calendar-alt',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-week-input',
		title: __( 'Week', 'hizzle-forms' ),
		description: __( 'Add a single-line week input field to your form.', 'hizzle-forms' ),
		keywords:  [ __( 'week', 'hizzle-forms' ), __( 'input', 'hizzle-forms' ) ],
		category: 'hizzle-forms',
		attributes: { type: 'week' },
		icon: {
			src: 'calendar-alt',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-color-input',
		title: __( 'Color', 'hizzle-forms' ),
		description: __( 'Add a single-line color input field to your form.', 'hizzle-forms' ),
		keywords:  [ __( 'color', 'hizzle-forms' ), __( 'input', 'hizzle-forms' ) ],
		category: 'hizzle-forms',
		attributes: { type: 'color' },
		icon: {
			src: 'admin-customizer',
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

	// Add default attributes to the variation.
	variation.attributes = {
		label: '',
		placeholder: '',
		required: false,
		help: '',
		pattern: '',
		value: '',
		...variation.attributes,
	};

	// Example.
	variation.example = {
		attributes: {
			label: variation.title,
			placeholder: __( 'Enter your text', 'hizzle-forms' ),
			required: true,
			help: variation.description,
			pattern: '',
			type: variation.attributes.type,
			value: '',
		}
	};

	// Scope.
	variation.scope = [ 'block', 'inserter', 'transform' ];

	// Add `isActive` function if not defined.
	if ( ! variation.isActive ) {
		variation.isActive = ( blockAttributes, variationAttributes ) => blockAttributes.type === variationAttributes.type;
	}

} );

export default variations;