<?php
global $wpdb;
$style_table = $wpdb->prefix . 'ano_6310_style';
wp_enqueue_script('jquery');

$cssData = [];
if ($ids) {
   $styledata = $wpdb->get_row($wpdb->prepare("SELECT * FROM $style_table WHERE id = %d ", $ids), ARRAY_A);
   if(!$styledata) return;
   $css = explode("!!##!!", $styledata['css']);
   $key = explode(",", $css[0]);
   $value = explode("||##||", $css[1]);
   $filterKey = [];
   $filterValue = [];
   for ($i = 0; $i < count($key); $i++) {
      $filterKey[] = esc_attr($key[$i]);
   }
   for ($i = 0; $i < count($value); $i++) {
      $filterValue[] = esc_attr($value[$i]);
   }
   $cssData = array_combine($filterKey, $filterValue);
}
$jsonData = isset($cssData['json_data']) ? json_decode(stripslashes(html_entity_decode($cssData['json_data']))) : [];
$font_awesome = ano_6310_get_option('ano_6310_font_awesome_status');
if($font_awesome != 1){
   wp_enqueue_style('ano-6310-font-awesome-5-0-13', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css');
   wp_enqueue_style('ano-6310-font-awesome-4-07', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
}
   wp_enqueue_style('ano-6310-jquery-ui-css', 'https://code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css');
   wp_enqueue_script('ano-6310-jquery-ui', 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js', array('jquery'), TRUE);
wp_enqueue_style('ano-6310-owl-carousel', plugins_url('output-common-css.css', __FILE__));
include ano_6310_plugin_url . "output-css.php";
 

?>
<div class="ano-6310-annotation-box ano-6310-annotation-box-<?php echo $ids; ?>" data-id="<?php echo $ids; ?>">
      <svg class="ano-6310-main-svg ano-6310-main-svg-<?php echo $ids ?>" style="display: none">
         <?php
         if ($jsonData) {  
            $counter = 1;
            foreach ($jsonData as $js) {           
               ano_6310_load_templates($js, $counter, $ids);
               $jsonCode = json_encode($js); 
               if($js->viewMoodType == 2){
                  $classlist= "ano-6310-pol-loaded ano-6310-pol-{$ids}-{$counter} ano-6310-modal-element";
               }else{
                  $classlist= "ano-6310-pol-loaded ano-6310-pol-{$ids}-{$counter}";
               }

               $url = '';
               if(isset($js->linkURL) && $js->linkURL) {
                  $url = "data-link-url='{$js->linkURL}'" . (isset($js->openNewTab) && $js->openNewTab ? ' data-target="_blank" ' : ''); 
               } 
               echo "<polygon title='' data-id='{$ids}-{$counter}' {$url} class= '{$classlist}' data-json='".esc_attr($jsonCode)."' />";
               $pointCssCode = "
               .ui-tooltip{
                  padding:0 !important;
                }
                .ui-widget-content{
                  border: none !important;
                  background: none;
                } 
                .ui-widget-shadow{
                  box-shadow: none;
                }
               .ano-6310-main-svg .ano-6310-pol-{$ids}-{$counter}{
                  fill: ".esc_attr($js->selectAreaColor)." !important;
                  stroke:".esc_attr($js->areaBorderColor)." !important;
                  stroke-width:".esc_attr($js->areaBorderSize)."px !important;
               }
               .ano-6310-main-svg .ano-6310-pol-{$ids}-{$counter}:hover{
                  fill: ".esc_attr($js->selectAreaHoverColor)." !important;
                  stroke:".esc_attr($js->areaBorderHoverColor)." !important;
                  stroke-width:".esc_attr($js->areaBorderSize)."px !important;
                  cursor: pointer;
                  filter: drop-shadow(0px 0px ".esc_attr($js->areaShadowith)."px ".esc_attr($js->areaShadowColor).");
               }
               ";
               wp_register_style( "ano-6310-template-{$ids}-{$counter}-css", "" );
               wp_enqueue_style( "ano-6310-template-{$ids}-{$counter}-css" );
               wp_add_inline_style( "ano-6310-template-{$ids}-{$counter}-css", $pointCssCode );
               $counter++;    
               if($counter == 4) break;
            }
         }
         ?>
      </svg>
      <img src="<?php echo isset($cssData['main_image']) ? $cssData['main_image'] : '' ?>" class="ano-6310-main-image ano-6310-img" data-ano-cls="ano-6310-main-image ano-6310-img"  data-ano-value="<?php echo isset($cssData['main_image']) ? $cssData['main_image'] : '' ?>" />
        <?php
        $pointCssCode = "
          .ano-6310-main-svg-{$ids}{
            background-image: url(".(isset($cssData['main_image']) ? $cssData['main_image'] : '').");
          }
        ";
        wp_register_style( "ano-6310-template-main-css-{$ids}", "" );
        wp_enqueue_style( "ano-6310-template-main-css-{$ids}" );
        wp_add_inline_style( "ano-6310-template-main-css-{$ids}", $pointCssCode );
        ?>   
  
</div>

<?php
wp_enqueue_script('ano-6310-output', plugins_url('assets/js/main-output-file.js', __FILE__), array('jquery'), TRUE);
?>