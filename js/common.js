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
			$('.header').addClass('is-sticky');
		}
		else{
			$('.header').removeClass('is-sticky');
		}
	}
	headerScroll();	
	
// dropdown

	function dropdown() {
		var btn = $('.js-dropdown');
		btn.on('click', function(){
			$('.dropdown').removeClass('is-open');
			$(this).parent().find('.dropdown').toggleClass('is-open');
			event.stopPropagation();
		});
	}
	dropdown();
	$('.js-dropdown-close').on('click', function(){
		$(this).parents('.dropdown').removeClass('is-open');
	});
	$('.dropdown').on('click', function(){
		event.stopPropagation();
	})

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
		event.stopPropagation();
		return false;
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

// feedback popup toggle

	$('.js-feedback').on('click', function(event) {
		$(this).toggleClass('is-open');
		$(this).parent().find('.js-feedback-popup').toggleClass('is-open');
		event.stopPropagation();
	});
	$('.js-feedback-popup').on('click', function() {
		event.stopPropagation();
	})

// profile edit

	function edit(){
		var editable = $('.js-edit'),
			btn = $('.js-edit-btn'),
			item = editable.find('.input');

		btn.on('click', function() {
			if ($(this).hasClass('is-editable')) {
				$(this).removeClass('is-editable').text('изменить');
				item.attr('readonly', 'readonly');
			}
			else{
				$(this).addClass('is-editable').text('сохранить');
				item.removeAttr('readonly');
			};
		})	
	};
	if ($('.js-edit').length) {
		edit();
	};

// document click

	$(document).on('click', function(event){
		$('.js-menu').removeClass('is-open');
		$('.mob-menu').removeClass('is-open');
		$('body').removeClass('no-scroll');
		$('html').removeClass('no-scroll');
		$('.js-feedback').removeClass('is-open');
		$('.js-feedback-popup').removeClass('is-open');
		$('.dropdown').removeClass('is-open');
	});

// map
	
  if ($('.map-wrap').length) {
    ymaps.ready(function () {
      var myMap = new ymaps.Map('YMapsID', {
          center: [47.687408, 40.199497],
          zoom: 17,
          controls: []
      });
      myMap.behaviors.disable('scrollZoom');
     // Создаем метку с помощью вспомогательного класса.
        myPlacemark1 = new ymaps.Placemark([47.687408, 40.199497], {
            // Свойства.
            
            balloonContent: 'Luxplast',
            hintContent: 'г. Шахты . Ростовская обл.'
        }, {
            // Опции.
            // Стандартная фиолетовая иконка.
            iconLayout: 'default#image',
            iconImageSize: [87, 87],
            iconImageHref: '../img/marker.png'
           
        });

     myMap.geoObjects.add(myPlacemark1)

    });
  };

// animation "item to basket"

	function buyPacket(){
		
		// function body
		var btn = $('.js-packet-btn'),
			finishY = ($(window).scrollTop() + 20);
		
		btn.on('click', function(){
			
			// vars
			var img = $(this).parents('.js-packet').find('img'),
				width = img.width(),
				height = img.height(),
				startX = img.offset().left,
				startY = img.offset().top;
			
			// clone img
			var cloneImg = img.clone(); 
			$('body').after(cloneImg);
			
			//set options to cloned img
			cloneImg.addClass('js-clone-img');
			cloneImg.css({top: startY, left: startX});
			
			// animation
			$('.js-clone-img').animate({
				top: $(window).scrollTop() + 20,
				left: $('.m-bag').offset().left,
				width: width*0.3,
				height: height*0.3
			}, 600, function(){
				cloneImg.remove();
			});

		});
	}	
	buyPacket();


// scroll
	$(window).scroll(function(){
		headerScroll();
		//buyPacket();
	});

// resize
	$(window).resize(function(){
		menuWidth();
		slickInit();
	});

});