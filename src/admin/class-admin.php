<?php
namespace Hizzle\Forms\Admin;

/**
 * Contains the admin class.
 *
 * @since   1.0.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Admin Class.
 *
 */
class Admin {
	public function __construct() {
		add_action( 'admin_menu', array( $this, 'hizzle_forms_menu' ) );
	}

	public function hizzle_forms_menu() {
		add_menu_page(
			hizzle_forms_plugin_name(),
			hizzle_forms_plugin_name(),
			'manage_options',
			hizzle_forms_top_level_menu_slug(),
			'hizzle_forms_page',
			hizzle_forms_dashicons(),
			30 
		);
	
		add_submenu_page(
			hizzle_forms_top_level_menu_slug(),
			'Help',
			'Help',
			'manage_options',
			'hizzle-forms-help',
			'hizzle_forms_help_page'
		);

		add_submenu_page(
			hizzle_forms_top_level_menu_slug(),
			'Entries',
			'Entries',
			'manage_options',
			'hizzle-forms-entries',
			'hizzle_forms_responses_page'
		);
		remove_submenu_page( hizzle_forms_top_level_menu_slug(), hizzle_forms_top_level_menu_slug() );
	}
}
