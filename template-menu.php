<?php
function ano_6310_home()
{
  global $wpdb;
  $style_table = $wpdb->prefix . 'ano_6310_style';
  include ano_6310_plugin_url . 'header.php';
  wp_enqueue_media();

  if (empty($_GET['action'])) {
    include ano_6310_plugin_url . 'home.php';
  } else if (!empty($_GET['action'])) {
    $ids = isset($_GET['styleid']) ? (int) ($_GET['styleid']) : 0;
    include ano_6310_plugin_url . "settings/annotation.php";
    include ano_6310_plugin_url . "settings/add-point-html.php";
    include ano_6310_plugin_url . "settings/edit-point-html.php";
  }
}
function ano_6310_image_annotation_setting()
{
  global $wpdb;
  wp_enqueue_style('ano-6310-style', plugins_url('assets/css/style.css', __FILE__));
  wp_enqueue_style('ano-color-style', plugins_url('assets/css/jquery.minicolors.css', __FILE__));
  include ano_6310_plugin_url . 'header.php';  
  include ano_6310_plugin_url . 'settings/plugin-settings.php';
}

function ano_6310_annotation_hotspot_lincense()
{
  global $wpdb;
  include ano_6310_plugin_url . 'header.php';
  include ano_6310_plugin_url . 'license.php';
}

function ano_6310_annotation_hotspot_how_to_use()
{
  global $wpdb;
  include ano_6310_plugin_url . 'header.php';
  include ano_6310_plugin_url . 'settings/how-to-use.php';
}

function ano_6310_wpmart_plugins()
{
  global $wpdb;
  include ano_6310_plugin_url . 'header.php';
  include ano_6310_plugin_url . 'settings/wpmart-plugins.php';
}

function ano_6310_annotation_hotspot_import_export()
{
  global $wpdb;
  include ano_6310_plugin_url . 'header.php';
  include ano_6310_plugin_url . 'settings/import-export-plugins.php';
}
