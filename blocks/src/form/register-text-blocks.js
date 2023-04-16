/**
 * WordPress dependencies.
 */
import { withInstanceId } from '@wordpress/compose';
import { useEffect } from '@wordpress/element';
import { createBlock } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import WithEditWrapper from '../components/with-edit-wrapper';
import WithSaveWrapper from '../components/with-save-wrapper';
import registerHizzleBlockType from '../utils/register-block';
import inputTypes from '../utils/input-types';

// Create an array of transforms for all input types.
const transforms = inputTypes.map( ({type}) => ({
    type: 'block',
    blocks: [ `hizzle-forms/${type}` ],
    transform: attributes => createBlock( `hizzle-forms/${type}`, attributes ),
}));

// Loop through all input types and register a block for each.
inputTypes.forEach( (metadata) => {

    const { type, inputType, autocomplete, icon, parent, ...extra } = metadata;

    registerHizzleBlockType(`hizzle-forms/${type}`, {

        // The block icon.
        icon,

        // Block attributes.
        attributes: {
            label: {
                type: "string",
                default: ""
            },
            required: {
                type: "boolean",
                default: false,
            },
            help: {
                type: "string",
                default: "",
            },
            placeholder: {
                type: "string",
                default: ""
            },
            instanceID: {
                type: "string",
                default: ""
            }
        },

        // The edit component.
        edit: withInstanceId( ( {attributes, setAttributes, clientId} ) => {

            // Reset instance ID once.
            useEffect( () => {
                if ( ! attributes.instanceID ) {
                    setAttributes( { instanceID: clientId } );
                }
            }, [] );

            return (
                <WithEditWrapper attributes={attributes} setAttributes={setAttributes}>
                    <input type={ inputType } className="hizzle-forms__field-input form-control" placeholder={ attributes.placeholder } readOnly />
                </WithEditWrapper>
            );
        }),

        // The save component.
        save ( props ) {
            const instanceID = props.attributes.instanceID || '';
            const placeholder = props.attributes.placeholder || '';
            console.log( props.attributes );
            return (
                <WithSaveWrapper {...props}>
                    <input type={ inputType } name={`hizzle-forms[${instanceID}]`} id={`hizzle-forms-field-${instanceID}`} className="hizzle-forms__field-input form-control" placeholder={ placeholder } autoComplete={ autocomplete } />
                </WithSaveWrapper>
            );
        },

        // Supports.
        supports: {
            anchor: true,
            spacing: {
                margin: true,
                padding: true
            },
            reusable: false,
		    html: false,
        },

        // Transforms.
        transforms: {
            to: transforms,
        },

        // Block metadata.
        ancestor: [ 'hizzle-forms/form' ],
        version: '1.0.0',
        textdomain: 'hizzle-forms',
        category: 'hizzle-forms',
        keywords: [ 'text', 'input', type, inputType, icon ],
        "$schema": 'https://schemas.wp.org/trunk/block.json',
        apiVersion: 2,
        ...extra
    });
} );
