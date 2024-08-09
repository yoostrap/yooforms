<?php

/**
 * Renders the submenu page for the YooForms plugin response page.
 *
 * This function is responsible for rendering the submenu page that displays forms responses
 * for the YooForms plugin.
 *
 * @since 1.0.0
 */
function hizzle_forms_responses_page() {

    if ( ! current_user_can( 'manage_options' ) ) {
        return;
    }

    // Code to render the submenu page
    require_once HF_PATH . 'pro/src/views/view-entries.php';
}