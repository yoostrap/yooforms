<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
global $wpdb;
$table_name = $wpdb->prefix . 'hizzle_forms_responses';

// Check if the table exists
if ($wpdb->get_var("SHOW TABLES LIKE '$table_name'") != $table_name) {
    echo '<h1>Form Responses</h1>';
    echo '<p>The responses table does not exist. Please ensure the plugin is activated correctly.</p>';
    return;
}

$results = $wpdb->get_results("SELECT * FROM $table_name", OBJECT);

echo '<h1>Form Responses</h1>';
echo '<table class="widefat fixed" cellspacing="0">
    <thead>
        <tr>
            <th id="columnname" class="manage-column column-columnname" scope="col">ID</th>
            <th id="columnname" class="manage-column column-columnname" scope="col">Form ID</th>
            <th id="columnname" class="manage-column column-columnname" scope="col">Submission Time</th>
            <th id="columnname" class="manage-column column-columnname" scope="col">Form Data</th>
        </tr>
    </thead>
    <tbody>';

foreach ($results as $response) {
    $form_data = maybe_unserialize($response->form_data);
    echo '<tr>';
    echo '<td>' . esc_html($response->id) . '</td>';
    echo '<td>' . esc_html($response->form_id) . '</td>';
    echo '<td>' . esc_html($response->submission_time) . '</td>';
    echo '<td>';
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

echo '</tbody></table>';

// Add some CSS to style the inner table
echo '<style>
    .form-data-table {
        width: 100%;
        border-collapse: collapse;
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
