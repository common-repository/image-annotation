window.currentPoint = 0;
jQuery(document).ready(function () {
  //Add Point Modal
  jQuery("body").on("click", ".ano-6310-add-point", function () {
    if(jQuery('.ano-6310-main-image').attr('src') == ''){
      alert('Select upload image first');
      return;
    }
    jQuery("#ano-6310-add-point .ano-6310-templates").removeClass(
      "ano-6310-hide"
    );

    jQuery("#ano-6310-add-point").fadeIn(500);
    jQuery("body").css({
      overflow: "hidden",
    });
    ano_6310_reset_fields();
    jQuery(
      `
      #ano-6310-add-point .ano-6310-section-view-mood-select:last
      `
    ).trigger("click");
    jQuery(
      `
      #ano-6310-add-point .ano-6310-section-select:last
      `
    ).trigger("click");
    jQuery(
      `
      #ano-6310-add-point .ano-6310-section-select:first
      `
    ).trigger("click");

    jQuery(
      `#ano-6310-add-point .ano-6310-tooltip-img:first-child, 
      #ano-6310-add-point .toggle-tabs li:first-child, 
      #ano-6310-add-point .ano-6310_icon_type:first-child, 
      #ano-6310-add-point .ano-6310-section-select:first,
      #ano-6310-add-point .ano-6310-section-view-mood-select:first,
      #ano-6310-add-point .ano-6310-open-new-tab:first,
      #ano-6310-add-point .ano-6310_button_link:first,
      #ano-6310-add-point .ano-6310-open-popup:last,
      #ano-6310-add-point .ano-6310_link_title_type:last,
      #ano-6310-add-point .ano-6310_button_link:last,
      #ano-6310-add-point .ano-6310_popover_type:first
      `
    ).trigger("click");
    jQuery(".ano-6310-tab-2, .ano-6310-tab-3").addClass("ano-6310-hide");

    ano_6310_canvas_init("#ano-6310-add-point");
    return false;
  });

  //Edit Point Modal
  jQuery("body").on("click", ".ano-6310-pol-loaded", function () {
    window.currentPoint = jQuery(this).attr("data-id");
    jQuery("#ano-6310-edit-point").fadeIn();
    jQuery("body").css({
      overflow: "hidden",
    });
    let pointList = ano_6310_set_json_data();
    ano_6310_canvas_init("#ano-6310-edit-point");
    setTimeout(function () {
      jQuery("#ano-6310-edit-point .ano-6310-canvas-area").val(pointList);
      jQuery("#ano-6310-edit-point .ano-6310-canvas-area").trigger("change");
    }, 600);
    return false;
  });

  // update data
  jQuery("body").on("click", ".ano-6310-update-place-save", function () {
    jQuery("#ano-6310-edit-point .ano-6310-section-view-mood-select").val();
  });
  jQuery("body").on("click", ".ano-6310-update-place-save", function () {
    let elementType = Number(
      jQuery("#ano-6310-edit-point .ano-6310-section-select").val()
    );
    if (elementType == 0) {
      alert("Please select element type");
      jQuery(".ano-6310-section-select").focus();
      return;
    }
    let canvasArea = jQuery("#ano-6310-edit-point .ano-6310-canvas-area").val();

    let jsonObj = ano_6310_set_generate_json_data("#ano-6310-edit-point ");

    let jsonObjParse = JSON.stringify(jsonObj);
    let cords = ano_6310_create_area(
      canvasArea,
      jsonObj.imageWidth,
      jsonObj.imageHeight,
      window.orgWidth,
      window.orgHeight
    );
    jQuery(`.ano-6310-main-svg .ano-6310-pol-${window.currentPoint}`).remove();
    let html = `
        <polygon data-id="${window.currentPoint}" class="ano-6310-pol-loaded ano-6310-pol-${window.currentPoint}" points="${cords}"/>
      `;
    let styleCSS = `
      .ano-6310-main-svg .ano-6310-pol-${window.currentPoint}{
        fill: ${jsonObj.selectAreaColor} !important;
        stroke:${jsonObj.areaBorderColor} !important;
        stroke-width:${jsonObj.areaBorderSize}px !important;
      }
      .ano-6310-main-svg .ano-6310-pol-${window.currentPoint}:hover{
        fill: ${jsonObj.selectAreaHoverColor} !important;
        stroke:${jsonObj.areaBorderHoverColor} !important;
        stroke-width:${jsonObj.areaBorderSize}px !important;
        cursor: pointer;
        filter: drop-shadow(0px 0px ${jsonObj.areaShadowith}px ${jsonObj.areaShadowColor});
      }
    `;
    jQuery(".ano-6310-main-svg").append(html);
    jQuery(`.ano-6310-pol-${window.currentPoint}`).attr(
      "data-json",
      jsonObjParse
    );
    jQuery(`<style type='text/css'>${styleCSS}</style>`).appendTo(
      `.ano-6310-annotation-box`
    );

    jQuery("#ano-6310-edit-point").fadeOut(500);
    jQuery("body").css({
      overflow: "initial",
    });
    jQuery(".ano-6310-annotation-box").html(
      jQuery(".ano-6310-annotation-box").html()
    );
    jQuery(`.ano-6310-pol-${window.currentPoint}`).attr(
      "data-json",
      jsonObjParse
    );

    jQuery(".ano-6310-canvas-area").val("");
  });

  //Close Modal Script
  jQuery("body").on(
    "click",
    ".ano-6310-close, .ano-6310-btn-close",
    function () {
      jQuery(".ano-6310-annotation-box").html(
        jQuery(".ano-6310-annotation-box").html()
      );
      jQuery(`
            #ano-6310-add-point,
            #ano-6310-edit-point             
          `).fadeOut(500);
      jQuery("body").css({
        overflow: "initial",
      });
    }
  );

  jQuery(".toggle-tabs li").click(function () {
    let id = jQuery(this).attr("data-id");
    jQuery(".toggle-tabs li").removeClass("active-tab");
    jQuery(this).addClass("active-tab");
    jQuery(".ano-6310-tab").addClass("ano-6310-hide");
    jQuery(`.ano-6310-tab-${id}`).removeClass("ano-6310-hide");
  });

  jQuery("body").on("click", ".ano-6310-undo", function () {
    let ids = jQuery(this).closest(".ano-6310-modal").attr("id");
    let selector = jQuery(`#${ids} .ano-6310-canvas-area`);
    let point = selector.val();
    if (point) {
      let pointList = point.split(",");
      if (pointList.length) {
        pointList.splice(pointList.length - 2, 2);
        if (pointList.length) {
          selector.val(pointList.join(","));
        } else {
          selector.val("");
        }
        selector.trigger("change");
      }
    }
  });
});

function ConfirmDelete() {
  if (confirm("Are you sure you want to Delete?")) {
    jQuery(`.ano-6310-main-svg .ano-6310-pol-${window.currentPoint}`).remove();
    jQuery(`#ano-6310-edit-point`).fadeOut(500);
    jQuery("body").css({ overflow: "initial" });
  }
  return false;
}
