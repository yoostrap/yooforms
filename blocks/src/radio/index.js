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

// Register the radio option block.
import './radio-option';

// Register the radio block.
const { name } = json;

registerBlockType( name, {
	edit,
	save,
} );
