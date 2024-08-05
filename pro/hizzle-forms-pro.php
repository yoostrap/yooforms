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
        }
    }
}