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

	// debug windo
	$(document).ready(function() {
		$('#debug').append('<p>'+
			'w: '+$(window).width()+'px<br>'+
			'h: '+$(window).height()+'px</p>');
	});
})(jQuery);