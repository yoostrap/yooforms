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
		$this->includes();
		$this->init_hooks();
	}

	/**
	 * Include required core files used in admin and on the frontend.
	 */
	public function includes() {

		// Blocks.
		require_once plugin_dir_path( HIZZLE_FORMS_PLUGIN_FILE ) . 'blocks/build/index.php';

	}

	/**
	 * Hook into actions and filters.
	 *
	 * @since 1.0.0
	 */
	private function init_hooks() {

		add_action( 'plugins_loaded', array( $this, 'on_plugins_loaded' ), -1 );
		add_action( 'init', array( $this, 'init' ), 0 );

	}

	/**
	 * When WP has loaded all plugins, trigger the `hizzle_forms_loaded` hook.
	 *
	 * @since 1.0.0
	 */
	public function on_plugins_loaded() {

		do_action( 'hizzle_forms_before_load' );

		// TODO: Add REST API manager.

		do_action( 'hizzle_forms_loaded' );
	}

	/**
	 * Init after WordPress inits.
	 */
	public function init() {

		// Before init action.
		do_action( 'before_hizzle_forms_init' );

		// Set up localisation.
		$this->load_plugin_textdomain();

		// Init action.
		do_action( 'hizzle_forms_init' );

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
