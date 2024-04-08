<?php
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

if ( ! defined( 'HF_PATH' ) ) {
    define( 'HF_PATH', plugin_dir_path( __FILE__ ) );
}

if ( ! defined( 'HF_ASSETS_URL' ) ) {
    define( 'HF_ASSETS_URL', plugin_dir_url( __FILE__ ) . 'assets/' );
}
