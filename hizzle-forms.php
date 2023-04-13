<?php
/**
 * Plugin Name: Hizzle Forms
 * Plugin URI: https://hizzle.co/forms
 * Description: A lightweight forms plugin.
 * Version: 1.0.0
 * Author: Hizzle
 * Author URI: https://hizzle.co
 * Text Domain: hizzle-forms
 * Domain Path: /languages/
 * Requires at least: 5.5
 * Requires PHP: 7.0
 *
 */

defined( 'ABSPATH' ) || exit;

// Define constants.
if ( ! defined( 'HIZZLE_FORMS_PLUGIN_FILE' ) ) {
	define( 'HIZZLE_FORMS_PLUGIN_FILE', __FILE__ );
}

if ( ! defined( 'HIZZLE_FORMS_VERSION' ) ) {
	define( 'HIZZLE_FORMS_VERSION', '1.0.0' );
}

if ( ! defined( 'HIZZLE_FORMS_DB_VERSION' ) ) {
	define( 'HIZZLE_FORMS_DB_VERSION', 1 );
}

// Include the auto loader.
require 'vendor/autoload.php';

/**
 * Returns the main plugin instance.
 *
 * @since  1.0.0
 * @return Hizzle\Forms\Plugin
 */
function hizzle_forms() {
	return Hizzle\Forms\Plugin::instance();
}

// Kickstart the plugin.
hizzle_forms();
