/**
 * WordPress dependencies.
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import json from './block.json';
import edit from './edit';
import save from './save';
import variations from './variations';
import './register-text-blocks';

// Register the submit button block.
import './submit-button';

const { name } = json;

registerBlockType( name, {
	edit,
	save,
    variations,
} );
