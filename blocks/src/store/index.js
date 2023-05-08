/**
 * WordPress dependencies
 */
import { createReduxStore, register } from '@wordpress/data';

/**
 * Internal dependencies
 */
import * as actions from './actions';
import reducer from './reducer';
import * as selectors from './selectors';

const STORE_NAME = 'hizzle/forms';

/**
 * Store definition for the hizzle forms store.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */
export const store = createReduxStore( STORE_NAME, {
	actions,
	reducer,
	selectors,
} );

register( store );
