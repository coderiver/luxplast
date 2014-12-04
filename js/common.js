head.ready(function() {

// slick

	$('.js-banner').slick({
		dots: true,
		arrows: true,
		adaptiveHeight: true
	});

// sticky header shadow

	$(window).scroll(function(){
		if ($(window).scrollTop() > 1) {
			$('.header__in').addClass('is-sticky');
		}
		else{
			$('.header__in').removeClass('is-sticky');
		}
	});	
	
});