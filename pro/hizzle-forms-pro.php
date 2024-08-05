<?php
namespace Hizzle\Forms\Pro;

require_once HF_PATH . 'pro/src/functions.php';

class Hizzle_Forms_pro {
    /**
     * FooGallery_Pro constructor.
     */
    public function __construct() {
        if (is_admin()) {
            // Ensure that WP_List_Table is loaded before the Entries class is used
            if (!class_exists('WP_List_Table')) {
                require_once ABSPATH . 'wp-admin/includes/class-wp-list-table.php';
            }

            new Entries();
            new Admin\Pro_Admin();
        }
    }
}