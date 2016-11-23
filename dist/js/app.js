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
});
//# sourceMappingURL=app.js.map
