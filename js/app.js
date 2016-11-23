//
$(function(){
	$("[data-toggler='menu']").each(function(){
		$(this).click(function(e){
			e.preventDefault;
			let parent = $(this).closest(".menu");
			parent.toggleClass("open");
		})
	});
});
