<?php
namespace Hizzle\Forms\Pro;

require_once HF_PATH . 'pro/src/functions.php';

class Hizzle_Forms_pro {
    /**
     * FooGallery_Pro constructor.
     */
    public function __construct() {
        if (is_admin()) {
            // Ensure that template.php and class-wp-list-table.php are loaded before the Entries class is used
            if (!function_exists('convert_to_screen')) {
                require_once ABSPATH . 'wp-admin/includes/template.php';
            }
            if (!class_exists('WP_List_Table')) {
                require_once ABSPATH . 'wp-admin/includes/class-wp-list-table.php';
            }

            new Entries();
            new Admin\Pro_Admin();
        }
    }
}