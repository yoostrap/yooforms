<?php
namespace Hizzle\Forms;

/**
 * Contains the Admin Forms class.
 *
 * @since   1.0.0
 */
defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'WP_List_Table' ) ) {
	require_once ABSPATH . 'wp-admin/includes/class-wp-list-table.php';
}

class Admin_Forms extends \WP_List_Table {
    /**
	 * Constructor.
	 */
	public function __construct() {
		parent::__construct( array(
			'singular' => __( 'Form', 'hizzle-forms' ),
			'plural'   => __( 'Forms', 'hizzle-forms' ),
			'ajax'     => false,
		) );
	}

    /**
     * Display the forms table.
     */
    public function display() {
		$this->prepare_items();
        echo '<div class="wrap">';
        $this->screen->render_screen_reader_content( 'heading_list' );
		echo '<table class="wp-list-table widefat fixed striped">';
		$this->display_table_headers();
		$this->display_table_body();
		echo '</table>';
		echo '</div>';
    }

	/**
	 * Render the table headers.
	 */
	protected function display_table_headers() {
		echo '<thead><tr>';
		$this->print_column_headers();
		echo '</tr></thead>';
	}

	/**
	 * Render the table body.
	 */
	protected function display_table_body() {
		echo '<tbody>';
		$this->display_rows_or_placeholder();
		echo '</tbody>';
	}

    /**
     * Prepare the form items for display.
     */
    public function prepare_items() {
        $columns  = $this->get_columns();
        $hidden   = array();
        $sortable = $this->get_sortable_columns();
    
        $this->_column_headers = array( $columns, $hidden, $sortable );
    
        $args = array(
            'post_type'      => 'hizzle_form',
            'post_status'    => 'any',
            'posts_per_page' => -1,
        );
    
        // Sorting logic
        if ( isset( $_GET['orderby'] ) && isset( $sortable[$_GET['orderby']] ) ) {
            $args['orderby'] = $sortable[$_GET['orderby']][0];
            $args['order'] = isset( $_GET['order'] ) && strtoupper( $_GET['order'] ) === 'ASC' ? 'ASC' : 'DESC';
        }
    
        $this->items = get_posts( $args );
    }    

    /**
     * Define the columns for the forms table.
     */
    public function get_columns() {
        $columns = array(
            'title'   => __( 'Template', 'hizzle-forms' ),
            'status'  => __( 'Status', 'hizzle-forms' ),
            'date'    => __( 'Date', 'hizzle-forms' ),
            'author'  => __( 'Author', 'hizzle-forms' ),
            'usage'   => __( 'Usage', 'hizzle-forms' ),
        );

        return $columns;
    }

    /**
     * Define which columns are sortable.
     */
    public function get_sortable_columns() {
        $sortable_columns = array(
            'title'  => array( 'post_title', true ),
            'date'   => array( 'post_date', true ),
        );

        return $sortable_columns;
    }

    /**
     * Render a column.
     */
    public function column_default( $item, $column_name ) {
        switch ( $column_name ) {
            case 'title':
                return esc_html( $item->post_title );
            case 'status':
                return esc_html( $item->post_status );
            case 'date':
                return esc_html( $item->post_date );
            case 'author':
                return esc_html( get_the_author_meta( 'display_name', $item->post_author ) );
            case 'usage':
                $parent_title = '';
                $parent_id = wp_get_post_parent_id( $item->ID );
                if ( $parent_id ) {
                    $parent_title = get_the_title( $parent_id );
                    $edit_url = get_edit_post_link( $parent_id );
                    // Make the page/post title clickable with the edit URL
                    $parent_title = '<a href="' . esc_url( $edit_url ) . '">' . esc_html( $parent_title ) . '</a>';
                }
                return $parent_title;
            default:
                return '';
        }
    }
}
