<?php
namespace Hizzle\Forms;

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

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'admin_menu', array( $this, 'hizzle_forms_menu' ) );
	}

	/**
	 * Creates the menu and submenu pages for the Hizzle Forms plugin.
	 *
	 * @return void
	 */
	public function hizzle_forms_menu() {
		// Add top-level menu page
		add_menu_page(
			__( hizzle_forms_plugin_name(), 'hizzle-forms' ),
			__( hizzle_forms_plugin_name(), 'hizzle-forms' ),
			hizzle_forms_menu_capability(),
			hizzle_forms_top_level_menu_slug(),
			'hizzle_forms_page',
			hizzle_forms_dashicons(),
			30
		);

		// Add help submenu page
		add_submenu_page(
			hizzle_forms_top_level_menu_slug(),
			__( hizzle_forms_help_menu_name(), 'hizzle-forms' ),
			__( hizzle_forms_help_menu_name(), 'hizzle-forms' ),
			hizzle_forms_menu_capability(),
			hizzle_forms_help_menu_slug(),
			'hizzle_forms_help_page'
		);

		// Add forms submenu page
		add_submenu_page(
			hizzle_forms_top_level_menu_slug(),
			__( hizzle_forms_forms_menu_name(), 'hizzle-forms' ),
			__( hizzle_forms_forms_menu_name(), 'hizzle-forms' ),
			hizzle_forms_menu_capability(),
			hizzle_forms_forms_menu_slug(),
			array( $this, 'display_all_forms_table' ) // Call the method from Admin_Forms class
		);

		// Remove duplicate top-level menu page
		remove_submenu_page( hizzle_forms_top_level_menu_slug(), hizzle_forms_top_level_menu_slug() );
	}
	
	/**
	 * Display all forms in a table format.
	 */
	public function display_all_forms_table() {
		// Instantiate Admin_Forms class
		$admin_forms = new Admin_Forms();
		$admin_forms->prepare_items();
		?>
		<div class="wrap">
			<h1><?php esc_html_e( hizzle_forms_plugin_name(), 'hizzle-forms' ); ?></h1>
			<?php $admin_forms->display(); ?>
		</div>
		<?php
	}
	

}

new Admin();
