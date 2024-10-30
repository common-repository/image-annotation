<?php
if (!defined('ABSPATH'))
   exit;
?>
<div class="ano-6310">
   <h1>Plugin Settings</h1>
   <?php

   wp_enqueue_media();

  
   $font_awesome = ano_6310_get_option('ano_6310_font_awesome_status');

   if (!empty($_POST['update']) && $_POST['update'] == 'Update') {
    $nonce = $_REQUEST['_wpnonce'];
    if (!wp_verify_nonce($nonce, 'ano-6310-nonce-update')) {
       die('You do not have sufficient permissions to access this page.');
    } else {    

        //fontawesome Font Start
        if($font_awesome != ''){
        $wpdb->query("UPDATE {$wpdb->prefix}options set 
        option_value='". $_POST['font_awesome'] ."' 
        where option_name = 'ano_6310_font_awesome_status'");
        }
        else{
        $wpdb->query("DELETE FROM {$wpdb->prefix}options where option_name='ano_6310_font_awesome_status'");
        $wpdb->query("INSERT INTO {$wpdb->prefix}options(option_name, option_value) VALUES ('ano_6310_font_awesome_status', '". $_POST['font_awesome'] ."')");
        }
  
        $font_awesome = $_POST['font_awesome'];
    }
 }
?>
 <form action="" method="post">
 <?php wp_nonce_field("ano-6310-nonce-update") ?>
 <div class="ano-6310-modal-body-form">
    <table width="100%" cellpadding="10" cellspacing="0">         
       <tr>
          <td width="200px">
             <b>Font Awesome Activation:</b><br />
            
          </td>
          <td width="500px" colspan="2">
             <input type="radio" name="font_awesome" value="2" checked> Active &nbsp;&nbsp;&nbsp;
             <input type="radio" name="font_awesome" value="1" <?php echo ($font_awesome == 1) ? ' checked':'' ?>> Inactive
          </td>
       </tr>
       <tr>
          <td colspan="3">
             <input type="submit" name="update" class="ano-6310-btn-primary ano-margin-right-10" value="Update" />
          </td>
       </tr>
    </table>
 </div>
 <br class="ano-6310-clear" />
</form>