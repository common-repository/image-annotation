<?php

/*
  Plugin Name:Image annotation
  Plugin URI: https://wordpress.org/plugins/image-annotation/
  Description: Draw Attention - Interactive Image Map is a powerful &amp; robust but easy to represent your information with different layouts and embedded video.
  Author: Sk Abul Hasan
  Author URI: https://www.wpmart.org/
  Version: 1.2
 */
if (!defined('ABSPATH'))
   exit;

// ini_set('display_errors', '1');
// ini_set('display_startup_errors', '1');
// error_reporting(E_ALL);   

define('ano_6310_plugin_url', plugin_dir_path(__FILE__));
define('ano_6310_plugin_dir_url', plugin_dir_url(__FILE__));
define ( 'ano_6310_PLUGIN_CURRENT_VERSION', 1.2 ); 
   
add_shortcode('ano_6310_annotation', 'ano_6310_annotation_shortcode');

function ano_6310_annotation_shortcode($atts)
{
   extract(shortcode_atts(array('id' => ' ',), $atts));
   $ids = (int) $atts['id'];

   ob_start();
   include(ano_6310_plugin_url . 'shortcode.php');
   return ob_get_clean();
}

add_action('admin_menu', 'ano_6310_annotation_menu');

function ano_6310_annotation_menu()
{
  $options = ano_6310_get_user_roles();
   add_menu_page('Draw Attention', 'Draw Attention', $options, 'ano-6310-draw-attention', 'ano_6310_home', 'dashicons-format-image', 20);
   add_submenu_page('ano-6310-draw-attention', 'Draw Attention', 'All Draw Attention',  $options, 'ano-6310-draw-attention', 'ano_6310_home');
   add_submenu_page('ano-6310-draw-attention', 'Settings', 'Settings', $options, 'ano-6310-draw-attention-setting', 'ano_6310_image_annotation_setting'); 
   // add_submenu_page('ano-6310-draw-attention', 'Import / Export Plugin', 'Import/Export Plugin', $options, 'ano-6310-draw-attention-import-export', 'ano_6310_annotation_hotspot_import_export');
   add_submenu_page('ano-6310-draw-attention', 'License', 'License', $options, 'ano-6310-draw-attention-license', 'ano_6310_annotation_hotspot_lincense');
   add_submenu_page('ano-6310-draw-attention', 'How to use', 'Help', $options, 'ano-6310-draw-attention-use', 'ano_6310_annotation_hotspot_how_to_use');
   add_submenu_page('ano-6310-draw-attention', 'WpMart Plugins', 'WpMart Plugins', $options, 'ano-6310-wpmart-plugins', 'ano_6310_wpmart_plugins');
}

include ano_6310_plugin_url . 'template-menu.php';

function ano_6310_my_enqueue()
{
   wp_localize_script('ajax-script', 'my_ajax_object', array('ajax_url' => admin_url('admin-ajax.php')));
}

add_action('wp_enqueue_scripts', 'ano_6310_my_enqueue');

register_activation_hook(__FILE__, 'ano_6310_annotation_install');
include_once(ano_6310_plugin_url . 'functions.php');

function ano_6310_ajax_enqueue()
{
   wp_localize_script('ano-6310-ajax-script', 'ano_6310_ajax_object', array('ano_6310_ajax_url' => admin_url('admin-ajax.php')));
}

add_action('wp_enqueue_scripts', 'ano_6310_ajax_enqueue');

function ano_6310_activation_redirect( $plugin ) {
   if( $plugin == plugin_basename( __FILE__ ) ) {
       exit( wp_redirect( admin_url( 'admin.php?page=ano-6310-draw-attention-use' ) ) );
   }
}
add_action( 'activated_plugin', 'ano_6310_activation_redirect' );

add_action( 'admin_enqueue_scripts', 'ano_6310_link_css_js' );

function ano_6310_plugin_update_check() {
   ano_6310_version_status();
}
add_action('plugins_loaded', 'ano_6310_plugin_update_check'); 