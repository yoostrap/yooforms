/**
 * Internal dependencies
 */
import './style.scss';
import json from './block.json';
import edit from './edit';
import save from './save';
import variations from './variations';
import Logo from '../components/logo';
import registerHizzleBlockType from '../utils/register-block';
import { store } from '../store';

// Register the submit button block.
import './submit-button';

const { name } = json;

registerHizzleBlockType( name, {
	edit,
	save,
    //variations,
	icon: Logo,
} );
