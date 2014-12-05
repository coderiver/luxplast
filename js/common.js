head.ready(function() {

// slick

	$('.js-banner').slick({
		dots: true,
		arrows: true,
		adaptiveHeight: true
	});

// sticky header shadow

	function headerScroll(){
		if ($(window).scrollTop() > 1) {
			$('.header__in').addClass('is-sticky');
		}
		else{
			$('.header__in').removeClass('is-sticky');
		}
	}
	headerScroll();	
	
// menu toggle
	$('.js-nav-btn').on('click', function(){
		if ($('.js-menu').hasClass('is-open')) {
			$('.js-menu').removeClass('is-open');
		}
		else{
			$('.js-menu').addClass('is-open');
			event.stopPropagation();
		}
		
	});
	$(document).on('click', function(event){
		$('.js-menu').removeClass('is-open');
	});
	$('.js-menu').on('click', function(){
		event.stopPropagation();
	});

	function menuWidth(){
		var left = $('.js-nav-btn').offset().left;
		width = (left + 46);
		$('.js-menu').css('width', width);
	};
	menuWidth();

// scroll
	$(window).scroll(function(){
		headerScroll();
	});

// resize
	$(window).resize(function(){
		menuWidth();
	});

});