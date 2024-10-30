<?php
if (!defined('ABSPATH'))
   exit;
?>
<div class="ano-6310">
   <h1>Plugin Export / Import</h1>

   <button class="ano-6310-btn-primary" id="export-draw-attention-data">Export Plugin Data</button>
   <button class="ano-6310-btn-primary" id="import-draw-attention-data">Import Plugin Data</button>
   <?php

   wp_enqueue_media();
   ano_6310_export_full_map_annotation_plugin();

   if (!empty($_POST['update'])) {
      $nonce = $_REQUEST['_wpnonce'];
      if (!wp_verify_nonce($nonce, 'ano-6310-nonce-update')) {
         die('You do not have sufficient permissions to access this page.');
      } else {
         if($_POST['file_url'] && substr($_POST['file_url'], -3) == 'txt'){
            ano_6310_import_full_plugin($_POST['file_url']);            
         } else{
            echo "<p style='color: red; font-size: 14px;'>Can't import data. Please upload valid file.</p>";
         }
      }
   }
   ?>
   <form action="" method="post">
      <?php wp_nonce_field("ano-6310-nonce-update") ?>
      <div class="ano-6310-modal-body-form">
         <table width="100%" cellpadding="10" cellspacing="0" class="import-file" style="display: none">
            <tr>
               <td width="70px"><b>File URL</b></td>
               <td>
                  <input type="text" required name="file_url" id="file-url" class="ano-6310-form-input" style="width: 300px;">
                  <input type="button" id="upload-csv-file" value="Upload file" class="ano-6310-btn-default">
               </td>
            </tr>
            <tr>
               <td colspan="3">
                  <input type="submit" name="update" class="ano-6310-btn-primary ano-6310-margin-right-10" value="Import Data"  onclick="return confirm('If you import you will lose all of your previous data of this plugin. Do you want to continue?');" />
               </td>
            </tr>
         </table>
      </div>
      <br class="ano-6310-clear" />
   </form>
   <script>
      jQuery(document).ready(function() {
         /* ######### Media Start ########### */
         jQuery("body").on("click", "#import-draw-attention-data", function(e) {
            jQuery('.import-file').removeClass('ano-6310-hide');
         });

         jQuery('body').on('click', '#export-draw-attention-data', function(){
            if (!confirm("Do you want to export service box full plugin?")){
               return false;
            } else{
               window.open(jQuery('#export-draw-attention-plugin').attr('href'), '_blank');
            }
         });

         jQuery("body").on("click", "#upload-csv-file", function(e) {
            e.preventDefault();
            var image = wp.media({
                  title: 'Upload File',
                  multiple: false
               }).open()
               .on('select', function(e) {
                  var uploaded_image = image.state().get('selection').first();
                  var image_url = uploaded_image.toJSON().url;
                  jQuery("#file-url").val(image_url);
               });

            jQuery("#ano_6310_add_new_media").css({
               "overflow-x": "hidden",
               "overflow-y": "auto"
            });
         });
      });
   </script>