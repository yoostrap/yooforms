/**
 * Internal dependencies
 */
import json from './block.json';
import edit from './edit';
import save from './save';
import registerHizzleBlockType from '../utils/register-block';

const { name } = json;

registerHizzleBlockType( name, {
	edit,
	save,
} );
