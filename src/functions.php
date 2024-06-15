<?php
/**
 * Hizzle Forms global functions.
 * 
 * @package Hizzle Forms
 * @since 1.0.0
 * @author Lewis Ushindi <lewis@zestplugins.com>
 * @link https://hizzle.co/forms
 * @license GPL-3.0-or-later
 * @copyright 2024 Hizzle Forms LLC
 */


// INACTIVE PAGE FOR NOW. WILL BE USED LATER ON IN THE COURSE FOR THE DASHBOARD PAGE.
/**
 * Renders the main menu page for the Hizzle Forms plugin.
 */
function hizzle_forms_page() {
    // Code to render the main menu page
}

/**
 * Renders the submenu page for the Hizzle Forms plugin help page.
 *
 * This function is responsible for rendering the submenu page that displays help information
 * for the Hizzle Forms plugin.
 *
 * @since 1.0.0
 */
function hizzle_forms_help_page() {
    // Code to render the submenu page
    require_once HF_PATH . 'src/views/view-help.php';
}

/**
 * Renders the submenu page for the Hizzle Forms plugin response page.
 *
 * This function is responsible for rendering the submenu page that displays forms responses
 * for the Hizzle Forms plugin.
 *
 * @since 1.0.0
 */
function hizzle_forms_responses_page() {
    // Code to render the submenu page
    require_once HF_PATH . 'src/views/view-responses.php';
}

/**
 * Returns the name of the plugin. (Allows the name to be overridden from extensions or functions.php)
 * @return string
 */
function hizzle_forms_plugin_name() {
	return apply_filters( 'hizzle_forms_plugin_name', 'Hizzle Forms' );
}

/**
 * Returns the top level menu slug for the plugin. (Allows the slug to be overridden from extensions or functions.php)
 * @return string
 */
function hizzle_forms_top_level_menu_slug() {
    return apply_filters( 'hizzle_forms_top_level_menu_slug', 'hizzle-forms' );
}

/**
 * Returns the dashicon for the plugin. (Allows the dashicon to be overridden from extensions or functions.php)
 * @return string
 */
function hizzle_forms_dashicons() {
    return apply_filters( 'hizzle_forms_dashicons', 'dashicons-feedback' );
}

/**
 * Returns the capability required to access the plugin. (Allows the capability to be overridden from extensions or functions.php)
 * @return string
 */
function hizzle_forms_menu_capability() {
    return apply_filters( 'hizzle_forms_menu_capability', 'manage_options' );
}

/**
 * Returns the version of the plugin.
 * @return string
 */
function hizzle_forms_get_version() {
    return HIZZLE_FORMS_VERSION;
}


/**
 * Helper function for adding a Hizlle forms submenu.
 *
 * @param string   $menu_title   The text to be displayed in the menu.
 * @param string   $capability   The capability required to access the menu.
 * @param string   $menu_slug    The slug name for the menu.
 * @param callable $function     The function to be called to display the submenu page.
 * 
 * @return void
 */
function hizzle_forms_add_submenu_page( $menu_title, $capability, $menu_slug, $function ) {
    add_submenu_page( 
        hizzle_forms_top_level_menu_slug(),
        $menu_title,
        $menu_title,
        apply_filters( 'hizzle_forms_menu_capability', $capability ),
        $menu_slug,
        $function
    );
}

/**
 * Converts a HTML label to a name attribute.
 *
 * @param string $label The label to convert.
 * @param string $fallback The fallback name.
 * @return string The name attribute.
 */
function hizzle_form_label_to_name( $label, $fallback = '' ) {
    if ( empty( $label ) ) {
        return $fallback;
    }

    // Strip HTML tags.
    $name = preg_replace( '/(<[^>]+>)/i', '', $label );

    // Replace all non-alphanumeric characters with underscores.
    $name = preg_replace( '/[^a-z0-9]/i', '_', $name );

    // Remove consecutive underscores.
    $name = preg_replace( '/_+/', '_', $name );

    // Remove underscores from the start and end.
    $name = trim( $name, '_' );

    // If the name is empty, use the fallback.
    if ( empty( $name ) ) {
        return $fallback;
    }

    return strtolower( $name );
}
