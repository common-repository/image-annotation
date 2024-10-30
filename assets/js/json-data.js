function ano_6310_set_generate_json_data(selector = "#ano-6310-add-point ") {
  let myObj = {};
  let myCSS = {};
  myObj.pointList = jQuery(selector + ".ano-6310-canvas-area").val();
  myObj.imageWidth = jQuery(selector + ".ano-6310-canvas").attr("width");
  myObj.imageHeight = jQuery(selector + ".ano-6310-canvas").attr("height");
  let viewMoodType = Number(
    jQuery(selector + ".ano-6310-section-view-mood-select:checked").val()
  );

  let elementType = Number(
    jQuery(selector + ".ano-6310-section-select:checked").val()
  );
  myObj.selectModelContent = jQuery(selector + ".ano_6310_modal_content").val();
  myObj.ModalContentFontSize = jQuery(
    selector + ".ano_6310_modal_content_font_size"
  ).val();
  myObj.ModalContentColor = jQuery(
    selector + ".ano_6310_modal_content_color"
  ).val();

  myObj.ModalContentBgColor = jQuery(
    selector + ".ano_6310_modal_content_background_color"
  ).val();
  myObj.selectAreaColor = jQuery(
    selector + ".ano_6310_select_area_color"
  ).val();
  myObj.selectAreaHoverColor = jQuery(
    selector + ".ano_6310_select_area_hover_color"
  ).val();
  myObj.areaBorderSize = jQuery(selector + ".ano-6310_area_border_size").val();
  myObj.customFirstImg = jQuery(selector + ".ano-6310-image-edit-1").val();
  myObj.customSecondImg = jQuery(selector + ".ano-6310-image-edit-2").val();
  myObj.customTextSize = jQuery(
    selector + ".ano_6310_custom_text_font_size"
  ).val();
  myObj.areaBorderColor = jQuery(
    selector + ".ano_6310_area_border_color"
  ).val();
  myObj.areaBorderHoverColor = jQuery(
    selector + ".ano_6310_area_border_hover_color"
  ).val();
  myObj.areaShadowith = jQuery(
    selector + ".ano-6310_area_shadow_width"
  ).val();
  myObj.areaShadowColor = jQuery(
    selector + ".ano_6310_area_shadow_hover_color"
  ).val();
  myObj.customTextBgColor = jQuery(
    selector + ".ano_6310_custom_text_font_bg_color"
  ).val();
  myObj.customeCode = jQuery(
    selector + `textarea[name='ano_6310_custom_code']`
  ).val();
  myObj.mouseType = jQuery(selector + ".ano-6310_popover_type:checked").val();

  // check element type

  myObj.selectedTemplate = jQuery(selector + ".ano-6310-active").attr(
    "data-id"
  );

  myObj.popupEmbedded = jQuery(selector + ".popup_embedded").val();
  myObj.selectedTemplate = jQuery(selector + ".ano-6310-active").attr(
    "data-id"
  );

  // check selector type

  myObj.linkText = jQuery(selector + ".ano_6310_link_text").val();
  myObj.linkURL = jQuery(selector + ".ano_6310_custom_link_url").val();
  myObj.openNewTab = jQuery(selector + ".ano-6310-open-new-tab:checked").val();
  myObj.openPopup = jQuery(selector + ".ano-6310-open-popup:checked").val();
  myObj.openPopupCustomUse = jQuery(
    selector + ".ano-6310-open-popup-custom-use:checked"
  ).val();
  myObj.openDesImg = jQuery(selector + ".ano-6310-des-img").val();
  myObj.openDescription = jQuery(
    selector + ".ano-6310-tooltip_discription"
  ).val();
  myObj.openDesFontSize = jQuery(
    selector + ".ano-6310-tooltip_discription_font_size"
  ).val();
  myObj.openDesFontColor = jQuery(
    selector + ".ano-6310-tooltip_discription_font_color"
  ).val();
  myObj.customButtonLinkType = jQuery(
    selector + ".ano-6310_button_link:checked"
  ).val();
  myObj.customButtonText = jQuery(selector + ".ano-6310-button-text").val();
  myObj.customButtonUrl = jQuery(selector + ".ano-6310-button-url").val();
  myObj.customButtonTextSize = jQuery(
    selector + ".ano_6310_button_text_size"
  ).val();
  myObj.customButtonTextColor = jQuery(
    selector + ".ano_6310_button_text_color"
  ).val();
  myObj.customButtonBgcolor = jQuery(
    selector + ".ano_6310_button_bg_color"
  ).val();
  myObj.tempCommonFontSize = jQuery(
    selector + ".ano_6310_template_font_size"
  ).val();
  myObj.tempCommonFontColor = jQuery(
    selector + ".ano_6310_template_font_color"
  ).val();
  myObj.tempCommonBgColor = jQuery(
    selector + ".ano_6310_template_bg_color"
  ).val(); 
  myObj.tem02EmbeddedLink = ano_6310_get_embedded_attributes(
    jQuery(selector + ".ano-6310-embedded_code_link").val()
  );

  let customCode = jQuery(
    selector + "textarea[name='ano-6310-custome_html']"
  ).val();

  customCode = customCode.replace(/='/g, '="');
  customCode = customCode.replace(/'>/g, '">');

  myObj.customeHtmlCode = customCode;
  myObj.customeCssCode = jQuery(
    selector + `textarea[name='ano-6310-custome_css']`
  ).val();
  myObj.customeCodePopup = ano_6310_get_embedded_attributes(
    jQuery(selector + `textarea[name='ano_6310_custom_code_popup']`).val()
  );
  myObj.customePopupHtml = jQuery(
    selector + `textarea[name='ano_6310_custom_code_popup_html']`
  ).val();
  myObj.customePopupCss = jQuery(
    selector + `textarea[name='ano_6310_custom_code_popup_css']`
  ).val();

  myObj.customIconLinkType = jQuery(
    selector + ".ano-6310_link_title_type:checked"
  ).val();
  myObj.viewMoodType = viewMoodType;
  myObj.elementType = elementType;

  if (myObj.iconType == 1) {
    myCSS.styleCSS = `
    .ano-6310-drag[data-id='${window.currentPoint}'] .ano-6310-pin-main-img{ 
        color: ${myObj.selectAreaColor} !important;
        font-size:${myObj.areaBorderSize}px !important;
    } 
    .ano-6310-drag[data-id='${window.currentPoint}'] .ano-6310-pin-hover-img{ 
      color: ${myObj.selectAreaHoverColor} !important;
      font-size:${myObj.areaBorderSize}px !important;
    } 
   
  `;
  } else if (myObj.iconType == 2) {
    myCSS.styleCSS = `
    .ano-6310-drag[data-id='${window.currentPoint}'] .ano-6310-pin-main-img{ 
        width: ${myObj.imgOrIconSize}px !important;
        height:auto !important;
    } 
    .ano-6310-drag[data-id='${window.currentPoint}'] .ano-6310-pin-hover-img{ 
      width: ${myObj.imgOrIconSize}px !important;
      height:auto !important;
  }
  `;
  } else if (myObj.iconType == 3) {
    myCSS.styleCSS = `
    .ano-6310-drag[data-id='${window.currentPoint}'] span{
        font-size:${myObj.customTextSize}px !important;
        color: ${myObj.areaBorderColor} !important;
        background-color:${myObj.customTextBgColor} !important;
        padding: 5px 10px;
    } 
  `;
  }

  //ano_6310_reset_fields();
  return myObj;
}

function ano_6310_set_json_data() {
  let jsonData = jQuery(`[data-id='${window.currentPoint}']`).attr("data-json");
  jsonData = JSON.parse(jsonData);
  if (!jsonData || !jsonData.elementType) {
    return;
  }
  ano_6310_reset_fields();

  let divWidth = jQuery(".tabbed-content-wrap:last").width();
  let divHeight = Math.round(
    (Number(jsonData.imageHeight) * divWidth) / Number(jsonData.imageWidth)
  );
  jQuery(".ano-6310-canvas")
    .attr("height", divHeight)
    .attr("width", divWidth)
    .css({
      "background-size": `${divWidth}px ${divHeight}px`,
    });
  jQuery(".ano-6310-canvas-area:last").val(jsonData.pointList);
  // jQuery(".ano-6310-canvas-area:last").trigger("change");

  jQuery(
    "#ano-6310-edit-point .ano-6310-section-view-mood-select[value='1']"
  ).trigger("click");
  jQuery(
    "#ano-6310-edit-point .ano-6310-section-view-mood-select[value='2']"
  ).trigger("click");

  jQuery("#ano-6310-edit-point .ano-6310-section-select[value='1']").trigger(
    "click"
  );

  jQuery("#ano-6310-edit-point .ano-6310-section-select[value='2']").trigger(
    "click"
  );

  jQuery("#ano-6310-edit-point .ano-6310-section-select[value='3']").trigger(
    "click"
  );

  jQuery(".ano-6310-tooltip-img").removeClass("ano-6310-active");
  jQuery(".ano-6310-open-new-tab").prop("selectedIndex", jsonData.openNewTab);

  jQuery(".ano-6310-open-popup").prop("selectedIndex", jsonData.openPopup);
  if (Number(jsonData.openPopup) == 1) {
    jQuery(".ano-6310-open-popup-custom-use").addClass("ano-6310-hide");
  } else {
    jQuery(".ano-6310-open-popup-custom-use").removeClass("ano-6310-hide");
  }

  jQuery(".ano-6310-section-view-mood-select").prop(
    "selectedIndex",
    jsonData.viewMoodType
  );
  if (Number(jsonData.openPopupCustomUse) == 1) {
    jQuery(".tooltip-embedded").addClass("ano-6310-hide");
    jQuery(".tooltip-custom-html-css").removeClass("ano-6310-hide");
  } else {
    jQuery(".tooltip-embedded").removeClass("ano-6310-hide");
    jQuery(".tooltip-custom-html-css").addClass("ano-6310-hide");
  }
  jQuery(".ano-6310-templates").removeClass("ano-6310-hide");
  jQuery(".ano-6310-active").removeClass("ano-6310-active");
  jQuery(
    `.ano-6310-templates, [data-id='${jsonData.selectedTemplate}']`
  ).removeClass("ano-6310-hide");

  jQuery(".ano_6310_select_area_color").val(jsonData.selectAreaColor);
  jQuery(".ano_6310_select_area_color")
    .closest("div")
    .find(".minicolors-swatch-color")
    .css({
      "background-color": jsonData.selectAreaColor,
    });
  jQuery(".ano_6310_select_area_hover_color").val(
    jsonData.selectAreaHoverColor
  );
  jQuery(".ano_6310_modal_content").val(jsonData.selectModelContent);
  jQuery(".ano_6310_modal_content_font_size").val(jsonData.ModalContentFontSize);
  jQuery(".ano_6310_modal_content_color").val(jsonData.ModalContentColor);
  jQuery(".ano_6310_modal_content_color")
    .closest("div")
    .find(".minicolors-swatch-color")
    .css({
      "background-color": jsonData.ModalContentColor,
    });
  jQuery(".ano_6310_modal_content_background_color").val(
    jsonData.ModalContentBgColor
  );
  jQuery(".ano_6310_modal_content_background_color")
    .closest("div")
    .find(".minicolors-swatch-color")
    .css({
      "background-color": jsonData.ModalContentBgColor,
    });
  jQuery(".ano_6310_select_area_hover_color")
    .closest("div")
    .find(".minicolors-swatch-color")
    .css({
      "background-color": jsonData.selectAreaHoverColor,
    });
  jQuery(".ano-6310_area_border_size").val(jsonData.areaBorderSize);
  jQuery(".ano-6310-image-edit-1").val(jsonData.customFirstImg);
  jQuery(".ano-6310-image-edit-2").val(jsonData.customSecondImg);

  jQuery(".ano_6310_custom_text_font_size").val(jsonData.customTextSize);
  jQuery(".ano_6310_area_border_color").val(jsonData.areaBorderColor);
  jQuery(".ano_6310_area_border_hover_color").val(
    jsonData.areaBorderHoverColor
  );

  jQuery(".ano_6310_area_border_color")
    .closest("div")
    .find(".minicolors-swatch-color")
    .css({
      "background-color": jsonData.areaBorderColor,
    });
  jQuery(".ano_6310_area_border_hover_color")
    .closest("div")
    .find(".minicolors-swatch-color")
    .css({
      "background-color": jsonData.areaBorderHoverColor,
    });
    jQuery(".ano-6310_area_shadow_width").val(
      jsonData.areaShadowith
    );
    jQuery(".ano_6310_area_shadow_hover_color").val(
      jsonData.areaShadowColor
    );
    jQuery(".ano_6310_area_shadow_hover_color")
    .closest("div")
    .find(".minicolors-swatch-color")
    .css({
      "background-color": jsonData.areaShadowColor,
    });
  jQuery(".ano_6310_custom_text_font_bg_color").val(jsonData.customTextBgColor);
  jQuery(".ano_6310_custom_text_font_bg_color")
    .closest("div")
    .find(".minicolors-swatch-color")
    .css({
      "background-color": jsonData.customTextBgColor,
    });

  jQuery(`textarea[name='ano_6310_custom_code']`).val(jsonData.customeCode);
  jQuery(`textarea[name='ano_6310_custom_code_popup']`).val(
    ano_6310_create_embedded_code(jsonData.customeCodePopup)
  );
  jQuery(`textarea[name='ano_6310_custom_code_popup_html']`).val(
    jsonData.customePopupHtml
  );
  jQuery(`textarea[name='ano_6310_custom_code_popup_css']`).val(
    jsonData.customePopupCss
  );
  jQuery(`textarea[name='ano-6310-custome_html']`).val(
    jsonData.customeHtmlCode
  );
  jQuery(`textarea[name='ano-6310-custome_css']`).val(jsonData.customeCssCode);
  jQuery(".ano_6310_link_text").val(jsonData.linkText);
  jQuery(".ano_6310_custom_link_url").val(jsonData.linkURL);
  jQuery(".ano-6310-des-img").val(jsonData.openDesImg);
  jQuery(".ano-6310-tooltip_discription").val(jsonData.openDescription);
  jQuery(".ano-6310-tooltip_discription_font_size").val(
    jsonData.openDesFontSize
  );
  jQuery(".ano-6310-tooltip_discription_font_color").val(
    jsonData.openDesFontColor
  );
  jQuery(".ano-6310-tooltip_discription_font_color")
  .closest("div")
  .find(".minicolors-swatch-color")
  .css({
    "background-color": jsonData.openDesFontColor,
  });
  jQuery(".tooltip_discription_font_color")
    .closest("div")
    .find(".minicolors-swatch-color")
    .css({
      "background-color": jsonData.openDesFontColor,
    });
  jQuery(".ano-6310-button-text").val(jsonData.customButtonText);
  jQuery(".ano-6310-button-url").val(jsonData.customButtonUrl);
  jQuery(".ano_6310_button_text_size").val(jsonData.customButtonTextSize);
  jQuery(".ano_6310_button_text_color").val(jsonData.customButtonTextColor);
  jQuery(".ano_6310_button_text_color")
    .closest("div")
    .find(".minicolors-swatch-color")
    .css({
      "background-color": jsonData.customButtonTextColor,
    });
  jQuery(".ano_6310_button_bg_color").val(jsonData.customButtonBgcolor);
  jQuery(".ano_6310_button_bg_color")
    .closest("div")
    .find(".minicolors-swatch-color")
    .css({
      "background-color": jsonData.customButtonBgcolor,
    });
  jQuery(".popup_embedded").val(jsonData.popupEmbedded);
  jQuery(".ano-6310-tooltip-link").removeClass("ano-6310-hide");
  jQuery(".ano_6310_textarea").removeClass("ano-6310-hide");

  jQuery(".ano-6310-form-02").removeClass("ano-6310-hide");
  jQuery(".ano-6310-form-02").removeClass("ano-6310-hide");

  if (jsonData.selectedTemplate != "") {
    //set common
    jQuery(".ano_6310_template_font_size").val(jsonData.tempCommonFontSize);
    jQuery(".ano_6310_template_font_color").val(jsonData.tempCommonFontColor);
    jQuery(".ano_6310_template_font_color")
      .closest("div")
      .find(".minicolors-swatch-color")
      .css({
        "background-color": jsonData.tempCommonFontColor,
      });
    jQuery(".ano_6310_template_bg_color").val(jsonData.tempCommonBgColor);
    jQuery(".ano_6310_template_bg_color")
      .closest("div")
      .find(".minicolors-swatch-color")
      .css({
        "background-color": jsonData.tempCommonBgColor,
      });

    //Uncommon fields
    if (jsonData.selectedTemplate == "02") {
      jQuery(".ano-6310-embedded_code_link").val(
        ano_6310_create_embedded_code(jsonData.tem02EmbeddedLink)
      );
    }

    jQuery(`
        #ano-6310-edit-point .toggle-tabs li:first-child, 
        #ano-6310-edit-point .ano-6310_popover_type[value='${jsonData.mouseType}'],
        #ano-6310-edit-point .ano-6310-section-select[value='${jsonData.elementType}'],
        #ano-6310-edit-point .ano-6310-section-view-mood-select[value='${jsonData.viewMoodType}'],
        #ano-6310-edit-point .ano-6310_link_title_type[value='${jsonData.customIconLinkType}'],
        #ano-6310-edit-point .ano-6310-open-popup[value='${jsonData.openPopup}'],
        #ano-6310-edit-point .ano-6310-open-popup-custom-use[value='${jsonData.openPopupCustomUse}'],
        #ano-6310-edit-point .ano-6310-open-new-tab[value='${jsonData.openNewTab}'],
        #ano-6310-edit-point .ano-6310_button_link[value='${jsonData.customButtonLinkType}']
      `).trigger("click");
  }

  if (jsonData.elementType == 2) {
    jQuery(
      "#ano-6310-edit-point .ano-6310-tooltip-link, .ano_6310_custom_template"
    ).addClass("ano-6310-hide");
    jQuery("#ano-6310-edit-point .ano_6310_template_embedded").removeClass(
      "ano-6310-hide"
    );
  } else if (jsonData.elementType == 3) {
    jQuery("#ano-6310-edit-point .ano_6310_custom_template").removeClass(
      "ano-6310-hide"
    );
    jQuery(
      "#ano-6310-edit-point .ano-6310-tooltip-link, .ano_6310_template_embedded,  .ano_6310_font_prop, .ano-6310-templates"
    ).addClass("ano-6310-hide");
  } else {
    jQuery("#ano-6310-edit-point .ano-6310-tooltip-link").removeClass(
      "ano-6310-hide"
    );
    jQuery(
      "#ano-6310-edit-point .ano_6310_custom_template, .ano_6310_template_embedded"
    ).addClass("ano-6310-hide");
  }

  if (jsonData.selectedTemplate != "") {
    jQuery(
      `.ano-6310-tooltip-img[data-id='${jsonData.selectedTemplate}']`
    ).addClass("ano-6310-active");
    jQuery(
      `#ano-6310-edit-point .ano-6310-tooltip-img[data-id='${jsonData.selectedTemplate}']`
    ).trigger("click");
  }

  if(jsonData.viewMoodType == '01'){
    jQuery(
      `#ano-6310-edit-point .ano-6310-tooltip-img[data-id='01']`
    ).removeClass("ano-6310-hide");
  }

  setTimeout(function () {
    if (jsonData.elementType == 3) {
      jQuery(
        "#ano-6310-edit-point .ano_6310_font_prop, #ano-6310-edit-point .ano_6310_template_embedded, #ano-6310-edit-point .ano_6310_template_description"
      ).addClass("ano-6310-hide");
      jQuery("#ano-6310-edit-point .ano_6310_custom_template").removeClass(
        "ano-6310-hide"
      );
    }
  }, 500);

  return jsonData.pointList;
}

function ano_6310_reset_fields() {
  console.log('ano_6310_reset_fields')
  jQuery(".ano-ano-6310_popover_type[value='1']").prop("checked", true);
  jQuery(".ano-6310-tooltip-img").removeClass("ano-6310-active");
  jQuery(
    ".ano-6310-form, .ano-6310-tooltip-link, .ano-6310-templates, .tooltip-embedded"
  ).addClass("ano-6310-hide");
  jQuery(".ano-6310-embedded_code_link").val("");
  let fieldList =
    ".icons-1, .icons-2, .ano-6310-image-edit-1, .ano-6310-image-edit-2, .ano_6310_custom_text_font_size, .ano_6310_area_border_color, .ano_6310_area_border_hover_color, .ano-6310_area_shadow_width, .ano_6310_area_shadow_hover_color, .ano_6310_custom_text_font_bg_color, .ano_6310_select_area_color, .ano_6310_modal_content, .ano_6310_modal_content_font_size, .ano_6310_modal_content_color, .ano_6310_modal_content_background_color, .ano_6310_select_area_hover_color, .ano-6310_area_border_size, .ano_6310_link_text, .ano_6310_custom_link_url, .popup_embedded, .ano_6310_template_font_color, .ano_6310_template_bg_color, .ano_6310_template_font_size, .ano-6310-embedded_code_link, .ano-6310-tooltip_discription, .ano-6310-tooltip_discription_font_size, .ano-6310-tooltip_discription_font_color, .ano-6310-button-text, .ano-6310-button-url, .ano_6310_button_text_color, .ano_6310_button_bg_color, .ano_6310_button_text_size, .ano-6310-custome_html, .ano-6310-custome_css";
  fieldList = fieldList.split(",");
  // setTimeout(function () {
  for (let i = 0; i < fieldList.length; i++) {
    let selector = jQuery(fieldList[i].trim());
    if (
      selector.attr("data-value") !== undefined ||
      selector.attr("data-value") !== null
    ) {
      selector.val(selector.attr("data-value"));
      selector.attr("data-defaultValue", selector.attr("data-value"));
      selector.text(selector.attr("data-value"));
      if (selector.closest("div").find(".minicolors-swatch-color")) {
        selector
          .closest("div")
          .find(".minicolors-swatch-color")
          .css({
            "background-color": selector.attr("data-value"),
          });
      }
    }
  }
  // }, 100);
  jQuery(".ano-6310-section-select, .ano-6310-open-new-tab").prop(
    "selectedIndex",
    0
  );

  jQuery(".ano_6310_textarea").addClass("ano-6310-hide");

  setTimeout(function () {
    if (jQuery(".ano_6310_color_picker").length) {
      jQuery(".ano_6310_color_picker").each(function () {
        jQuery(this).minicolors({
          control: jQuery(this).attr("data-control") || "hue",
          defaultValue: jQuery(this).attr("data-defaultValue") || "",
          format: jQuery(this).attr("data-format") || "hex",
          keywords: jQuery(this).attr("data-keywords") || "",
          inline: jQuery(this).attr("data-inline") === "true",
          letterCase: jQuery(this).attr("data-letterCase") || "lowercase",
          opacity: jQuery(this).attr("data-opacity"),
          position: jQuery(this).attr("data-position") || "bottom left",
          swatches: jQuery(this).attr("data-swatches")
            ? jQuery(this).attr("data-swatches").split("|")
            : [],
          change: function (value, opacity) {
            if (!value) return;
            if (opacity) value += ", " + opacity;
            if (typeof console === "object") {
              console.log(value);
            }
          },
          theme: "bootstrap",
        });
      });
    }
  }, 500)
}

function ano_6310_get_embedded_attributes(embeddedCode) {
  if (!embeddedCode) {
    return "";
  }
  jQuery("body").after(`<div class="ano-6310-dummy">${embeddedCode}</div>`);
  embeddedCode = jQuery(".ano-6310-dummy iframe");
  let attrName = "";
  let attrValue = "";
  if (embeddedCode.length) {
    embeddedCode.each(function () {
      var attributes = this.attributes;
      var i = attributes.length;
      while (i--) {
        if (attrName) {
          attrName += "XXYYXX";
          attrValue += "XXYYXX";
        }
        attrName += attributes[i].name;
        attrValue += attributes[i].value;
      }
    });
  }
  jQuery(".ano-6310-dummy").remove();
  return `${attrName}AABBAA${attrValue}`;
}

function ano_6310_create_embedded_code(embeddedCode) {
  if (!embeddedCode) return;
  embeddedCode = embeddedCode.split("AABBAA");
  let allAttrName = embeddedCode[0].split("XXYYXX");
  let allAttrValue = embeddedCode[1].split("XXYYXX");

  let htmlCode = "";

  if (
    allAttrName.length &&
    allAttrValue.length &&
    allAttrName.length == allAttrValue.length
  ) {
    for (let i = 0; i < allAttrName.length; i++) {
      htmlCode += " " + allAttrName[i] + '="' + allAttrValue[i] + '"';
    }
  }

  if (htmlCode) {
    htmlCode = "<iframe" + htmlCode + "></iframe>";
  }
  return htmlCode;
}

function ano_6310_create_area(cords, width, height, orgWidth, orgHeight) {
  if (!cords) return "";
  let cordsList = cords.split(",");
  cords = "";

  for (let i = 0; i < cordsList.length; i++) {
    if (i % 2 == 0) {
      cords += ano_6310_absolute_position(cordsList[i], width, orgWidth);
      cords += ",";
    } else {
      cords += ano_6310_absolute_position(cordsList[i], height, orgHeight);
      cords += " ";
    }
  }

  return cords.trim();
}

function ano_6310_absolute_position(point, distance, orgDistance) {
  return Math.round((point * orgDistance) / distance);
}

function ano_6310_default_polygon(orgWidth, orgHeight) {
  let polygon = jQuery(".ano-6310-pol-loaded");
  if (polygon.length) {
    polygon.each(function () {
      let dataJson = jQuery(this).attr("data-json");
      dataJson = JSON.parse(dataJson);
      let cords = ano_6310_create_area(
        dataJson.pointList,
        dataJson.imageWidth,
        dataJson.imageHeight,
        orgWidth,
        orgHeight
      );
      jQuery(this).attr("points", cords);
    });
  }
}

function ano_6310_canvas_init($ids) {
  jQuery(".ano-6310-canvas-wrapper").html("");
  jQuery(`${$ids} .ano-6310-canvas-area[ano-6310-image-url]`).canvasAreaDraw(
    `${$ids}`
  );

  setTimeout(function () {
    let divWidth = jQuery(`${$ids} .ano-6310-canvas-wrapper`).width();
    let canWidth = jQuery(".ano-6310-annotation-box .ano-6310-main-svg").attr(
      "width"
    );
    let canHeight = jQuery(".ano-6310-annotation-box .ano-6310-main-svg").attr(
      "height"
    );
    let divHeight = Math.round((canHeight * divWidth) / canWidth);

    jQuery(`${$ids} canvas`)
      .attr("height", divHeight)
      .attr("width", divWidth)
      .css({
        "background-size": `${divWidth}px ${divHeight}px`,
      });
  }, 500);
}
