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

// Register the checkbox block.
const { name } = json;

registerBlockType( name, {
	edit,
	save,
	variations,
} );
