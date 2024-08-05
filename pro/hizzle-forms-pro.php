<?php
namespace Hizzle\Forms\Pro;

require_once HF_PATH . 'pro/src/functions.php';

class Hizzle_Forms_pro {
    /**
     * FooGallery_Pro constructor.
     */
    public function __construct() {
        if (is_admin()) {
           // Include necessary WordPress admin files
            add_action('admin_init', function() {
                if (!class_exists('WP_List_Table')) {
                    require_once ABSPATH . 'wp-admin/includes/class-wp-list-table.php';
                }
                if (!function_exists('convert_to_screen')) {
                    require_once ABSPATH . 'wp-admin/includes/template.php';
                }
            });

            new Entries();
            new Admin\Pro_Admin();
        }
    }
}