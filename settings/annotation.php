<div class="ano-6310">
  <div class="ano-6310-sm">
    <?php
    include ano_6310_plugin_url . 'settings/save.php';
    include ano_6310_plugin_url . "settings/form.php";
    ?>
    <div class="ano-6310-preview-box">
      <div class="ano-6310-preview">
      
        <button class="ano-6310-btn-success ano-6310-upload-image">Upload Image</button>
        <button class="ano-6310-btn-success ano-6310-add-point">Add Point</button>
        <span style="color:red; font-size: 16px">In free version, you can display three pointer.</span>

        <?php
        if(isset($_GET['styleid'])) {
            echo '<div class="shortcode">Shortcode <input type="text" class="ano-6310-6330-shortcode" onclick="this.setSelectionRange(0, this.value.length)" value="[ano_6310_annotation id=&quot;'.esc_attr($_GET['styleid']).'&quot;]"></div>';
          }
        ?>
        <hr />
      </div>
      <div class="ano-6310-annotation-box">
        <svg class="ano-6310-main-svg" width="0" height="0">
          <?php
            if ($jsonData) {
              $counter = 1;
              foreach ($jsonData as $js) {
                $jsonCode = json_encode($js); 
                echo "<polygon data-id='{$counter}' class='ano-6310-pol-loaded ano-6310-pol-{$counter}' data-json='".esc_attr($jsonCode)."' />";
                $pointCssCode = "
                  .ano-6310-main-svg .ano-6310-pol-{$counter}{
                    fill: ".esc_attr($js->selectAreaColor)." !important;
                    stroke:".esc_attr($js->areaBorderColor)." !important;
                    stroke-width:".esc_attr($js->areaBorderSize)."px !important;
                  }
                  .ano-6310-main-svg .ano-6310-pol-{$counter}:hover{
                    fill: ".esc_attr($js->selectAreaHoverColor)." !important;
                    stroke:".esc_attr($js->areaBorderHoverColor)." !important;
                    stroke-width:".esc_attr($js->areaBorderSize)."px !important;
                    cursor: pointer;
                    filter: drop-shadow(0px 0px ". (isset($js->areaShadowith) ? esc_attr($js->areaShadowith) : 0) ."px ". (isset($js->areaShadowColor) ? esc_attr($js->areaShadowColor) : '#FFF') .");
                  }
                ";
                wp_register_style( "ano-6310-template-{$counter}-css", "" );
                wp_enqueue_style( "ano-6310-template-{$counter}-css" );
                wp_add_inline_style( "ano-6310-template-{$counter}-css", $pointCssCode );
                $counter++;              }
            }
          ?>
        </svg>
        <img src="<?php echo isset($cssData['main_image']) ? $cssData['main_image'] : '' ?>" class="ano-6310-main-image" />
        <?php
        $pointCssCode = "
          .ano-6310-main-svg{
            background-image: url(".(isset($cssData['main_image']) ? $cssData['main_image'] : '').");
          }
        ";
        wp_register_style( "ano-6310-template-main-css", "" );
        wp_enqueue_style( "ano-6310-template-main-css" );
        wp_add_inline_style( "ano-6310-template-main-css", $pointCssCode );
        ?>
      </div>
    </div>
  </div>