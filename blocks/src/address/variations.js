import { __ } from '@wordpress/i18n';

const PRIMARY_COLOR = '#AA00FF';

/** @typedef {import('@wordpress/blocks').WPBlockVariation} WPBlockVariation */

/**
 * The available input variations.
 *
 * @type {WPBlockVariation[]}
 */
const variations = [
	{
		name: 'hizzle-name',
		isDefault: true,
		title: __( 'Full Name', 'hizzle-forms' ),
		description: __( 'Collect the full name.', 'hizzle-forms' ),
		keywords:  [ __( 'full name', 'hizzle-forms' ), __( 'input', 'hizzle-forms' ) ],
		category: 'hizzle-forms',
		attributes: { autocomplete: 'name' },
		icon: {
            src: 'nametag',
            foreground: PRIMARY_COLOR,
        },
	},
	{
		name: 'hizzle-given-name',
		isDefault: true,
		title: __( 'First Name', 'hizzle-forms' ),
		description: __( 'Collect the first name.', 'hizzle-forms' ),
		keywords:  [ __( 'first name', 'hizzle-forms' ), __( 'input', 'hizzle-forms' ) ],
		category: 'hizzle-forms',
		attributes: { autocomplete: 'given-name' },
		icon: {
            src: 'id',
            foreground: PRIMARY_COLOR,
        },
	},
	{
		name: 'hizzle-family-name',
		title: __( 'Last Name', 'hizzle-forms' ),
		description: __( 'Collect the last name.', 'hizzle-forms' ),
		keywords:  [ __( 'last name', 'hizzle-forms' ), __( 'input', 'hizzle-forms' ) ],
		category: 'hizzle-forms',
		attributes: { autocomplete: 'family-name' },
		icon: {
			src: 'buddicons-groups',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-address-line1',
		isDefault: true,
		title: __( 'Address Line 1', 'hizzle-forms' ),
		description: __( 'Collect the first line of the address.', 'hizzle-forms' ),
		keywords:  [ __( 'address', 'hizzle-forms' ), __( 'input', 'hizzle-forms' ) ],
		category: 'hizzle-forms',
		attributes: { autocomplete: 'address-line1' },
		icon: {
            src: 'admin-home',
            foreground: PRIMARY_COLOR,
        },
	},
	{
		name: 'hizzle-address-line2',
		title: __( 'Address Line 2', 'hizzle-forms' ),
		description: __( 'Collect the second line of the address.', 'hizzle-forms' ),
		keywords:  [ __( 'address', 'hizzle-forms' ), __( 'input', 'hizzle-forms' ) ],
		category: 'hizzle-forms',
		attributes: { autocomplete: 'address-line2' },
		icon: {
			src: 'building',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-address-city',
		title: __( 'City', 'hizzle-forms' ),
		description: __( 'Collect the city.', 'hizzle-forms' ),
		keywords:  [ __( 'address', 'hizzle-forms' ), __( 'city', 'hizzle-forms' ), __( 'input', 'hizzle-forms' ) ],
		category: 'hizzle-forms',
		attributes: { autocomplete: 'address-level2' },
		icon: {
			src: 'location',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-address-state',
		title: __( 'State', 'hizzle-forms' ),
		description: __( 'Collect the state.', 'hizzle-forms' ),
		keywords:  [ __( 'address', 'hizzle-forms' ), __( 'state', 'hizzle-forms' ), __( 'input', 'hizzle-forms' ) ],
		category: 'hizzle-forms',
		attributes: { autocomplete: 'address-level1' },
		icon: {
			src: 'location-alt',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-address-zip',
		title: __( 'Zip Code', 'hizzle-forms' ),
		description: __( 'Collect the zip code.', 'hizzle-forms' ),
		keywords:  [ __( 'address', 'hizzle-forms' ), __( 'zip', 'hizzle-forms' ), __( 'postal code', 'hizzle-forms' ), __( 'input', 'hizzle-forms' ) ],
		category: 'hizzle-forms',
		attributes: { autocomplete: 'postal-code' },
		icon: {
			src: 'admin-multisite',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-address-country',
		title: __( 'Country', 'hizzle-forms' ),
		description: __( 'Collect the country.', 'hizzle-forms' ),
		keywords:  [ __( 'address', 'hizzle-forms' ), __( 'country', 'hizzle-forms' ), __( 'input', 'hizzle-forms' ) ],
		category: 'hizzle-forms',
		attributes: { autocomplete: 'country' },
		icon: {
			src: 'admin-site-alt',
			foreground: PRIMARY_COLOR,
		},
	},
	{
		name: 'hizzle-organization',
		title: __( 'Company / Organization', 'hizzle-forms' ),
		description: __( 'Collect the company or organization.', 'hizzle-forms' ),
		keywords:  [ __( 'organization', 'hizzle-forms' ), __( 'company', 'hizzle-forms' ), __( 'input', 'hizzle-forms' ) ],
		category: 'hizzle-forms',
		attributes: { autocomplete: 'organization' },
		icon: {
			src: 'groups',
			foreground: PRIMARY_COLOR,
		},
	},
];

variations.forEach( ( variation ) => {

	variation.attributes.label = variation.title;

	// Example.
	variation.example = {
		attributes: {
			label: variation.title,
			placeholder: variation.title,
			required: true,
			help: variation.description,
			autocomplete: variation.attributes.autocomplete,
		}
	};

	// Add `isActive` function if not defined.
	if ( ! variation.isActive ) {
		variation.isActive = ( blockAttributes, variationAttributes ) => blockAttributes.autocomplete === variationAttributes.autocomplete;
	}

} );

export default variations;