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
		prevScroll = window.scrollY || 0;

	if(headTop.length == 0 || headTop.length > 1 || headMain.length == 0 || headMain.length > 1) {
		return;
	}

	if(window.innerWidth < 768) {
		return;
	}

	$(window).scroll(function(event) {
		var scrollY = window.scrollY || 0;
		if(scrollY > prevScroll) {
			headTop.css("top", (-headTop.height()));
			headMain.css("top", "0px");
		} else {
			headTop.css("top", "0px");
			headMain.css("top", headTop.height());
		}
		prevScroll = scrollY;
	});
}

//# sourceMappingURL=app.js.map
