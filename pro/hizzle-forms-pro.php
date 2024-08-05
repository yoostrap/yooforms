<?php
namespace Hizzle\Forms\Pro;

require_once HF_PATH . 'pro/src/functions.php';

class Hizzle_Forms_pro {
    public function __construct() {
        add_action('admin_init', function() {
            new Entries();
        });
        new Admin\Pro_Admin();
    }
}
