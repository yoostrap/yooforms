<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$entriesTable = new \Hizzle\Forms\Response();
$entriesTable->prepare_items();
?>
<div class="wrap">
    <h1 class="wp-heading-inline"><?php esc_html_e('Form Entries', 'hizzle-forms'); ?></h1>
    <hr class="wp-header-end">
    <form method="post">
        <input type="hidden" name="page" value="hizzle-forms-entries">
        <?php $entriesTable->display(); ?>
    </form>
</div>
<?php
echo '<style>
.wrap .wp-heading-inline {
    margin-bottom: 15px;
}
.wp-list-table th, .wp-list-table td {
    padding: 10px;
}
.form-data-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}
.form-data-table th, .form-data-table td {
    border: 1px solid #ddd;
    padding: 8px;
}
.form-data-table th {
    background-color: #f4f4f4;
    text-align: left;
}
</style>';
?>
