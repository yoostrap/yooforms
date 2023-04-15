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

    // Email.
    {
        title: __( 'Email', 'hizzle-forms' ),
        description: __( 'A single line text input for an email address.', 'hizzle-forms' ),
        type: 'email',
        inputType: 'email',
        autocomplete: 'email',
        icon: 'email',
        example: {
            attributes: {
                label: __( 'Email', 'hizzle-forms' ),
                placeholder: __( 'Enter your email', 'hizzle-forms' ),
                help: __( 'Enter your email address.', 'hizzle-forms' ),
                required: true,
            },
        },
    },

    // Text.
    {
        title: __( 'Text', 'hizzle-forms' ),
        description: __( 'A single line text input.', 'hizzle-forms' ),
        type: 'text',
        inputType: 'text',
        autocomplete: 'on',
        icon: 'editor-textcolor',
        example: {
            attributes: {
                label: __( 'Text', 'hizzle-forms' ),
                placeholder: __( 'Enter your text', 'hizzle-forms' ),
                help: __( 'Enter your text.', 'hizzle-forms' ),
                required: true,
            },
        },
    },

    // URL.
    {
        title: __( 'URL', 'hizzle-forms' ),
        description: __( 'A single line text input for a URL.', 'hizzle-forms' ),
        type: 'url',
        inputType: 'url',
        autocomplete: 'url',
        icon: 'admin-links',
        example: {
            attributes: {
                label: __( 'URL', 'hizzle-forms' ),
                placeholder: __( 'Enter your URL', 'hizzle-forms' ),
                help: __( 'Enter your URL.', 'hizzle-forms' ),
                required: true,
            },
        },
    },

    // Telephone.
    {
        title: __( 'Telephone', 'hizzle-forms' ),
        description: __( 'A single line text input for a telephone number.', 'hizzle-forms' ),
        type: 'tel',
        inputType: 'tel',
        autocomplete: 'tel',
        icon: 'phone',
        example: {
            attributes: {
                label: __( 'Telephone', 'hizzle-forms' ),
                placeholder: __( 'Enter your telephone number', 'hizzle-forms' ),
                help: __( 'Enter your telephone number.', 'hizzle-forms' ),
                required: true,
            },
        },
    },

    // Number.
    {
        title: __( 'Number', 'hizzle-forms' ),
        description: __( 'A single line text input for a number.', 'hizzle-forms' ),
        type: 'number',
        inputType: 'number',
        autocomplete: 'on',
        icon: 'editor-ol',
        example: {
            attributes: {
                label: __( 'Number', 'hizzle-forms' ),
                placeholder: __( 'Enter your number', 'hizzle-forms' ),
                help: __( 'Enter a number.', 'hizzle-forms' ),
                required: true,
            },
        },
    },

    // Date.
    {
        title: __( 'Date', 'hizzle-forms' ),
        description: __( 'A single line text input for a date.', 'hizzle-forms' ),
        type: 'date',
        inputType: 'date',
        autocomplete: 'on',
        icon: 'calendar-alt',
        example: {
            attributes: {
                label: __( 'Date', 'hizzle-forms' ),
                placeholder: __( 'Enter your date', 'hizzle-forms' ),
                help: __( 'Enter a date.', 'hizzle-forms' ),
                required: true,
            },
        },
    },

    // Time.
    {
        title: __( 'Time', 'hizzle-forms' ),
        description: __( 'A single line text input for a time.', 'hizzle-forms' ),
        type: 'time',
        inputType: 'time',
        autocomplete: 'on',
        icon: 'clock',
        example: {
            attributes: {
                label: __( 'Time', 'hizzle-forms' ),
                placeholder: __( 'Enter your time', 'hizzle-forms' ),
                help: __( 'Enter a time.', 'hizzle-forms' ),
                required: true,
            },
        },
    },

    // Month.
    {
        title: __( 'Month', 'hizzle-forms' ),
        description: __( 'A single line text input for a month.', 'hizzle-forms' ),
        type: 'month',
        inputType: 'month',
        autocomplete: 'on',
        icon: 'calendar-alt',
        example: {
            attributes: {
                label: __( 'Month', 'hizzle-forms' ),
                placeholder: __( 'Enter your month', 'hizzle-forms' ),
                help: __( 'Enter a month.', 'hizzle-forms' ),
                required: true,
            },
        },
    },

    // Week.
    {
        title: __( 'Week', 'hizzle-forms' ),
        description: __( 'A single line text input for a week.', 'hizzle-forms' ),
        type: 'week',
        inputType: 'week',
        autocomplete: 'on',
        icon: 'calendar-alt',
        example: {
            attributes: {
                label: __( 'Week', 'hizzle-forms' ),
                placeholder: __( 'Enter your week', 'hizzle-forms' ),
                help: __( 'Enter a week.', 'hizzle-forms' ),
                required: true,
            },
        },
    },

    // Color.
    {
        title: __( 'Color', 'hizzle-forms' ),
        description: __( 'A single line text input for a color.', 'hizzle-forms' ),
        type: 'color',
        inputType: 'color',
        autocomplete: 'on',
        icon: 'editor-textcolor',
        example: {
            attributes: {
                label: __( 'Color', 'hizzle-forms' ),
                placeholder: __( 'Enter your color', 'hizzle-forms' ),
                help: __( 'Enter a color.', 'hizzle-forms' ),
                required: true,
            },
        },
    },

    // Range.
    {
        title: __( 'Range', 'hizzle-forms' ),
        description: __( 'A single line text input for a range.', 'hizzle-forms' ),
        type: 'range',
        inputType: 'range',
        autocomplete: 'on',
        icon: 'editor-ol',
        example: {
            attributes: {
                label: __( 'Range', 'hizzle-forms' ),
                placeholder: __( 'Enter your range', 'hizzle-forms' ),
                help: __( 'Enter a range.', 'hizzle-forms' ),
                required: true,
            },
        },
    },
];

export default inputTypes;