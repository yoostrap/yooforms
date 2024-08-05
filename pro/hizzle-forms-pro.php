<?php
namespace Hizzle\Forms\Pro;

require_once HF_PATH . 'pro/src/functions.php';

class Hizzle_Forms_pro {
    /**
     * FooGallery_Pro constructor.
     */
    public function __construct() {
        if (is_admin()) {
            new Entries();
            new Admin\Pro_Admin();
            // Ensure required files are loaded through appropriate hooks
            add_action('admin_init', [$this, 'load_wp_admin_includes']);
        }
    }
    public function load_wp_admin_includes() {
        if (!function_exists('convert_to_screen')) {
            require_once ABSPATH . 'wp-admin/includes/template.php';
        }

        if (!class_exists('WP_List_Table')) {
            require_once ABSPATH . 'wp-admin/includes/class-wp-list-table.php';
        }
    }
}