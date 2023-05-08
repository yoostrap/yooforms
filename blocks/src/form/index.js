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
import { subscribe, select } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';

// Register the submit button block.
import './submit-button';

const { name } = json;

registerHizzleBlockType( name, {
	edit,
	save,
	//variations,
	icon: Logo,
} );

/**
 * Parses a block. and returns name, attributes, and innerBlocks.
 *
 * @param {Object} block
 * @return {Object}
 */
function parseBlock( block ) {
	const { attributes, innerBlocks, name } = block;
	const prepared = { name, attributes };

	if ( Array.isArray( innerBlocks ) && innerBlocks.length ) {
		prepared.innerBlocks = innerBlocks.map( parseBlock );
	} else {
		prepared.innerBlocks = [];
	}

	return prepared;
}

subscribe( () => {

	// Fetch post selectors.
	const { isSavingPost, isAutosavingPost, getCurrentPostId } = select( 'core/editor' );

	// Don't save if this is an autosave.
	if ( ! isSavingPost() || isAutosavingPost() ) {
		return;
	}

	// Fetch block editor selectors.
	const { getBlocks } = select( 'core/block-editor' );

	// Get the current post ID.
	const postId = getCurrentPostId();
	const forms  = [];

	// Loop through all blocks.
	getBlocks().forEach( ( block ) => {

		// Abort if not a form.
		if ( block.name !== 'hizzle-forms/form' ) {
			return;
		}

		forms.push( parseBlock( block ) );
	} );

	// Sync forms remotely.
	apiFetch( {
		path: `/hizzle-forms/v1/forms/${ postId }`,
		method: 'POST',
		data: {
			forms,
		},
	} );
});
