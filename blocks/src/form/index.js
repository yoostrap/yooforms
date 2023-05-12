/**
 * External dependencies
 */
import { compact } from 'lodash';

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

	// Abort if not our block.
	if ( ! name.startsWith( 'hizzle-forms/' ) ) {
		return false;
	}

	if ( Array.isArray( innerBlocks ) && innerBlocks.length ) {
		prepared.innerBlocks = compact( innerBlocks.map( parseBlock ) );
	} else {
		prepared.innerBlocks = [];
	}

	return prepared;
}

/**
 * Parses the block list and returns an array of forms.
 *
 * @param {Array} blocks
 * @return {Array}
 */
function getForms( blocks ) {
	let forms = [];

	// Loop through all blocks.
	blocks.forEach( ( block ) => {

		// Add form or parse inner blocks.
		if ( block.name === 'hizzle-forms/form' ) {
			forms.push( parseBlock( block ) );
		} else if( Array.isArray( block.innerBlocks ) && block.innerBlocks.length ) {
			forms = forms.concat( getForms( block.innerBlocks ) );
		}
	} );

	return forms;
}

let syncingForms = false;

subscribe( () => {

	// Abort if we're already syncing.
	if ( syncingForms ) {
		return;
	}

	// Abort if no block editor.
	if ( ! select( 'core/block-editor' ) ) {
		return;
	}

	// Prepare additional data.
	const data = {};

	// Post editor.
	if ( select( 'core/editor' ) ) {

		// Fetch post selectors.
		const { isSavingPost, isAutosavingPost, getCurrentPostId } = select( 'core/editor' );

		// Don't save if this is an autosave.
		if ( ! isSavingPost() || isAutosavingPost() ) {
			return;
		}

		data.post_id = getCurrentPostId();

		// Site editor.
	} else if ( select( 'core/edit-site' ) ) {

		// Fetch post selectors.
		const { isSaveViewOpened, getEditedPostId } = select( 'core/editor' );

		if ( ! isSaveViewOpened() ) {
			return;
		}

		data.mode     = 'site';
		data.template = getEditedPostId();
		// TODO: Add checks for widget editor and site editor.
	} else {
		return;
	}

	// Get all forms.
	const forms = getForms( select( 'core/block-editor' ).getBlocks() );

	syncingForms = true;

	// Sync forms remotely.
	apiFetch( {
		path: '/hizzle/v1/forms/sync',
		method: 'POST',
		data: {
			...data,
			forms,
		},
	} ).finally( () => {
		syncingForms = false;
	});
});
