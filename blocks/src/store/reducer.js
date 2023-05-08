/**
 * WordPress dependencies
 */
import { combineReducers } from '@wordpress/data';

export function isEditingHizzleForm( state = {}, action ) {
	if ( action?.type === 'SET_EDITING_HIZZLE_FORM' ) {
		return {
			...state,
			[ action.clientId ]: action.isEditing,
		};
	}

	return state;
}

export default combineReducers( {
	isEditingHizzleForm,
} );
