/**
 * WordPress dependencies
 */
import { store as blockEditorStore } from '@wordpress/block-editor';
import { serialize } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Returns a generator for saving a hizzle form.
 *
 * @param {Object} hizzleForm The hizzle form to save.
 * @param {string} id         The ID of the form to save.
 */
export const saveHizzleForm =
    ( clientId, id ) =>
    async ( { registry } ) => {

        const toSave = {
			title: title || __( 'Hizzle Forms', 'hizzle-forms' ),
			content: serialize(
				registry
					.select( blockEditorStore )
					.getBlocksByClientId( clientId )
			),
			status: 'publish',
		};

        if ( id ) {
            toSave.id = id;
        }

        const updatedRecord = await registry
            .dispatch( 'core' )
            .saveEntityRecord( 'postType', 'hizzle_form', toSave );

        if ( ! id ) {
            registry
                .dispatch( blockEditorStore )
                .resetBlocks( clientId );
        }
    
        return updatedRecord;
    };

/**
 * Returns a generator deleting a hizzle form.
 *
 * @param {string} id The ID of the form to delete.
 */
export const deleteHizzleForm =
	( id ) =>
	async ( { registry } ) => {
		const hizzleForm = registry
			.select( 'core' )
			.getEditedEntityRecord( 'postType', 'hizzle_form', id );

		// Don't allow a form with a temporary ID to be deleted.
		if ( ! hizzleForm ) {
			return;
		}

		await registry
			.dispatch( 'core' )
			.deleteEntityRecord( 'postType', 'hizzle_form', id );
	};

/**
 * Returns an action descriptor for SET_EDITING_HIZZLE_FORM action.
 *
 * @param {string}  clientId  The clientID of the form to target.
 * @param {boolean} isEditing Whether the block should be in editing state.
 * @return {Object} Action descriptor.
 */
export function setEditingHizzleForm( clientId, isEditing ) {
	return {
		type: 'SET_EDITING_HIZZLE_FORM',
		clientId,
		isEditing,
	};
}