<?php
namespace Hizzle\Forms\Pro;

defined('ABSPATH') || exit;

class Entries extends \WP_List_Table {
    private $form_id;

    public function __construct($form_id = 0) {
        $this->form_id = $form_id;

        parent::__construct([
            'singular' => __('Form Entry', 'hizzle-forms'),
            'plural'   => __('Form Entries', 'hizzle-forms'),
            'ajax'     => false
        ]);
    }

    public static function get_entries($form_id = 0, $per_page = 10, $page_number = 1) {
        global $wpdb;
        $responses_table = $wpdb->prefix . 'hizzle_forms_responses';
        $posts_table = $wpdb->prefix . 'posts';

        $sql = "SELECT r.*, p.post_title as form_name 
                FROM $responses_table r 
                LEFT JOIN $posts_table p 
                ON r.form_id = p.ID 
                WHERE p.post_type = 'hizzle_form'";

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
            // 'cb'              => '<input type="checkbox" />',
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

    public function column_default($item, $column_name) {
        if (in_array($column_name, ['form_id', 'form_name', 'submission_time'])) {
            return $item[$column_name];
        }

        $form_data = maybe_unserialize($item['form_data']);
        return isset($form_data[$column_name]) ? esc_html($form_data[$column_name]) : '';
    }

    public function prepare_items() {
        $this->process_bulk_action();

        $columns = $this->get_columns();
        $hidden = [];
        $sortable = $this->get_sortable_columns();

        $this->_column_headers = [$columns, $hidden, $sortable];

        $per_page = $this->get_items_per_page('entries_per_page', 10);
        $current_page = $this->get_pagenum();
        $total_items = self::record_count();

        $this->set_pagination_args([
            'total_items' => $total_items,
            'per_page'    => $per_page
        ]);

        $this->items = self::get_entries($this->form_id, $per_page, $current_page);
    }

    public function get_sortable_columns() {
        return [
            'form_id'         => ['form_id', true],
            'form_name'       => ['form_name', false],
            'submission_time' => ['submission_time', false]
        ];
    }

    public static function delete_entry($id) {
        global $wpdb;
        $table_name = $wpdb->prefix . 'hizzle_forms_responses';
        $wpdb->delete($table_name, ['id' => $id], ['%d']);
    }

    public static function record_count() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'hizzle_forms_responses';
        return $wpdb->get_var("SELECT COUNT(*) FROM $table_name");
    }

    public function process_bulk_action() {
        if ('delete' === $this->current_action()) {
            $nonce = esc_attr($_REQUEST['_wpnonce']);
            if (!wp_verify_nonce($nonce, 'sp_delete_entry')) {
                die('Go get a life script kiddies');
            } else {
                self::delete_entry(absint($_GET['entry']));
                wp_redirect(esc_url(add_query_arg()));
                exit;
            }
        }

        if ((isset($_POST['action']) && $_POST['action'] == 'bulk-delete') || (isset($_POST['action2']) && $_POST['action2'] == 'bulk-delete')) {
            $delete_ids = esc_sql($_POST['bulk-delete']);
            foreach ($delete_ids as $id) {
                self::delete_entry($id);
            }
            wp_redirect(esc_url(add_query_arg()));
            exit;
        }
    }

    protected function column_cb($item) {
        return sprintf(
            '<input type="checkbox" name="bulk-delete[]" value="%s" />', $item['id']
        );
    }

    public function display() {
        $this->display_tablenav('top');
        echo '<table class="wp-list-table ' . implode(' ', $this->get_table_classes()) . '">';
        $this->print_column_headers();
        echo '<tbody id="the-list">';
        $this->display_rows_or_placeholder();
        echo '</tbody>';
        echo '<tfoot>';
        $this->print_column_headers(false);
        echo '</tfoot>';
        echo '</table>';
        $this->display_tablenav('bottom');
    }

    protected function display_tablenav( $which ) {
        ?>
        <div class="tablenav <?php echo esc_attr( $which ); ?>">
            <div class="alignleft actions bulkactions">
                <?php $this->bulk_actions( $which ); ?>
            </div>
            <?php
            $this->extra_tablenav( $which );
            $this->pagination( $which );
            ?>
            <br class="clear" />
        </div>
        <?php
    }
}
