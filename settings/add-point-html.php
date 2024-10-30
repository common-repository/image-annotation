<div id="ano-6310-add-point" class="ano-6310-modal ano-6310-hide">
  <div class="ano-6310-modal-content ano-6310-modal-lg">
    <div class="ano-6310-modal-header">
      Marker Settings
      <div class="ano-6310-close">&times;</div>
    </div>

    <div class="toggle-wrap">
      <ul class="toggle-tabs">
        <li data-id="1" class="active-tab">Select Area </li>
        <li data-id="4">Area Style</li>
        <li data-id="2">Content</li>
      </ul>
      <div class="ano-6310-modal-body-form">
        <div class="tabbed-content-wrap">
          <div class="ano-6310-tab ano-6310-tab-1">
            <table border="0" width="100%" cellpadding="10" cellspacing="0"></table>
            <input type="hidden" ano-6310-image-url='<?php echo isset($cssData['main_image']) ? $cssData['main_image'] : '' ?>' class="ano-6310-canvas-area" />
            <div class="ano-6310-canvas-wrapper"></div>
          </div>
          <div class="ano-6310-tab ano-6310-tab-2">
          <table border="0" width="100%" cellpadding="10" cellspacing="0">
            <tr>
              <td class='ano-6310-width-150'><label class="ano-6310-form-label">View Mood:</label></td>
              <td>
                <input class='ano-6310-section-view-mood-select' value='1' type="radio" name="view_mood_section" checked />Tooltip
                <input class='ano-6310-section-view-mood-select' value='2' type="radio" name="view_mood_section">Modal 
              </td>
            </tr>
          </table>
          <table border="0" width="50%" cellpadding="10" cellspacing="0">
          <tr class="ano-6310-model-content">
            <td class='ano-6310-width-150'><label class="ano-6310-form-label" for="picture">Modal Content Tooltip:</label></td>
            <td>
              <input type="text" data-value="Modal text" class="ano_6310_modal_content">
            </td>
          </tr>   
          <tr class="ano-6310-model-content">
            <td class='ano-6310-width-150'><label class="ano-6310-form-label" for="picture">Modal Content Font Size:</label></td>
            <td>              
              <input type="number" name="ano_6310_modal_content_font_size" id="ano_6310_modal_content_font_size" class="ano-6310-form-input ano_6310_modal_content_font_size" data-value="16">           
            </td>
            </td>
          </tr>
          <tr class="ano-6310-model-content">
            <td class='ano-6310-width-150'><label class="ano-6310-form-label" for="picture">Modal Content Color:</label></td>
            <td>              
              <input type="text" name="ano_6310_modal_content_color" class="ano-6310-form-input ano_6310_color_picker ano_6310_modal_content_color" data-format="rgb" data-value="rgb(255, 255, 255)">
            </td>
            </td>
          </tr>
          
          <tr class="ano-6310-model-content">
            <td class='ano-6310-width-150'><label class="ano-6310-form-label" for="picture">Modal Content Background Color:</label></td>
            <td>
              <input type="text" name="ano_6310_modal_content_background_color" class="ano-6310-form-input ano_6310_color_picker ano_6310_modal_content_background_color" data-format="rgb" data-opacity="0.8" data-value="rgba(12, 143, 209, 0.91)">
            </td>
          </tr>
            <tr class="ano-6310-sectio-element">
              <td class='ano-6310-width-150'><label class="ano-6310-form-label">Element Type:</label></td>
              <td>
                <input class='ano-6310-section-select' value='1' type="radio" name="popover_new" checked />Template
                <span class='ano-6310-embedded-input'>
                  <input class='ano-6310-section-select ano-6310-section-embedded' value='2' type="radio" name="popover_new">Embedded code
                </span>
                <input class='ano-6310-section-select' value='3' type="radio" name="popover_new">Custom code
              </td>           
            </tr> 
          </table>
            <div class="ano-6310-templates ano-6310-hide">
              <table border="0" width="100%" cellpadding="10" cellspacing="0">
            
                <tr class="">
                  <td class='ano-6310-width-150'><label class="ano-6310-form-label" for="picture"> Select Template:</label></td>
                  <td>
                    <div class="ano-6310-tooltip_img_section">
                      <div class="ano-6310-tooltip-img ano-6310-type-1" data-id='01'>
                        <img src="<?php echo ano_6310_plugin_dir_url . 'assets/images/1.png' ?>" data-template='template-01' alt="First Img">
                      </div>
                      <div class="ano-6310-tooltip-img ano-6310-type-2 " data-id='02'>
                        <img src="<?php echo ano_6310_plugin_dir_url . 'assets/images/2.png' ?>" alt="First Img">
                      </div>
                      <div class="ano-6310-tooltip-img ano-6310-type-1" data-id='03'>
                        <img src="<?php echo ano_6310_plugin_dir_url . 'assets/images/3.png' ?>" alt="First Img">
                      </div>
                      <div class="ano-6310-tooltip-img ano-6310-type-1" data-id='04'>
                        <img src="<?php echo ano_6310_plugin_dir_url . 'assets/images/4.png' ?>" alt="First Img">
                      </div>
                      <div class="ano-6310-tooltip-img ano-6310-type-1 " data-id='05'>
                        <img src="<?php echo ano_6310_plugin_dir_url . 'assets/images/5.png' ?>" alt="First Img">
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>  
            <?php include ano_6310_plugin_url . "settings/template-settings.php"; ?>
          </div>
          
       
          <div class="ano-6310-tab ano-6310-tab-4">
            <table border="0" width="50%" cellpadding="10" cellspacing="0">                         
              <tr height="40px" class="ano-6310-form-icon ano-6310-marker ano-6310-marker-type-1">
                <td class='ano-6310-width-150'><label class="ano-6310-form-label" for="icons">Area Color:</label></td>
                <td>
                  <input type="text" name="ano_6310_select_area_color" class="ano_6310_select_area_color ano-6310-form-input ano_6310_color_picker" data-opacity="0.8" data-format="rgb" data-value="rgba(255, 13, 0, 0.5)">
                </td>
              </tr>
              <tr height="40px" class="ano-6310-form-icon ano-6310-marker ano-6310-marker-type-1">
                <td class='ano-6310-width-150'><label class="ano-6310-form-label" for="icons">Area Hover Color:</label></td>
                <td>
                  <input type="text" name="ano_6310_select_area_hover_color" class="ano-6310-form-input ano_6310_color_picker ano_6310_select_area_hover_color" data-opacity="0.8" data-format="rgb" data-value="rgba(255, 13, 0, 0.5)">
                </td>
              </tr>
              <tr height="40px" class="ano-6310-form-icon ano-6310-marker ano-6310-marker-type-1">
                <td class='ano-6310-width-150'><label class="ano-6310-form-label" for="icons">Border size:</label></td>
                <td>
                  <input type="number" min='0' max="" name="ano-6310_area_border_size" class="ano-6310-form-input ano-6310_area_border_size" data-value="1">
                </td>
              </tr>
              <tr class="ano-6310-marker ano-6310-marker-type-1">
                <td><label class="ano-6310-form-label" for="icons">Border Color:</label></td>
                <td>
                  <input type="text" class="ano-6310-form-input ano_6310_color_picker ano_6310_area_border_color" data-format="rgb" data-value="rgb(255, 255, 255)">
                </td>
              </tr>
              <tr class="ano-6310-marker ano-6310-marker-type-1">
                <td><label class="ano-6310-form-label" for="icons">Border Hover Color:</label></td>
                <td>
                  <input type="text" class="ano-6310-form-input ano_6310_color_picker ano_6310_area_border_hover_color" data-format="rgb" data-value="rgb(255, 255, 255)">
                </td>
              </tr>    
              <tr height="40px" class="ano-6310-marker ano-6310-marker-type-1">
                <td class='ano-6310-width-150'><label class="ano-6310-form-label" for="icons">Hover shadow width:</label></td>
                <td>
                  <input type="number" min='0' max="" name="ano-6310_area_shadow_width" class="ano-6310-form-input ano-6310_area_shadow_width" data-value="5">
                </td>
              </tr> 
              <tr>  
              <tr class="ano-6310-marker ano-6310-marker-type-1">
                <td><label class="ano-6310-form-label" for="icons">Hover shadow color:</label></td>
                <td>
                  <input type="text" class="ano-6310-form-input ano_6310_color_picker ano_6310_area_shadow_hover_color" data-format="rgb" data-opacity=".8" data-value="rgba(0, 0, 0, 0.99)">
                </td>
              </tr>         
            </table>         
          </div>
          
        </div>
      </div>

    </div>
    <div class="ano-6310-modal-form-footer">
      <button type="button" name="close" class="ano-6310-btn-danger ano-6310-btn-close ano-6310-pull-right">Close</button>
      <input type="submit" name="submit" class="ano-6310-btn-primary ano-6310-pull-right ano-6310-margin-right-10 ano-6310-add-place-save" value="Save" />
    </div>
    <br class="ano-6310-clear" />
  </div>
</div>
