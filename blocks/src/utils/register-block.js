/**
 * WordPress dependencies.
 */
import { registerBlockType } from '@wordpress/blocks';

const PRIMARY_COLOR = '#AA00FF';

/**
 * Registers a block type provided a unique name and an object defining its.
 *
 * @param {string} name     Block name.
 * @param {Object} settings Block settings.
 */
export default function registerHizzleBlockType( name, settings ) {

    // If the name is not prefixed with hizzle-forms, add it.
    if ( name.indexOf( 'hizzle-forms/' ) !== 0 ) {
        name = 'hizzle-forms/' + name;
    }

    console.log({name, settings})

    // If we have a string icon, add color.
    if ( typeof settings.icon === 'string' ) {
        settings.icon = {
            src: settings.icon,
            foreground: PRIMARY_COLOR,
        };
    }

    // Register the block.
    registerBlockType( name, settings );
}
