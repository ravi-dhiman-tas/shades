"use strict";

//
$(function () {
	$("[data-toggler]").each(function () {
		$(this).click(function (e) {
			var pclass = $(this).attr("data-toggler");
			e.preventDefault();
			var parent = $(this).closest("." + pclass);
			parent.toggleClass("open");
			$(this).toggleClass("open");
		});
	});

	$("[data-toggle-target]").each(function () {
		$(this).click(function (e) {
			var pclass = $(this).attr("data-toggle-target");
			e.preventDefault();
			var parent = $(pclass);
			parent.toggleClass("open");
			$(this).toggleClass("open");
		});
	});

	$("[data-hide]").each(function(){
		$(this).click(function (e) {
			e.preventDefault();
			var elm = $(this).attr("data-hide");
			if(elm.indexOf(" ") != -1) {
				var el = elm.split(" ");
				$(el).each(function(){
					if( $(this).hasClass("open") ) {
						$(this).removeClass("open");
					}
				});
			} else {
				if( $(elm).hasClass("open") ) {
					$(elm).removeClass("open");
				}
			}
		});
	});

	stickyNavbar();
});

function stickyNavbar() {
	var headTop = $(".ti-nav-top"),
	    headMain = $(".ti-navbar"),
		leftPanel = $(".ti-sidebar-left"),
		footer = $("#id_footer_main"),
		prevScroll = window.scrollY || 0;

	if(headTop.length == 0 || headTop.length > 1 || headMain.length == 0 || headMain.length > 1 || leftPanel.length == 0) {
		return;
	}

	if(window.innerWidth < 768) {
		return;
	}

	var footerHeight = footer.length != 0 ? footer.height() : 0;

	var leftPanelPosition = leftPanel.position(),
		lpTop = leftPanelPosition.top,
		lpLeft = leftPanelPosition.left,
		hOff = window.innerHeight - footerHeight - lpTop - 30;

	leftPanel.css("width", (leftPanel.parent().width() + 20))
		 .css("height", hOff);

	$(window).scroll(function(event) {
		var scrollY = window.scrollY || 0;
		if(scrollY > prevScroll) {
			headTop.css("top", (-headTop.height()));
			headMain.css("top", "0px");
			leftPanel.css("top", (lpTop - headTop.height()));
		} else {
			headTop.css("top", "0px");
			headMain.css("top", headTop.height());
			leftPanel.css("top", (lpTop));
		}
		prevScroll = scrollY;
	});
}

//# sourceMappingURL=app.js.map
