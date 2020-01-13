// semantic's module function
$.fn.uiParallax = function() {
	$(this).each(function() {
		var imageUrl = $(this).data('imgsrc');
		$(this).css('background-image', 'url(' + imageUrl + ')');
	});
};

// user's code to initialise parallaxes
$('.ui.parallax').uiParallax();
