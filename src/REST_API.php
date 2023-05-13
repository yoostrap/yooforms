<?php

namespace Hizzle\Forms;

/**
 * REST API controller for forms.
 *
 * @version 1.0.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * REST API controller for forms.
 */
class REST_API extends \WP_REST_Controller {

	/**
	 * Loads the class.
	 *
	 */
	public function __construct() {
		$this->namespace = 'hizzle/v1';
		$this->rest_base = 'forms';

		// Register rest routes.
        $this->register_routes();
	}

	/**
	 * Registers REST routes.
	 *
	 * @since 1.0.0
	 */
	public function register_routes() {

		// Send a POST to /hizzle/v1/forms/sync to sync forms.
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/sync',
			array(
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'sync_forms' ),
					'permission_callback' => array( $this, 'can_sync_forms' ),
					'args'                => array(),
				),
			)
		);

		// Send a POST to /hizzle/v1/forms/submit/{form_id} to submit a form.
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/submit/(?P<form_id>[\w\-\.]+)',
			array(
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'process_form_submission' ),
					'permission_callback' => array( $this, 'can_submit_form' ),
					'args'                => array(),
				),
			)
		);
	}

	/**
	 * Checks if the current user can sync forms.
	 *
	 * @param \WP_REST_Request $request Full details about the request.
	 * @return \WP_REST_Response|\WP_Error Response object on success, or WP_Error object on failure.
	 */
	public function can_sync_forms( $request ) {

		// If we have a post ID, check if the user can edit it.
		if ( ! empty( $request['post_id'] ) ) {
			if ( ! current_user_can( 'edit_post', $request['post_id'] ) ) {
				return new \WP_Error( 'hizzle_rest_cannot_sync_forms', 'Sorry, you cannot sync forms.', array( 'status' => rest_authorization_required_code() ) );
			}
		}

		// Ensure the user is an editor or higher.
		if ( ! current_user_can( 'edit_theme_options' ) ) {
			return new \WP_Error( 'hizzle_rest_cannot_sync_forms', 'Sorry, you cannot sync forms.', array( 'status' => rest_authorization_required_code() ) );
		}

		return true;
	}

	/**
	 * Syncs forms.
	 *
	 * @param \WP_REST_Request $request Full details about the request.
	 * @return \WP_REST_Response|\WP_Error Response object on success, or WP_Error object on failure.
	 */
	public function sync_forms( $request ) {

		wp_remove_targeted_link_rel_filters();

		// If we have a post ID, the forms are children of the post.
		if ( ! empty( $request['post_id'] ) ) {
			return rest_ensure_response( $this->sync_post_forms( $request['post_id'], $request['forms'] ) );
		}

		// If we are in the site editor, the forms don't need a parent.
		if ( ! empty( $request['mode'] ) && 'site' === $request['mode'] ) {
			return rest_ensure_response( $this->sync_template_forms( $request['template'], $request['forms'] ) );
		}
	}

	/**
	 * Key forms by instance ID.
	 *
	 * @param array $forms The post's forms.
	 * @return array The keyed forms.
	 */
	private function key_forms( $forms ) {

		// Key forms by instance ID.
		$grouped_forms = array();

		// Loop through the forms.
		foreach ( $forms as $form ) {

			// If the form doesn't have an instance ID, skip it.
			if ( empty( $form['attributes']['instanceID'] ) ) {
				continue;
			}

			// Add the form to the grouped forms.
			$grouped_forms[ $form['attributes']['instanceID'] ] = $form;
		}

		return $grouped_forms;
	}

	/**
	 * Deletes/updates existing forms.
	 *
	 * @param array $all_forms All forms.
	 * @param array $saved_forms  An instanceID => formID array.
	 * @param int $parent_id The parent post ID.
	 * @return array An instanceID => formID array.
	 */
	private function save_forms( $all_forms, $saved_forms, $parent_id = 0 ) {

		// Key forms by instance ID.
		$all_forms = $this->key_forms( $all_forms );
		$new_forms = array();

		foreach ( $saved_forms as $instance_id => $form_id ) {

			// Delete the form if it's not in the grouped forms.
			if ( ! isset( $all_forms[ $instance_id ] ) ) {
				wp_delete_post( $form_id, true );
				continue;
			}

			// Update the form.
			wp_update_post(
				wp_slash(
					array(
						'ID'           => $form_id,
						'post_title'   => $all_forms[ $instance_id ]['attributes']['title'],
						'post_name'    => $all_forms[ $instance_id ]['attributes']['instanceID'],
						'post_content' => wp_json_encode( $all_forms[ $instance_id ] ),
						'post_status'  => 'publish',
					)
				)
			);

			// Remove the form from the grouped forms.
			unset( $all_forms[ $instance_id ] );

			// Add the form to the new forms.
			$new_forms[ $instance_id ] = $form_id;
		}

		// Create new forms.
		foreach ( $all_forms as $instance_id => $form ) {

			// Create the form.
			$result = wp_insert_post(
				wp_slash(
					array(
						'post_title'   => $form['attributes']['title'],
						'post_name'    => $instance_id,
						'post_content' => wp_json_encode( $form ),
						'post_parent'  => $parent_id,
						'post_type'    => 'hizzle_form',
						'post_status'  => 'publish',
					)
				)
			);

			// If the form was created, add it to the new forms.
			if ( ! is_wp_error( $result ) && ! empty( $result ) ) {
				$new_forms[ $instance_id ] = $result;
			}
		}

		return $new_forms;
	}

	/**
	 * Syncs forms.
	 *
	 * @param int $post_id The post ID.
	 * @param array $forms The post's forms.
	 */
	private function sync_post_forms( $post_id, $forms ) {

		// Ensure we have an array.
		if ( ! is_array( $forms ) ) {
			$forms = array();
		}

		// Get the post.
		$post = get_post( $post_id );

		// If the post doesn't exist, return an error.
		if ( ! $post ) {
			return new \WP_Error( 'hizzle_rest_post_not_found', 'Sorry, the post could not be found.', array( 'status' => 404 ) );
		}

		// Get current forms.
		$current_forms = get_children(
			array(
				'post_parent' => $post->ID,
				'post_type'   => 'hizzle_form',
				'post_status' => 'any',
			)
		);

		return $this->save_forms(
			$forms,
			wp_list_pluck( $current_forms, 'ID', 'post_name' ),
			$post->ID
		);

	}

	/**
	 * Syncs forms added via the site editor (for block themes).
	 *
	 * @param string $template The template.
	 * @param array $forms The template's forms.
	 */
	private function sync_template_forms( $template, $forms ) {

		// Ensure we have an array.
		if ( ! is_array( $forms ) ) {
			$forms = array();
		}

		// Get current forms.
		$saved_forms = get_option( 'hizzle_forms_' . $template, array() );
		$saved_forms = is_array( $saved_forms ) ? $saved_forms : array();
		$new_forms   = $this->save_forms( $forms, $saved_forms, 0 );

		if ( empty( $new_forms ) ) {
			delete_option( 'hizzle_forms_' . $template );
		} else {
			update_option( 'hizzle_forms_' . $template, $new_forms, false );
		}
	}

	/**
	 * Checks if the current user can submit the given form.
	 *
	 * @param \WP_REST_Request $request Full details about the request.
	 * @return \WP_REST_Response|\WP_Error Response object on success, or WP_Error object on failure.
	 */
	public function can_submit_form( $request ) {

		// Abort if the form ID is not set.
		if ( empty( $request['form_id'] ) ) {
			return new \WP_Error( 'hizzle_rest_form_id_not_set', 'Sorry, the form ID is not set.', array( 'status' => 400 ) );
		}

		// Fetch the form. Form ID is the form name.
		$form = new Form( $request['form_id'] );

		// Abort if the form doesn't exist.
		if ( ! $form->exists() ) {
			return new \WP_Error( 'hizzle_rest_form_not_found', 'Sorry, the form could not be found.', array( 'status' => 404 ) );
		}

		// Prepare the submission.
		$plugin = Plugin::instance();

		$plugin->submission->form            = $form;
		$plugin->submission->submission_page = $request['hizzle_conversion_page'];
		$plugin->submission->referrer		 = $request['hizzle_referrer'];
		$plugin->submission->time_to_submit  = intval( $request['hizzle_time_to_submit'] );
		$plugin->submission->data            = $request['hizzle-forms'];
		$plugin->submission->raw             = $request->get_params();

		return true;
	}

	/**
	 * Processes a form submission.
	 */
	public function process_form_submission() {
		return rest_ensure_response( Plugin::instance()->submission->process() );
	}
}
