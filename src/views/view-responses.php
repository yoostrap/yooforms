<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
global $wpdb;
$table_name = $wpdb->prefix . 'hizzle_forms_responses';

// Check if the table exists
if ($wpdb->get_var("SHOW TABLES LIKE '$table_name'") != $table_name) {
    echo '<h1>' . esc_html__('Form Entries', 'hizzle-forms') . '</h1>';
    echo '<p>' . esc_html__('The entries table does not exist. Please ensure the plugin is activated correctly.', 'hizzle-forms') . '</p>';
    return;
}

$results = $wpdb->get_results("SELECT * FROM $table_name", OBJECT);

echo '<div class="wrap">';
echo '<h1 class="wp-heading-inline">' . esc_html__('Form Entries', 'hizzle-forms') . '</h1>';
echo '<hr class="wp-header-end">';

echo '<table class="wp-list-table widefat fixed striped table-view-list">
    <thead>
        <tr>
            <th scope="col" class="manage-column column-id">' . esc_html__('ID', 'hizzle-forms') . '</th>
            <th scope="col" class="manage-column column-form-id">' . esc_html__('Form ID', 'hizzle-forms') . '</th>
            <th scope="col" class="manage-column column-submission-time">' . esc_html__('Submission Time', 'hizzle-forms') . '</th>
            <th scope="col" class="manage-column column-form-data">' . esc_html__('Form Data', 'hizzle-forms') . '</th>
        </tr>
    </thead>
    <tbody>';

if (empty($results)) {
    echo '<tr>';
    echo '<td colspan="4">' . esc_html__('No form entries found.', 'hizzle-forms') . '</td>';
    echo '</tr>';
} else {
    foreach ($results as $response) {
        $form_data = maybe_unserialize($response->form_data);
        echo '<tr>';
        echo '<td class="column-id">' . esc_html($response->id) . '</td>';
        echo '<td class="column-form-id">' . esc_html($response->form_id) . '</td>';
        echo '<td class="column-submission-time">' . esc_html($response->submission_time) . '</td>';
        echo '<td class="column-form-data">';
        if (is_array($form_data) && !empty($form_data)) {
            echo '<table class="form-data-table">';
            foreach ($form_data as $key => $value) {
                echo '<tr>';
                echo '<th>' . esc_html(ucfirst(str_replace('_', ' ', $key))) . '</th>';
                echo '<td>' . esc_html($value) . '</td>';
                echo '</tr>';
            }
            echo '</table>';
        } else {
            echo '<pre>' . esc_html($form_data) . '</pre>';
        }
        echo '</td>';
        echo '</tr>';
    }
}

echo '</tbody>
</table>';
echo '</div>';

// Add some CSS to style the inner table
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
