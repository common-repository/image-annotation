let ano6310Timeout;
let ano6310LastId = "";

function ano_6310_hide() {
  ano6310Timeout = setTimeout(function () {
    jQuery(".ano-6310-hover-content").css("transform", "scale(0)");
    let hoverContent = jQuery(".ano-6310-hover-content iframe");
    if (hoverContent.length) {
      hoverContent.each(function () {
        let src = jQuery(this).attr("src");
        if (src.includes("youtube") || src.includes("vimeo")) {
          jQuery(this).attr("src", "");
          jQuery(this).attr("src", src);
        }
      });
    }
  }, 500);
}

window.addEventListener("load", function () {
  ano6310RemoveLazyLoad(0);
  ano6310RemoveLazyLoad(500);
  ano6310RemoveLazyLoad(5000);
  ano6310RemoveLazyLoad(10000);

  setTimeout(() => {
    let mainImgList = jQuery(".ano-6310-main-image");
    if (mainImgList.length) {
      mainImgList.each(function () {
        let mainImg = jQuery(this);
        let orgWidth = mainImg.width();
        let orgHeight = mainImg.height();
        jQuery(".ano-6310-main-svg")
          .attr("width", orgWidth)
          .attr("height", orgHeight);
        jQuery(".ano-6310-main-svg").css({
          "background-size": orgWidth + "px " + orgHeight + "px",
          display: "block",
        });
        mainImg.css({ display: "none" });
        ano_6310_default_polygon(orgWidth, orgHeight);
      });
    }
  }, 1000);

  setTimeout(function () {
    jQuery(".ano-6310-main-svg polygon").tooltip({
      container: "body",
      placement: "top",
      html: "true",
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function (position, feedback) {
          jQuery(this).css(position);
        },
      },
      content: function () {
        return jQuery(
          ".ano-6310-hover-content-" + jQuery(this).attr("data-id")
        ).html();
      },
      track: true,
    });
  }, 1000);

  jQuery(".ano-6310-drag")
    .mouseover(function () {
      clearTimeout(ano6310Timeout);
      let pointId = jQuery(this).attr("data-id");
      let id = jQuery(this).closest(".ano-6310-annotation-box").attr("data-id");
      setTooltipPosition(pointId, id);
      if (ano6310LastId && ano6310LastId != pointId) {
        jQuery(".ano-6310-hover-content").css("transform", "scale(0)");
      }
      ano6310LastId = pointId;
      jQuery(".ano-6310-hover-content-" + id + "-" + pointId)
        .stop()
        .css("transform", "scale(1)");
    })
    .mouseout(ano_6310_hide);

  jQuery(".ano-6310-hover-content")
    .mouseover(function () {
      clearTimeout(ano6310Timeout);
    })
    .mouseout(ano_6310_hide);

  //Open new tab
  jQuery("body").on("click", ".ano-6310-pol-loaded", function () {
    let url = jQuery(this).attr("data-link-url");
    if (url) {
      console.log(1);
      let target = jQuery(this).attr("data-target");
      if (target) {
        window.open(url, "_blank").focus();
      } else {
        window.location = url;
      }
    }
  });

  //Popup Open
  jQuery("body").on("click", ".ano-6310-modal-element", function () {
    let dataId = jQuery(this).closest(".ano-6310-pol-loaded").attr("data-id");

    let selector = jQuery(".ano-6310-popup-" + dataId);

    if (selector.length) {
      let width = selector.find("iframe").attr("width");
      let height = selector.find("iframe").attr("height");
      let windowWidth = jQuery(window).width();

      if (!width) {
        width = windowWidth > 700 ? 700 : windowWidth;
        height = windowWidth > 700 ? 490 : "auto";
      } else if (windowWidth < width) {
        height = (windowWidth * height) / width;
        width = windowWidth;
      }
      selector.find("iframe").css({
        width: width + "px",
        height: height + "px",
      });
      selector
        .find("iframe")
        .closest(".ano-6310-template-02-hover-content")
        .css({
          width: width + "px",
          height: height + "px",
        });
      selector.css({
        display: "block",
      });
      selector.find(".ano-6310-hover-content").css({
        display: "block",
        width: width + "px",
        height: height + "px",
        transform: "scale(1) !important",
      });
      jQuery("body").css({
        overflow: "hidden",
      });
    }
  });

  jQuery(document).mouseup(function (e) {
    var container = jQuery(".ano-6310-modal .ano-6310-modal-content > div");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      jQuery(".ano-6310-modal").css({
        display: "none",
      });
      jQuery("body").css({
        overflow: "initial",
      });
    }
  });

  let annotationWidth = jQuery(".ano-6310-annotation-box").width();
  jQuery(".ano-6310-drag").each(function () {
    let jsonData = jQuery(this).attr("data-json");
    jsonData = JSON.parse(jsonData);
    let calData =
      (Number(jsonData.iconWidth) * annotationWidth) / Number(jsonData.tWidth);
    if (annotationWidth > Number(jsonData.iconWidth)) {
      calData = calData / 2 - Number(jsonData.iconWidth) / 2;
      jQuery(this).attr(
        "style",
        "left: calc($" +
          jsonData.xPos +
          "% + " +
          calData +
          "px) !important; bottom: " +
          jsonData.yPos +
          "%; display: inline-block;"
      );
    } else {
      calData = calData / 2;
      jQuery(this).attr(
        "style",
        "left: calc(" +
          jsonData.xPos +
          "% - " +
          calData +
          "px) !important; bottom: " +
          jsonData.yPos +
          "%; display: inline-block;"
      );
    }
  });

  //Hover iFrame tooltip responsive
  let hoverContent = jQuery(
    ".ano-6310-modal .ano-6310-template-02-content iframe"
  );
  if (hoverContent.length) {
    hoverContent.each(function () {
      let iframeWidth = jQuery(this).attr("width");
      let iframeHeight = jQuery(this).attr("height");
      let deviceWidth = jQuery(window).width();
      iframeWidth =
        iframeWidth != undefined && iframeWidth != 0 && iframeWidth != ""
          ? iframeWidth
          : 496;
      iframeHeight =
        iframeHeight != undefined && iframeHeight != 0 && iframeHeight != ""
          ? iframeHeight
          : 397;

      if (deviceWidth < iframeWidth) {
        iframeHeight = (iframeHeight * deviceWidth) / iframeWidth;
        jQuery(this).attr("width", deviceWidth);
        jQuery(this).attr("height", iframeHeight);
      }
    });
  }
});

function ano6310RemoveLazyLoad(timeValue) {
  //Remove lazyload
  setTimeout(() => {
    var $allImages = jQuery(".ano-6310-img");
    $allImages.each(function () {
      var image = jQuery(this).attr("data-ano-value");
      var src = jQuery(this).attr("src");
      var alt = jQuery(this).attr("alt");
      var className = jQuery(this).attr("data-ano-cls");

      var attributes = this.attributes;
      var i = attributes.length;
      while (i--) {
        let attrName = attributes[i].name.toLowerCase();
        if (
          attrName != "src" &&
          attrName != "class" &&
          attrName != "alt" &&
          attrName != "data-ano-value" &&
          attrName != "data-ano-cls" &&
          attrName != "style"
        ) {
          this.removeAttributeNode(attributes[i]);
        }
      }
      if (src != image) {
        jQuery(this).attr({
          src: image,
          class: className,
          alt: alt,
          "data-ano-value": image,
          "data-ano-cls": className,
        });
      } else {
        jQuery(this).attr({ class: className });
      }
    });
  }, timeValue);
}

function setTooltipPosition(pointId, id) {
  let jsonData = JSON.parse(
    jQuery(
      ".ano-6310-annotation-box-" + id + ' div[data-id="' + pointId + '"]'
    ).attr("data-json")
  );

  if (jsonData.selectedTemplate == "02") {
    let iFrame = jQuery(
      ".ano-6310-hover-content-" + id + "-" + pointId + " iframe"
    );
    let iframeWidth = iFrame.attr("width");
    let iframeHeight = iFrame.attr("height");

    iframeWidth =
      iframeWidth != undefined && iframeWidth != 0 && iframeWidth != ""
        ? iframeWidth
        : 496;
    iframeHeight =
      iframeHeight != undefined && iframeHeight != 0 && iframeHeight != ""
        ? iframeHeight
        : 397;

    jQuery(
      ".ano-6310-hover-content-" +
        id +
        "-" +
        pointId +
        " iframe, .ano-6310-hover-content-" +
        id +
        "-" +
        pointId +
        " .ano-6310-template-02-hover-content"
    ).css({
      width: iframeWidth + "px",
      height: iframeHeight + "px",
    });
  }
  let icons = jQuery(
    ".ano-6310-annotation-box-" +
      id +
      ' div[data-id="' +
      pointId +
      '"] .ano-6310-point-icons'
  );
  let tempIconSize = icons.width() / 2;
  let fromLeft = icons.offset().left;
  let fromRight = jQuery(window).width() - fromLeft;
  let fromTop = icons.offset().top;
  let iconHeight = icons.height();

  let content = jQuery(".ano-6310-hover-content-" + id + "-" + pointId);
  let pointWidth = content.width() / 2;
  let contentHeight = content.height();
  let toolTipPosition = calculateToolTipPosition(
    fromTop,
    tempIconSize,
    contentHeight
  );

  if (fromLeft + tempIconSize < pointWidth) {
    content.css({
      left: "0px",
      right: "auto",
    });
  } else if (fromRight + tempIconSize < pointWidth) {
    content.css({
      left: "auto",
      right: "0px",
    });
  } else {
    let temp = fromLeft + tempIconSize - pointWidth;
    content.css({
      left: temp + "px",
      right: "auto",
    });
  }

  let topPos;
  if (toolTipPosition == 1) {
    fromTop -= contentHeight + 10;
    topPos = fromTop + "px";
  } else if (toolTipPosition == 2) {
    fromTop += iconHeight + 5;
    topPos = fromTop + "px";
  }
  content.css({
    top: topPos,
  });
}

function calculateToolTipPosition(fromTop, tempIconSize, contentHeight) {
  let scrollTop = jQuery(window).scrollTop();
  let deviceHeight = jQuery(window).height();
  let center = scrollTop + deviceHeight / 2;
  let iconCenter = fromTop + tempIconSize + 10;

  if (fromTop - contentHeight > scrollTop) {
    //Space available in top
    return 1;
  } else if (iconCenter > center) {
    //Space not available in top but more space than bottom
    return 1;
  } else {
    return 2;
  }
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
