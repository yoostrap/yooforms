<?php
namespace Hizzle\Forms\Pro;

defined('ABSPATH') || exit;

class Entries {
    private $form_id;
    private $items;

    public function __construct($form_id = 0) {
        $this->form_id = $form_id;
    }

    public static function get_entries($form_id = 0, $per_page = 10, $page_number = 1, $status = 'active') {
        global $wpdb;
        $responses_table = $wpdb->prefix . 'hizzle_forms_responses';
        $posts_table = $wpdb->prefix . 'posts';

        $sql = "SELECT r.*, p.post_title as form_name 
                FROM $responses_table r 
                LEFT JOIN $posts_table p 
                ON r.form_id = p.ID 
                WHERE p.post_type = 'hizzle_form' AND r.status = %s";

        $sql = $wpdb->prepare($sql, $status);

        if ($form_id) {
            $sql .= $wpdb->prepare(' AND r.form_id = %d', $form_id);
        }

        if (!empty($_REQUEST['orderby'])) {
            $sql .= ' ORDER BY ' . esc_sql($_REQUEST['orderby']);
            $sql .= !empty($_REQUEST['order']) ? ' ' . esc_sql($_REQUEST['order']) : ' ASC';
        }

        $sql .= " LIMIT $per_page";
        $sql .= ' OFFSET ' . ($page_number - 1) * $per_page;

        return $wpdb->get_results($sql, 'ARRAY_A');
    }

    public function get_columns() {
        $columns = [
            'form_id'         => __('Form ID', 'hizzle-forms'),
            'form_name'       => __('Form Name', 'hizzle-forms'),
            'submission_time' => __('Submission Time', 'hizzle-forms')
        ];

        if ($this->form_id) {
            $form_entries = self::get_entries($this->form_id);
            if (!empty($form_entries)) {
                $form_data = maybe_unserialize($form_entries[0]['form_data']);
                if (is_array($form_data)) {
                    foreach ($form_data as $key => $value) {
                        $columns[$key] = esc_html(ucfirst(str_replace('_', ' ', $key)));
                    }
                }
            }
        }

        return $columns;
    }

    public function prepare_items() {
        $per_page = 10;
        $current_page = $this->get_pagenum();
        $total_items = self::record_count();

        $this->items = self::get_entries($this->form_id, $per_page, $current_page);
        $this->set_pagination_args($total_items, $per_page);
    }

    public static function record_count($status = 'active') {
        global $wpdb;
        $table_name = $wpdb->prefix . 'hizzle_forms_responses';
        $sql = $wpdb->prepare("SELECT COUNT(*) FROM $table_name WHERE status = %s", $status);
        return $wpdb->get_var($sql);
    }

    public function display() {
        $columns = $this->get_columns();
        $this->prepare_items();

        echo '<table class="wp-list-table widefat fixed striped">';
        echo '<thead><tr>';
        foreach ($columns as $column_key => $column_display_name) {
            echo '<th scope="col">' . esc_html($column_display_name) . '</th>';
        }
        echo '<th scope="col">' . __('Actions', 'hizzle-forms') . '</th>';
        echo '</tr></thead>';

        echo '<tbody>';
        if (empty($this->items)) {
            echo '<tr><td colspan="' . (count($columns) + 1) . '">' . __('No entries found.', 'hizzle-forms') . '</td></tr>';
        } else {
            foreach ($this->items as $item) {
                echo '<tr>';
                foreach ($columns as $column_key => $column_display_name) {
                    if (in_array($column_key, ['form_id', 'form_name', 'submission_time'])) {
                        echo '<td>' . esc_html($item[$column_key]) . '</td>';
                    } else {
                        $form_data = maybe_unserialize($item['form_data']);
                        echo '<td>' . (isset($form_data[$column_key]) ? esc_html($form_data[$column_key]) : '') . '</td>';
                    }
                }
                echo '<td><a href="' . esc_url(add_query_arg(['action' => 'trash', 'entry' => $item['id'], '_wpnonce' => wp_create_nonce('trash_entry')])) . '" class="trash-entry">' . __('Trash', 'hizzle-forms') . '</a></td>';
                echo '</tr>';
            }
        }
        echo '</tbody>';

        echo '<tfoot><tr>';
        foreach ($columns as $column_key => $column_display_name) {
            echo '<th scope="col">' . esc_html($column_display_name) . '</th>';
        }
        echo '<th scope="col">' . __('Actions', 'hizzle-forms') . '</th>';
        echo '</tr></tfoot>';
        echo '</table>';
    }

    public function get_pagenum() {
        $pagenum = isset($_REQUEST['paged']) ? absint($_REQUEST['paged']) : 0;
        if (empty($pagenum)) {
            $pagenum = 1;
        }
        return $pagenum;
    }

    public function set_pagination_args($total_items, $per_page) {
        $total_pages = ceil($total_items / $per_page);

        echo '<div class="tablenav">';
        echo '<div class="tablenav-pages">';
        echo '<span class="displaying-num">' . sprintf(_n('%s item', '%s items', $total_items, 'hizzle-forms'), number_format_i18n($total_items)) . '</span>';
        echo paginate_links([
            'base' => add_query_arg('paged', '%#%'),
            'format' => '',
            'prev_text' => __('&laquo;'),
            'next_text' => __('&raquo;'),
            'total' => $total_pages,
            'current' => $this->get_pagenum(),
        ]);
        echo '</div>';
        echo '</div>';
    }

    public function get_sortable_columns() {
        return [
            'form_id'         => ['form_id', true],
            'form_name'       => ['form_name', false],
            'submission_time' => ['submission_time', false]
        ];
    }

    public static function trash_entry($id) {
        global $wpdb;
        $table_name = $wpdb->prefix . 'hizzle_forms_responses';
        $wpdb->update($table_name, ['status' => 'trashed'], ['id' => $id], ['%s'], ['%d']);
    }
}

