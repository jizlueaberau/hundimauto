(function($) {
	"use strict";

	// submenu dropdown toggler
	if ($('.main-menu li.menu-item-has-children ul').length) {
		$('.main-menu li.menu-item-has-children').append(
			'<div class="dropdown-btn"><i class="flaticon flaticon-arrow-down-sign-to-navigate"></i></div>'
		);

		// disable dropdown parent link
		$('.main-menu .navigation li.menu-item-has-children > a').on('click', function(e) {
			e.preventDefault();
		});
	}

	// mobile nav
	if ($('.mobile-menu').length) {
		var mobileMenuContent = $('#header .navigation').html();
		$('.mobile-menu .navigation').append(mobileMenuContent);

		// dropdown button
		$('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function() {
			$(this).toggleClass('open').prev('ul').slideToggle(500);
		});

		// Menu Toggle Button
		$('.mobile-nav-toggler').on('click', function() {
			$(this).toggleClass('is-active');
			$('body').toggleClass('mobile-menu-visible');
		});
	}

	// sticky navigation scroll listener
	var lastScrollTop = 0; var num = 20;

	$(window).bind('scroll', function() {
		var st = window.pageYOffset || document.documentElement.scrollTop;
		if ($(window).scrollTop() > num) {
			$('#header').addClass('sticky')
		} else {
			$('#header').removeClass('sticky');
		}
		if (st > lastScrollTop && $('#header').hasClass('sticky')) {
			$('#header').removeClass('show');
		} else {
			$('#header').addClass('show');
		}
		lastScrollTop = st <= 0 ? 0 : st;
	});

	// animation css waypoints script
	function onScrollInit(items, trigger) {
		items.each(function() {
			var osElement = $(this),
			    osAnimationClass = osElement.attr('data-animation'),
			    osAnimationDelay = osElement.attr('data-delay');

			osElement.css({
				'-webkit-animation-delay': osAnimationDelay,
				'-moz-animation-delay': osAnimationDelay,
				'animation-delay': osAnimationDelay
			});

			var osTrigger = (trigger) ? trigger : osElement;

			osTrigger.waypoint(function() {
				osElement.addClass('animate__animated').addClass(osAnimationClass);
			}, {
				triggerOnce: true,
				offset: '110%'
			});
		});
	}
	onScrollInit($('.os-animation'));

	// initializing testimonials swiper
	var swiper = new Swiper("#testimonials .swiper", {
		slidesPerView: 1,
		spaceBetween: 30,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			dynamicBullets: true
		},
		breakpoints: {
			992: {
				slidesPerView: 2,
				spaceBetween: 90
			}
		}
	});

	// debug window
	$(document).ready(function() {
		$('#debug').append('<p>'+
			'w: '+$(window).width()+'px<br>'+
			'h: '+$(window).height()+'px</p>');
	});
})(jQuery);