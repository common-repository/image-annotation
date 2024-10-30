<div class="ano_6310_tabs_panel_settings">
  <form method="post">
    <?php wp_nonce_field("ano_6310_nonce_field_form") ?>
    <input type="hidden" name="id" value="<?php echo esc_attr($ids) ?>" />
    <input type="hidden" name="main_image" value="<?php echo isset($cssData['main_image']) ? esc_attr($cssData['main_image']) : '' ?>" />
    <input type="hidden" name="json_data" id="ano_6310_json_field" value="<?php echo isset($cssData['json_data']) ? esc_attr($cssData['json_data']) : '' ?>" />
    <div class="ano-6310-tab-content">
      <div id="tab-1">
        <div class="row ano_6310_padding_15_px">
          <h3 class="ano-6310-tab-menu-settings">Draw Attention Settings</h3>
          <div class="ano-6310-col-50">
            <table class="table table-responsive ano_6310_admin_table">
              <tr height="45">
                <td>
                    <b>Annotation Name</b>
                </td>
                <td>
                  <input type="text" class="ano-6310-form-input" required autocomplete="off" name="name" placeholder="Enter annotation name" value="<?php echo isset($styledata['name']) ? ano_6310_replace(esc_attr($styledata['name'])) : 'Draw Attention' ?>">
                </td>
              </tr>
            </table>
          </div>
          <div class="ano-6310-col-50">
            <table class="table table-responsive ano_6310_admin_table">
              <tr height="45">
                <td>
                    <b>Custom CSS</b>
                </td>
                <td>
                <textarea class="ano-6310-form-input"  name="custom_css" rows="4"><?php echo isset($cssData['custom_css']) ? esc_attr($cssData['custom_css']) : '' ?></textarea>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <hr />
      <input type="submit" name="update_style_change" value="Save" class="ano-6310-btn-primary ano-6310-pull-right ano-6310-insert-ja-data" style="margin-right: 15px; margin-bottom: 10px; display: block" />
      <br class="ano-6310-clear" />
    </div>
  </form>
</div>

