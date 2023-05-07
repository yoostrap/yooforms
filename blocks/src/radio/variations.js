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
		name: 'hizzle-radio-input',
		isDefault: true,
		title: __( 'Radio', 'hizzle-forms' ),
		description: __( 'Add a radio select field to your form.', 'hizzle-forms' ),
		keywords:  [ __( 'radio', 'hizzle-forms' ), __( 'select', 'hizzle-forms' ) ],
		category: 'hizzle-forms',
		attributes: { isRadio: true },
		icon: {
            src: 'marker',
            foreground: PRIMARY_COLOR,
        },
	},
	{
		name: 'hizzle-checkbox-input',
		title: __( 'Multi Checkbox', 'hizzle-forms' ),
		description: __( 'Add a checkbox select field to your form.', 'hizzle-forms' ),
		keywords:  [ __( 'checkbox', 'hizzle-forms' ), __( 'select', 'hizzle-forms' ) ],
		category: 'hizzle-forms',
		attributes: { isRadio: false },
		icon: {
			src: 'yes',
			foreground: PRIMARY_COLOR,
		},
	},
];

variations.forEach( ( variation ) => {

	// Example.
	variation.example = {
		attributes: {
			label: __( 'Select an option', 'hizzle-forms' ),
			required: true,
			help: __( 'This is a help text.', 'hizzle-forms' ),
			isRadio: variation.attributes.isRadio,
		},
		innerBlocks: [
			{
				name: 'hizzle-forms/radio-option',
				attributes: { option: 'First Option', selected: true }
			},
			{
				name: 'hizzle-forms/radio-option',
				attributes: { option: 'Second Option', selected: true }
			},
			{
				name: 'hizzle-forms/radio-option',
				attributes: { option: 'Third Option', selected: true }
			},
		]
	}

	// Add `isActive` function if not defined.
	if ( ! variation.isActive ) {
		variation.isActive = ( blockAttributes, variationAttributes ) => blockAttributes.isRadio === variationAttributes.isRadio;
	}

} );

export default variations;