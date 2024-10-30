window.orgWidth = 0;
window.orgHeight = 0;
jQuery(window).load(function () {
  //set SVG width and height
  let mainImg = jQuery(".ano-6310-main-image");
  window.orgWidth = mainImg.width();
  window.orgHeight = mainImg.height();

  jQuery(".ano-6310-main-svg")
    .attr("width", window.orgWidth)
    .attr("height", window.orgHeight);
  jQuery(".ano-6310-main-svg").css({
    "background-size": window.orgWidth + "px " + window.orgHeight + "px",
  });
  jQuery(".ano-6310-main-image").hide();
  ano_6310_default_polygon(window.orgWidth, window.orgHeight);
  ano_6310_icon_image_select();

  /* Link Setting */
  jQuery("body").on(
    "click",
    "#ano-6310-add-point .ano-6310_link_title_type",
    function () {
      if (Number(jQuery(this).val()) == 2) {
        jQuery("#ano-6310-add-point .ano-6310_link").addClass("ano-6310-hide");
      } else {
        jQuery("#ano-6310-add-point .ano-6310_link").removeClass(
          "ano-6310-hide"
        );
        if (
          Number(
            jQuery("#ano-6310-add-point .ano-6310_button_link:checked").val()
          ) == 2
        ) {
          jQuery("#ano-6310-add-point .ano-6310_button").addClass(
            "ano-6310-hide"
          );
        } else {
          jQuery("#ano-6310-add-point .ano-6310_button").removeClass(
            "ano-6310-hide"
          );
        }
      }
    }
  );

  jQuery("body").on(
    "click",
    "#ano-6310-add-point .ano-6310_button_link",
    function () {
      if (Number(jQuery(this).val()) == 2) {
        jQuery("#ano-6310-add-point .ano-6310_button").addClass(
          "ano-6310-hide"
        );
      } else {
        jQuery("#ano-6310-add-point .ano-6310_button").removeClass(
          "ano-6310-hide"
        );
      }
    }
  );

  /* Edit link Setting */
  jQuery("body").on(
    "click",
    "#ano-6310-edit-point .ano-6310_link_title_type",
    function () {
      if (Number(jQuery(this).val()) == 2) {
        jQuery("#ano-6310-edit-point .ano-6310_link").addClass("ano-6310-hide");
      } else {
        jQuery("#ano-6310-edit-point .ano-6310_link").removeClass(
          "ano-6310-hide"
        );
        if (
          Number(
            jQuery("#ano-6310-edit-point .ano-6310_button_link:checked").val()
          ) == 2
        ) {
          jQuery("#ano-6310-edit-point .ano-6310_button").addClass(
            "ano-6310-hide"
          );
        } else {
          jQuery("#ano-6310-edit-point .ano-6310_button").removeClass(
            "ano-6310-hide"
          );
        }
      }
    }
  );

  jQuery("body").on(
    "click",
    "#ano-6310-edit-point .ano-6310_button_link",
    function () {
      if (Number(jQuery(this).val()) == 2) {
        jQuery("#ano-6310-edit-point .ano-6310_button").addClass(
          "ano-6310-hide"
        );
      } else {
        jQuery("#ano-6310-edit-point .ano-6310_button").removeClass(
          "ano-6310-hide"
        );
      }
    }
  );

  /* **************************************************************** */

  //Add Point Script
  let counter = jQuery(".ano-6310-main-svg polygon").length + 1;
  jQuery("body").on("click", ".ano-6310-add-place-save", function () {
    window.currentPoint = counter;
    let canvasArea = jQuery(".ano-6310-canvas-area").val();
    if (!canvasArea) {
      alert("Please select area first");
      return;
    }
    let elementType = Number(jQuery(".ano-6310-section-select").val());
    if (elementType == 0) {
      alert("Please select element type");
      jQuery(".ano-6310-section-select").focus();
      return;
    }

    let jsonObj = ano_6310_set_generate_json_data("#ano-6310-add-point ");
    let jsonObjParse = JSON.stringify(jsonObj);
    let cords = ano_6310_create_area(
      canvasArea,
      jsonObj.imageWidth,
      jsonObj.imageHeight,
      window.orgWidth,
      window.orgHeight
    );
    let html = `
        <polygon data-id="${window.currentPoint}" class="ano-6310-pol-loaded ano-6310-pol-${counter}" points="${cords}"/>
      `;
    let styleCSS = `
      .ano-6310-main-svg .ano-6310-pol-${counter}{
        fill: ${jsonObj.selectAreaColor} !important;
        stroke:${jsonObj.areaBorderColor} !important;
        stroke-width:${jsonObj.areaBorderSize}px !important;
      }
      .ano-6310-main-svg .ano-6310-pol-${counter}:hover{
        fill: ${jsonObj.selectAreaHoverColor} !important;
        stroke:${jsonObj.areaBorderHoverColor} !important;
        stroke-width:${jsonObj.areaBorderSize}px !important;
        cursor: pointer;
        filter: drop-shadow(0px 0px ${jsonObj.areaShadowith}px ${jsonObj.areaShadowColor});
      }
    `;
    jQuery(".ano-6310-main-svg").append(html);
    jQuery(`.ano-6310-pol-${counter}`).attr("data-json", jsonObjParse);
    jQuery(`<style type='text/css'>${styleCSS}</style>`).appendTo(
      `.ano-6310-annotation-box`
    );

    jQuery("#ano-6310-add-point").fadeOut(500);
    jQuery("body").css({
      overflow: "initial",
    });
    jQuery(".ano-6310-annotation-box").html(
      jQuery(".ano-6310-annotation-box").html()
    );
    counter++;
    jQuery(".ano-6310-canvas-area").val("");
  });

  //Delete Point Script
  jQuery("body").on("click", ".ano-6310-btn-point-delete", function (event) {
    event.preventDefault();
    jQuery(`.ano-6310-point-${window.currentPoint}`).remove();
    jQuery(`#ano-6310-edit-point`).fadeOut(500);
    jQuery("body").css({
      overflow: "initial",
    });
  });

  jQuery("body").on(
    "change",
    ".ano-6310-section-view-mood-select",
    function () {
      let val = parseInt(jQuery(this).val());
      console.log('val', val)
      if (val == 1) {
        console.log('val', val)
        if (
          jQuery(".ano-6310-section-view-mood-select").closest(
            "#ano-6310-add-point"
          ).length &&
          jQuery("#ano-6310-add-point .ano-6310-section-embedded").prop(
            "checked"
          ) == true
        ) {
          jQuery("#ano-6310-add-point .ano-6310-section-select:first").trigger(
            "click"
          );
        } else if (
          jQuery(".ano-6310-section-view-mood-select").closest(
            "#ano-6310-edit-point"
          ).length &&
          jQuery("#ano-6310-edit-point .ano-6310-section-embedded").prop(
            "checked"
          ) == true
        ) {
          jQuery("#ano-6310-edit-point .ano-6310-section-select:first").trigger(
            "click"
          );
        }

        jQuery(".ano-6310-embedded-input, .ano-6310-model-content").addClass(
          "ano-6310-hide"
        );
        jQuery(".ano-6310-embedded-input, .ano-6310-link-content").removeClass(
          "ano-6310-hide"
        );
        jQuery(".ano-6310-tooltip-img[data-id='01']").removeClass(
          "ano-6310-hide"
        );
      } else {
        jQuery(".ano-6310-embedded-input, .ano-6310-model-content").removeClass(
          "ano-6310-hide"
        );
        jQuery(".ano-6310-embedded-input, .ano-6310-link-content").addClass(
          "ano-6310-hide"
        );
        jQuery(".ano-6310-tooltip-img[data-id='01']").addClass("ano-6310-hide");

        let parentId = jQuery(this).closest(".ano-6310-modal").attr("id");
        if (
          (jQuery(".ano-6310-section-view-mood-select").closest(
            "#ano-6310-add-point"
          ).length &&
          jQuery(
            `#${parentId} .ano-6310-tooltip-img[data-id='01']`
          ).hasClass("ano-6310-active"))
        ) {
          jQuery(
            `#${parentId} .ano-6310-tooltip-img[data-id='03']`
          ).trigger("click");
        }
      }
    }
  );

  //Point Settings script
  jQuery("body").on("change", ".ano-6310-section-select", function () {
    let val = parseInt(jQuery(this).val());
    let parentId = jQuery(this).closest(".ano-6310-modal").attr("id");
    jQuery(
      ".ano-6310-tooltip-link, .ano-6310-embided, .ano-6310-external-link, .ano-6310-templates, .ano-6310-tooltip-img, .ano_6310_custom_template"
    ).addClass("ano-6310-hide");
    jQuery(`.ano-6310-type-${val}`).removeClass("ano-6310-hide");
    if (val == 1) {
      jQuery(".ano_6310_textarea").removeClass("ano-6310-hide");
      jQuery(
        ".ano-6310-tooltip-link, .ano-6310-templates, .toggle-tabs li[data-id='3']"
      ).removeClass("ano-6310-hide");
      if(parentId == 'ano-6310-edit-point'){
        jQuery(`#${parentId} .ano-6310-tooltip_img_section .ano-6310-tooltip-img[data-id='01']`).addClass('ano-6310-hide')
        jQuery(
          `#${parentId} .ano-6310-tooltip_img_section .ano-6310-tooltip-img[data-id='03'], #ano_6310_custom_code-html, .ano_6310_custom_code_popup-html`
        ).trigger("click");
      } else{
        jQuery(`#${parentId} .ano-6310-tooltip_img_section .ano-6310-tooltip-img[data-id='01']`).removeClass('ano-6310-hide')
        jQuery(
          `#${parentId} .ano-6310-tooltip_img_section .ano-6310-type-${val}:first, #ano_6310_custom_code-html, .ano_6310_custom_code_popup-html`
        ).trigger("click");
      }
      if(jQuery(`#${parentId} .ano-6310-section-view-mood-select:checked`).val() == '1'){
        jQuery(
          `#${parentId} .ano-6310-tooltip-img[data-id='01']`
        ).removeClass("ano-6310-hide");
      } else{
        jQuery(
          `#${parentId} .ano-6310-tooltip-img[data-id='01']`
        ).addClass("ano-6310-hide");
      }
      
    } else if (val == 2) {
      jQuery(
        ".ano_6310_textarea, .ano-6310-embided, .ano-6310-templates"
      ).removeClass("ano-6310-hide");
      jQuery('.toggle-tabs li[data-id="3"]').addClass("ano-6310-hide");
      jQuery(
        `#${parentId} .ano-6310-tooltip_img_section .ano-6310-type-${val}:first, #ano_6310_custom_code-html, .ano_6310_custom_code_popup-html`
      ).trigger("click");
    } else {
      jQuery(".ano_6310_custom_template").removeClass("ano-6310-hide");
      jQuery(
        '.ano_6310_font_prop, .ano_6310_template_embedded, .toggle-tabs li[data-id="3"]'
      ).addClass("ano-6310-hide");
      jQuery(".ano_6310_template_description").addClass("ano-6310-hide");
    }
  });

  //Template load  script

  jQuery("body").on("click", ".ano-6310-tooltip-img", function () {
    jQuery(".ano-6310-tooltip-img").removeClass("ano-6310-active");
    jQuery(this).closest(".ano-6310-tooltip-img").addClass("ano-6310-active");
    let val = jQuery(this).closest(".ano-6310-tooltip-img").attr("data-id");
    jQuery(".ano-6310-form").addClass("ano-6310-hide");
    jQuery(`.ano-6310-form-${val}`).removeClass("ano-6310-hide");

    ano_6310_set_html_code(val);
  });

  //  tooltip embedded code show hide add point

  jQuery("body").on(
    "change",
    "#ano-6310-add-point .ano-6310-open-popup",
    function () {
      let val = parseInt(jQuery(this).val());
      jQuery(
        "#ano-6310-add-point .popup-user-embedded, .tooltip-custom-html-css, .tooltip-embedded"
      ).addClass("ano-6310-hide");
      if (val == 2) {
        jQuery("#ano-6310-add-point .popup-user-embedded").removeClass(
          "ano-6310-hide"
        );
      }
      if (val == 1) {
        jQuery(
          "#ano-6310-add-point .popup-user-embedded, .tooltip-custom-html-css, .tooltip-embedded"
        ).addClass("ano-6310-hide");
      }
    }
  );
  jQuery("body").on(
    "change",
    "#ano-6310-add-point .ano-6310-open-popup-custom-use",
    function () {
      let val = parseInt(jQuery(this).val());
      jQuery("#ano-6310-add-point .tooltip-embedded").removeClass(
        "ano-6310-hide"
      );
      if (val == 2) {
        jQuery("#ano-6310-add-point .tooltip-embedded").removeClass(
          "ano-6310-hide"
        );
        jQuery("#ano-6310-add-point .tooltip-custom-html-css").addClass(
          "ano-6310-hide"
        );
      }
      if (val == 1) {
        jQuery("#ano-6310-add-point .tooltip-embedded").addClass(
          "ano-6310-hide"
        );
        jQuery("#ano-6310-add-point .tooltip-custom-html-css").removeClass(
          "ano-6310-hide"
        );
      }
    }
  );
  //  tooltip embedded code show hide edit point
  jQuery("body").on(
    "change",
    "#ano-6310-edit-point .ano-6310-open-popup",
    function () {
      let val = parseInt(jQuery(this).val());
      if (val == 2) {
        jQuery("#ano-6310-edit-point .popup-user-embedded").removeClass(
          "ano-6310-hide"
        );
      }
      if (val == 1) {
        jQuery(
          "#ano-6310-edit-point .popup-user-embedded, .tooltip-custom-html-css, .tooltip-embedded"
        ).addClass("ano-6310-hide");
      }
    }
  );
  jQuery("body").on(
    "change",
    "#ano-6310-edit-point .ano-6310-open-popup-custom-use",
    function () {
      let val = parseInt(jQuery(this).val());
      jQuery("#ano-6310-edit-point .tooltip-embedded").removeClass(
        "ano-6310-hide"
      );
      if (val == 2) {
        jQuery("#ano-6310-edit-point .tooltip-embedded").removeClass(
          "ano-6310-hide"
        );
        jQuery("#ano-6310-edit-point .tooltip-custom-html-css").addClass(
          "ano-6310-hide"
        );
      }
      if (val == 1) {
        jQuery("#ano-6310-edit-point .tooltip-embedded").addClass(
          "ano-6310-hide"
        );
        jQuery("#ano-6310-edit-point .tooltip-custom-html-css").removeClass(
          "ano-6310-hide"
        );
      }
    }
  );

  //Combine JSON and push it in an input field
  jQuery("body").on("click", ".ano-6310-insert-ja-data", function () {
    let jsonCollection = [];
    jQuery(`.ano-6310-main-svg polygon`).each(function () {
      let jsonObj = jQuery(this).attr("data-json");
      if (jsonObj) {
        jsonObj = JSON.parse(jsonObj);
        jsonObj.points = jQuery(this).attr("points");
        jsonCollection.push(jsonObj);
      }
    });
    jQuery("#ano_6310_json_field").val(JSON.stringify(jsonCollection));
  });

  //Manage icon remove start
  jQuery("body").on("click", ".fa-minus-circle", function () {
    jQuery(this).closest("td").find("input").val("");
  });
  //Manage icon remove end
});

function ano_6310_set_html_code(val) {
  let htmlCode = "";
  if (val == "01") {
    htmlCode = ` 
    <div class="ano-6310-tooltip ano-6310-template-01">
      <a href="#">Hover here</a>
      <div class="ano-6310-template-01-hover-content">Tooltip text</div>
    </div>
      `;
  } else if (val == "03") {
    htmlCode = `
    <div class="ano-6310-tooltip ano-6310-template-03 ano-6310-hide">
      <a href="#"><img src="img/4 (2).png" alt="" ></a>
        <div class="ano-6310-template-03-hover-content">
          <div class="ano-6310-template-03-tooltip-testimonial">
            <div class="ano-6310-template-03-tooltip-pic">
              <img src="img/7.png" alt="">
            </div>
            <div class="ano-6310-template-03-tooltip-testimonial-content">
              <div class="ano-6310-template-03-tooltip-testimonial-title">Williamson
                <div class="ano-6310-template-03-tooltip-post">Web Designer</div>
              </div>
              <div class="ano-6310-template-03-tooltip-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur
                debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit
                tempora voluptatem. Est, exercitationem id ipsa ipsum laboriosam perferendis temporibus!
              </div>
            </div>
          </div>
        </div>
    </div>
      `;
  } else if (val == "04") {
    htmlCode = `      
    <div class="ano-6310-tooltip ano-6310-template-04 ano-6310-hide">
      <a href="#"><img src="img/4 (2).png" alt=""></a>
        <div class="ano-6310-template-04-tooltip-testimonial">
          <div class="ano-6310-template-04-tooltip-testimonial-content">
            <div class="ano-6310-template-04-tooltip-pic">
              <img src="img/7.png">
            </div>
            <div class="ano-6310-template-04-tooltip-title">Williamson</div>
            <div class="ano-6310-template-04-tooltip-post">Web Developer</div>
          </div>
          <div class="ano-6310-template-04-tooltip-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dolor tellus, efficitur ut tortor id,
            molestie egestas nibh. In blandit ex at erat vehicula molestie. Mauris vel volutpat nulla. Suspendisse lorem
            ex, congue at elit id, tincidunt tempor orci. Nullam nec augue ac tellus rhoncus tincidunt nec ut ligula.
            Praesent.
          </div>
        </div>
    </div>   
      `;
  } else if (val == "05") {
    htmlCode = `      
    <div class="ano-6310-tooltip ano-6310-template-05 ano-6310-hide">
      <a href="#"><img src="img/4 (2).png" alt=""></a>
      <div class="ano-6310-template-05-hover-content">
        <div class="ano-6310-template-05-tooltip-testimonial">
          <div class="ano-6310-template-05-tooltip-testimonial-content">
            <div class="ano-6310-template-05-tooltip-pic">
              <img src="img/7.png">
            </div>
            <div class="ano-6310-template-05-tooltip-title">Williamson</div>
            <div class="ano-6310-template-05-tooltip-post">Web Developer</div>
          </div>
          <div class="ano-6310-template-05-tooltip-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dolor tellus, efficitur ut tortor id,
            molestie egestas nibh. In blandit ex at erat vehicula molestie. Mauris vel volutpat nulla. Suspendisse lorem
            ex, congue at elit id, tincidunt tempor orci. Nullam nec augue ac tellus rhoncus tincidunt nec ut ligula.
            Praesent.
          </div>
        </div>
      </div>
    </div>
      `;
  } else if (val == "02") {
    htmlCode = `      
    <div class="ano-6310-tooltip ano-6310-template-02">      
      <div class="ano-6310-template-02-hover-content">
        <div class="ano-6310-template-02-content">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25125110.814096835!2d94.35061650599457!3d23.913222352616348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1636176093357!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>
      `;
  }

  jQuery(`textarea[name='ano_6310_custom_code']`).val(htmlCode);
  jQuery(
    `#ano_6310_custom_code-html, .ano_6310_custom_code_popup-html`
  ).trigger("click");
}

function ano_6310_icon_image_select() {
  //Manage icon Start
  jQuery("#icon-filter").on("keyup", function () {
    var value = jQuery(this).val().toLowerCase();
    jQuery(".ano-6310-choose-icon li").filter(function () {
      jQuery(this).toggle(
        jQuery(this).attr(`data-icon-name`).toLowerCase().indexOf(value) > -1
      );
    });
  });

  jQuery("body").on(
    "click",
    "#ano-6310-font-icon-close, .ano-6310-font-awesome-close",
    function () {
      jQuery("#ano_6310_social_icon").fadeOut(500);
    }
  );

  jQuery("body").on(
    "click",
    "ano-6310-plus-icons, .ano-6310-plus-icons i",
    function () {
      let selIds = jQuery(this)
        .closest(".ano-6310-plus-icons")
        .siblings(".ano-6310-form-input")
        .attr("id");
      jQuery("ul.ano-6310-choose-icon").attr("data-current-id", selIds);
      if (jQuery("#icon-filter").val()) {
        jQuery("#icon-filter").val("");
        jQuery(".ano-6310-choose-icon li").filter(function () {
          jQuery(this).toggle();
        });
      }
      jQuery("#ano_6310_social_icon").fadeIn(500);
      jQuery("body").css({
        overflow: "hidden",
      });
      jQuery("#icon-filter").focus();
      return false;
    }
  );

  jQuery("body").on("click", "ul.ano-6310-choose-icon li", function () {
    let cls = jQuery(this).find("i").attr("class");
    jQuery(`.` + jQuery("ul.ano-6310-choose-icon").attr("data-current-id")).val(
      cls
    );
    jQuery("#ano_6310_social_icon").fadeOut(500);
  });
  //Manage icon End

  /* Main Image Upload ########### */
  jQuery("body").on("click", ".ano-6310-upload-image", function (e) {
    e.preventDefault();
    var image = wp
      .media({
        title: "Upload Image",
        multiple: false,
      })
      .open()
      .on("select", function (e) {
        var uploaded_image = image.state().get("selection").first();
        var image_url = uploaded_image.toJSON().url;
        jQuery(`.ano-6310-main-image`).attr("src", image_url);
        jQuery(`input[name='main_image']`).val(image_url);
        jQuery(`svg.ano-6310-main-svg`).css({
          "background-image": `url(${image_url})`,
        });
        jQuery("input.ano-6310-canvas-area").attr(
          "ano-6310-image-url",
          image_url
        );
        setTimeout(function () {
          let mainImg = jQuery(".ano-6310-main-image");
          window.orgWidth = mainImg.width();
          window.orgHeight = mainImg.height();
          jQuery(".ano-6310-main-svg")
            .attr("width", window.orgWidth)
            .attr("height", window.orgHeight);
          jQuery(".ano-6310-main-svg").css({
            "background-size":
              window.orgWidth + "px " + window.orgHeight + "px",
          });
        }, 500);
      });

    jQuery("#ano_6310_add_new_media").css({
      "overflow-x": "hidden",
      "overflow-y": "auto",
    });
  });

  //Add Point
  jQuery("body").on("change", ".ano-6310_icon_type", function (e) {
    let value = Number(jQuery(this).val());
    jQuery(".ano-6310-marker").addClass("ano-6310-hide");
    jQuery(`.ano-6310-marker-type-${value}`).removeClass("ano-6310-hide");
  });

  /* ######### Custom Icon Media Start ########### */
  jQuery("body").on("click", ".ano-6310-icon-upload", function (e) {
    e.preventDefault();
    let dataId = jQuery(this).attr("data-id");

    var image = wp
      .media({
        title: "Upload Image",
        multiple: false,
      })
      .open()
      .on("select", function (e) {
        var uploaded_image = image.state().get("selection").first();
        var image_url = uploaded_image.toJSON().url;
        jQuery(`.${dataId}`).val(image_url);
      });

    jQuery("#ano_6310_add_new_media").css({
      "overflow-x": "hidden",
      "overflow-y": "auto",
    });
  });
  /* ######### Custom Icon Media End ########### */
}
