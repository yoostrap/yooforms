<?php

namespace Hizzle\Forms;

/**
 * Contains the main plugin class.
 *
 * @since   1.0.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Main plugin Class.
 *
 */
class Plugin {

	/**
	 * REST API manager.
	 *
	 * @var Rest\Manager
	 */
	public $rest_api;

	/**
	 * Stores the main plugin instance.
	 *
	 * @access      private
	 * @var         Plugin $instance The main plugin instance.
	 * @since       1.0.0
	 */
	private static $instance = null;

	/**
	 * Get active instance
	 *
	 * @access      public
	 * @since       1.0.0
	 * @return      Plugin The main plugin instance.
	 */
	public static function instance() {

		if ( empty( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Class Constructor.
	 */
	public function __construct() {
		add_filter( 'block_categories_all', array( $this, 'register_block_categories' ) );
		add_action( 'init', array( $this, 'register_block_types' ) );
		add_action( 'plugins_loaded', array( $this, 'on_plugins_loaded' ), -1 );
		add_action( 'init', array( $this, 'load_plugin_textdomain' ), 0 );
	}

	/**
	 * Registers our custom block categories.
	 *
	 * @param array[] $block_categories Block categories.
	 *
	 * @return array
	 */
	public function register_block_categories( $block_categories ) {

		return array_merge(
			array(
				array(
					'slug'  => 'hizzle-forms',
					'title' => esc_html__( 'Hizzle Forms', 'hizzle-forms' ),
				),
			),
			$block_categories
		);

	}

	/**
	 * Register block types.
	 */
	public function register_block_types() {

		// Gutenberg is not active.
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}

		$path   = plugin_dir_path( HIZZLE_FORMS_PLUGIN_FILE ) . 'blocks/build/';
		$blocks = array(
			'form',
			'input',
			'textarea',
			'select',
			'checkbox',
			'radio',
			'multi-checkbox',
		);

		// Register the block by passing the location of block.json to register_block_type.
		foreach ( $blocks as $block ) {
			register_block_type( $path . $block );
		}

	}

	/**
	 * When WP has loaded all plugins, trigger the `hizzle_forms_loaded` hook.
	 *
	 * @since 1.0.0
	 */
	public function on_plugins_loaded() {
		do_action( 'hizzle_forms_loaded' );
	}

	/**
	 * Load Localisation files.
	 *
	 * Note: the first-loaded translation file overrides any following ones if the same translation is present.
	 *
	 * Locales found in:
	 *      - WP_LANG_DIR/plugins/hizzle-forms-LOCALE.mo
	 *      - WP_PLUGIN_DIR/hizzle-forms/languages/hizzle-forms-LOCALE.mo
	 *
	 * @since 1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'hizzle-forms',
			false,
			plugin_basename( dirname( __FILE__ ) ) . '/languages/'
		);

	}

	/**
	 * Get the plugin url.
	 *
	 * @return string
	 */
	public function plugin_url() {
		return untrailingslashit( plugins_url( '/', HIZZLE_FORMS_PLUGIN_FILE ) );
	}

	/**
	 * Get the plugin path.
	 *
	 * @return string
	 */
	public function plugin_path() {
		return untrailingslashit( plugin_dir_path( HIZZLE_FORMS_PLUGIN_FILE ) );
	}

}
