/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

// Register all text input blocks.
const inputTypes = [

    // Full name.
    {
        title: __( 'Name', 'hizzle-forms' ),
        description: __( 'A single line text input for a name.', 'hizzle-forms' ),
        type: 'name',
        inputType: 'text',
        autocomplete: 'name',
        icon: 'admin-users',
        example: {
            attributes: {
                label: __( 'Name', 'hizzle-forms' ),
                placeholder: __( 'Enter your name', 'hizzle-forms' ),
                help: __( 'Enter your full name.', 'hizzle-forms' ),
                required: true,
            },
        },
    },

    // First name.
    {
        title: __( 'First Name', 'hizzle-forms' ),
        description: __( 'A single line text input for a first name.', 'hizzle-forms' ),
        type: 'first-name',
        inputType: 'text',
        autocomplete: 'given-name',
        icon: 'admin-users',
        example: {
            attributes: {
                label: __( 'First Name', 'hizzle-forms' ),
                placeholder: __( 'Enter your first name', 'hizzle-forms' ),
                help: __( 'Enter your first name.', 'hizzle-forms' ),
                required: true,
            },
        },
    },

    // Last name.
    {
        title: __( 'Last Name', 'hizzle-forms' ),
        description: __( 'A single line text input for a last name.', 'hizzle-forms' ),
        type: 'last-name',
        inputType: 'text',
        autocomplete: 'family-name',
        icon: 'admin-users',
        example: {
            attributes: {
                label: __( 'Last Name', 'hizzle-forms' ),
                placeholder: __( 'Enter your last name', 'hizzle-forms' ),
                help: __( 'Enter your last name.', 'hizzle-forms' ),
                required: true,
            },
        },
    },

];

export default inputTypes;