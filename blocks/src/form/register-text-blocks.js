/**
 * WordPress dependencies.
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { TextFieldEdit, TextFieldSave } from '../components/text-field';

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
    var autocomplete = false;
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
        edit: TextFieldEdit(inputType),
        save: TextFieldSave(inputType, autocomplete),
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
