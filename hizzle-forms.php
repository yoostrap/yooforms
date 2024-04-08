<?php
/**
 * Plugin Name: Hizzle Forms
 * Plugin URI: https://hizzle.co/forms
 * Description: A lightweight forms plugin.
 * Version: 1.0.1
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
	define( 'HIZZLE_FORMS_VERSION', '1.0.1' );
}

if ( ! defined( 'HIZZLE_FORMS_DB_VERSION' ) ) {
	define( 'HIZZLE_FORMS_DB_VERSION', 1 );
}

define( 'HF_PATH', plugin_dir_path( __FILE__ ) );
define( 'HF_ASSETS_URL', plugin_dir_url( __FILE__ ) . 'assets/' );
// Include the auto loader.
require 'vendor/autoload.php';

// Include necessary files.
require_once HF_PATH . 'includes/includes.php';
require_once HF_PATH . 'includes/functions.php';

if ( ! function_exists( 'hf_fs' ) ) {
    // Create a helper function for easy SDK access.
    function hf_fs() {
        global $hf_fs;

        if ( ! isset( $hf_fs ) ) {
            // Activate multisite network integration.
            if ( ! defined( 'WP_FS__PRODUCT_15381_MULTISITE' ) ) {
                define( 'WP_FS__PRODUCT_15381_MULTISITE', true );
            }

            // Include Freemius SDK.
            require_once dirname(__FILE__) . '/freemius/start.php';

            $hf_fs = fs_dynamic_init( array(
                'id'                  => '15381',
                'slug'                => 'hizzle-forms',
                'type'                => 'plugin',
                'public_key'          => 'pk_f965caeb7b47a4d6607381e3b3704',
                'is_premium'          => false,
                'has_addons'          => false,
                'has_paid_plans'      => false,
                'menu'                => array(
                    'slug'           => 'hizzle-forms',
                    'first-path'     => 'admin.php?page=hizzle-forms-help',
                    'network'        => true,
                ),
            ) );
        }

        return $hf_fs;
    }

    // Init Freemius.
    hf_fs();
    // Signal that SDK was initiated.
    do_action( 'hf_fs_loaded' );
}

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
