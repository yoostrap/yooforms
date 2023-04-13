<?php
/**
 * Registers available block types.
 *
 * @since 1.0.0
 *
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Add custom block category to default categories.
 *
 * @param array[] $block_categories Block categories.
 *
 * @return array
 */
function hizzle_forms_block_categories( $block_categories ) {

	return array_merge(
		$block_categories,
		array(
			array(
				'slug'  => 'hizzle-forms',
				'title' => esc_html__( 'Hizzle Forms', 'hizzle-forms' ),
			),
		)
	);
}
add_filter( 'block_categories_all', 'hizzle_forms_block_categories' );

/**
 * Register block types.
 */
function hizzle_forms_register_block_types() {

	// Gutenberg is not active.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	// Register the block by passing the location of block.json to register_block_type.
	register_block_type( plugin_dir_path( __FILE__ ) . 'form' );
	register_block_type( plugin_dir_path( __FILE__ ) . 'name' );
	register_block_type( plugin_dir_path( __FILE__ ) . 'first-name' );
	register_block_type( plugin_dir_path( __FILE__ ) . 'last-name' );
	register_block_type( plugin_dir_path( __FILE__ ) . 'email' );
	register_block_type( plugin_dir_path( __FILE__ ) . 'text' );
	register_block_type( plugin_dir_path( __FILE__ ) . 'url' );
	register_block_type( plugin_dir_path( __FILE__ ) . 'tel' );
	register_block_type( plugin_dir_path( __FILE__ ) . 'number' );
	register_block_type( plugin_dir_path( __FILE__ ) . 'date' );
	register_block_type( plugin_dir_path( __FILE__ ) . 'time' );
	register_block_type( plugin_dir_path( __FILE__ ) . 'month' );
	register_block_type( plugin_dir_path( __FILE__ ) . 'week' );
	register_block_type( plugin_dir_path( __FILE__ ) . 'color' );
	register_block_type( plugin_dir_path( __FILE__ ) . 'range' );
}
add_action( 'init', 'hizzle_forms_register_block_types' );
