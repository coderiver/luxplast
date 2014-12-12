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
		return false;
	});
	$(document).on('click', function(event){
		$('.js-menu').removeClass('is-open');
		$('.mob-menu').removeClass('is-open');
		$('body').removeClass('no-scroll');
		$('html').removeClass('no-scroll');
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

// mobile menu toggle

	$('.js-mob-menu').on('click', function(){
		$(this).parent().toggleClass('is-open');
		$('body').toggleClass('no-scroll');
		$('html').toggleClass('no-scroll');
		return false;
	});
	$('.js-mob-menu').on('click', function(){
		event.stopPropagation();
	});

// main page catalog scroll
 
	function slickInit() {
		if ($('.catalog').length) {

			var w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			
			if (w <= 768) {
				
				if (!$('.catalog').hasClass('is-inited')) {
					$('.catalog').addClass('is-inited');
					$('.js-catalog').slick({
						arrows: false,
						dots: true,
						slidesToShow: 2,
						slide: 'div.js-catalog-slide',
						responsive: [
							{
						    	breakpoint: 480,
						    	settings: {
						    	  slidesToShow: 1
						    	}
						  }
						]
					});
				};
			}
			else {
				if ($('.catalog').hasClass('is-inited')) {
					$('.js-catalog').unslick();
				};
				$('.catalog').removeClass('is-inited');
			} 
		};
 	}
 	slickInit();

// scroll
	$(window).scroll(function(){
		headerScroll();
	});

// resize
	$(window).resize(function(){
		menuWidth();
		slickInit();
	});

});