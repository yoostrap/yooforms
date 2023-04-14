/**
 * External dependencies
 */
import classNames from 'classnames';

/**
 * WordPress dependencies.
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import WithEditWrapper from '../components/with-edit-wrapper';
import WithSaveWrapper from '../components/with-save-wrapper';

// Creates an edit component for a text input.
const getEdit = (type, autocomplete) => {

    return ( props ) => {

        const classes = classNames(
            'hizzle-forms__field-input',
            `hizzle-forms__field-input-${ type }`,
            props.className
        );

        return (
            <WithEditWrapper {...props} className={classes}>
                <input readOnly type={ type } placeholder={ props.attributes.placeholder } autoComplete={ autocomplete } />
            </WithEditWrapper>
        );
    }
};

// Creates a save component for a text input.
const getSave = (type, autocomplete) => {

    return ( props ) => {

        const classes = classNames(
            'hizzle-forms__field-input',
            `hizzle-forms__field-input-${ type }`,
            props.className
        );

        return (
            <WithSaveWrapper {...props} className={classes}>
                <input type={ type } placeholder={ props.attributes.placeholder } autoComplete={ autocomplete } />
            </WithSaveWrapper>
        );
    }
};

/**
 * Default attributes.
 */
const defaultAttributes = {
    label: {
        type: "string",
        default: "",
        source: "html",
        selector: "label",
    },
    required: {
        type: "boolean",
        default: false,
    },
    help: {
        type: "string",
        default: "",
    },
}

/**
 * Registers a text input block.
 *
 * @param {string} type The type of input.
 */
const registerTextBlock = (type) => {

    var inputType = type;
    var autocomplete = 'on';
    const blockName = `hizzle-forms/${type}`;

    switch (type) {
        case 'name':
        case 'first_name':
        case 'last_name':
            inputType = 'text';
            autocomplete = type;
            break;
        case 'email':
            autocomplete = type;
            break;
    }

    registerBlockType(blockName, {
        attributes: {
            ...defaultAttributes,
            placeholder: {
                type: "string",
                default: "",
                source: "attribute",
                selector: "input",
                attribute: "placeholder"
            },
        },
        edit: getEdit(inputType, autocomplete),
        save: getSave(inputType, autocomplete),
    });
};

// Register all text input blocks.
registerTextBlock('name');
registerTextBlock('first-name');
registerTextBlock('last-name');
registerTextBlock('email');
registerTextBlock('text');
registerTextBlock('url');
registerTextBlock('tel');
registerTextBlock('number');
registerTextBlock('date');
registerTextBlock('time');
registerTextBlock('month');
registerTextBlock('week');
registerTextBlock('color');
registerTextBlock('range');
