"use strict";

//
$(function () {
	$("[data-toggler='menu']").each(function () {
		$(this).click(function (e) {
			var pclass = $(this).attr("data-toggler");
			e.preventDefault();
			var parent = $(this).closest("." + pclass);
			parent.toggleClass("open");
		});
	});
});
//# sourceMappingURL=app.js.map
