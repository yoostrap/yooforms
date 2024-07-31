<?php
if (!defined('ABSPATH')) {
    exit;
}

$forms = get_posts([
    'post_type' => 'hizzle_form',
    'posts_per_page' => -1,
]);

$selected_form_id = isset($_GET['form_id']) ? intval($_GET['form_id']) : 0;

$entriesTable = new \Hizzle\Forms\Pro\Entries($selected_form_id);
$entriesTable->prepare_items();
?>
<div class="wrap">
    <h1 class="wp-heading-inline"><?php esc_html_e('Form Entries', 'hizzle-forms'); ?></h1>
    <hr class="wp-header-end">
    <form method="get">
        <input type="hidden" name="page" value="hizzle-forms-entries">
        <label for="form_id"><?php esc_html_e('Select Form', 'hizzle-forms'); ?>:</label>
        <select name="form_id" id="form_id" onchange="this.form.submit();">
            <option value=""><?php esc_html_e('All Forms', 'hizzle-forms'); ?></option>
            <?php foreach ($forms as $form) : ?>
                <option value="<?php echo esc_attr($form->ID); ?>" <?php selected($selected_form_id, $form->ID); ?>>
                    <?php echo esc_html($form->post_title); ?>
                </option>
            <?php endforeach; ?>
        </select>
    </form>
    <form method="post">
        <input type="hidden" name="page" value="hizzle-forms-entries">
        <?php $entriesTable->display(); ?>
    </form>
</div>
<?php
echo '<style>
    .wrap .wp-heading-inline { margin-bottom: 15px; }
    .wp-list-table th, .wp-list-table td { padding: 10px; }
    .form-data-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    .form-data-table th, .form-data-table td { border: 1px solid #ddd; padding: 8px; }
    .form-data-table th { background-color: #f4f4f4; text-align: left; }
</style>';
?>
