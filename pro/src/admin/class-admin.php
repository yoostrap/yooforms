<?php
namespace Hizzle\Forms\Pro\Admin;

/**
 * Contains the pro admin class.
 *
 * @since   1.0.5
 */

defined( 'ABSPATH' ) || exit;

/**
 * Pro Admin Class.
 *
 */
class Pro_Admin {
	public function __construct() {
		add_action( 'admin_menu', array( $this, 'hizzle_forms_pro_menu' ) );
	}

	public function hizzle_forms_pro_menu() {
		hizzle_forms_add_submenu_page(
            'Entries',
            'manage_options',
            'hizzle-forms-entries',
            'hizzle_forms_responses_page'
        );
	}
}
