/*

Template Name:  example
Description:  example
Author: themexriver
Version: 1.0

====javascript indexing======

preloader


*/

(function ($) {
	"use strict";

	/*
	preloader
	====start====
	*/
	// preloader start
	if ($("#tx_preloader").length) {
		let preloader = document.querySelector("#tx_preloader");
		window.addEventListener("load", function () {
			setTimeout(function () {
				preloader.classList.add("preloaded");
			}, 500); // Adjust the delay time (in milliseconds) as needed

			setTimeout(function () {
				preloader.remove();
			}, 2000); // Adjust the delay time (in milliseconds) as needed
		});
	}

	// preloader end

	function txStickyHeader() {
		let header = document.querySelector("[data-txStickyHeader]");
		let ticking = false;

		window.addEventListener("scroll", function (e) {
			if (!ticking) {
				window.requestAnimationFrame(function () {
					if (window.scrollY > 0) {
						header.classList.add("txSticky-header");
					} else {
						header.classList.remove("txSticky-header");
					}
					ticking = false;
				});
				ticking = true;
			}
		});
	}

	// [data-txStickyHeader] has length
	if (document.querySelectorAll("[data-txStickyHeader]").length) {
		txStickyHeader();
	}

	/*
	mobile-menu
	====start====
	*/

	if ($(".mobile-main-navigation li.dropdown ul").length) {
		$(".mobile-main-navigation li.dropdown").append(
			'<div class="dropdown-btn"><span class="fas fa-caret-right"></span></div>'
		);
		$(".mobile-main-navigation li.dropdown .dropdown-btn").on(
			"click",
			function () {
				$(this).prev("ul").slideToggle(500);
			}
		);
	}
	$(".dropdown-btn").on("click", function () {
		$(this).toggleClass("toggle-open");
	});
	/*
	mobile-menu
	====end====
	*/

	/*
	sticky-header
	====start====
	*/
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			$(".header_sticky").addClass("sticky");
		} else {
			$(".header_sticky").removeClass("sticky");
		}
	});
	/*
	sticky-header
	====end====
	*/

	/*
	search-popup
	====start====
	*/

	$(".search_btn_toggle").on("click", function () {
		$(".overlay, .search_1_popup_active").addClass("active");
	});
	$(".overlay, .search_1_popup_close").on("click", function () {
		$(".search_1_popup_active").removeClass("active");
		$(".overlay").removeClass("active");
	});
	/*
	search-popup
	====end====
	*/

	/*
	services-1
	====start====
	*/
	var services1 = new Swiper(".gto_services_1_active", {
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: ".gto_services_1_next",
			prevEl: ".gto_services_1_prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			480: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
		},
	});
	/*
	services-1
	====end====
	*/

	/*
	popup-video-activition
	====start====
	*/
	$(".popup-video").magnificPopup({
		type: "iframe",
	});
	/*
	popup-video-activition
	====end====
	*/

	/*
	popup-img-activition
	====start====
	*/
	$(".popup_img").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});
	/*
	popup-img-activition
	====end====
	*/

	/*
	data-bg-activition
	====start====
	*/
	$("[data-background]").each(function () {
		$(this).css(
			"background-image",
			"url(" + $(this).attr("data-background") + ") "
		);
	});
	/*
	data-bg-activition
	====end====
	*/

	/*
	data-bg-color-activition
	====start====
	*/
	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});
	/*
	data-bg-color-activition
	====end====
	*/

	/*
	gsap-animation
	====start====
	*/

	gsap.registerPlugin(ScrollTrigger);

	gsap.utils.toArray(".chy-trusted-1-wrap").forEach((el, index) => {
		let tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 80%",
				end: "buttom 60%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tl1.set(el, { transformOrigin: "center center" }).from(
			el,
			{ background: "#fff", scale: 0.8 },
			{
				background: "inherit",
				scale: 1,
				duration: 1,
				immediateRender: false,
			}
		);
	});

	gsap.utils.toArray(" .asslideupcta").forEach((el, index) => {
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 90%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tlcta
			.set(el, { transformOrigin: "center center" })
			.from(
				el,
				{ opacity: 1, y: "+=300" },
				{ opacity: 1, y: 0, duration: 1, immediateRender: false }
			);
	});

	// For each images with class "animate-image" on page
	gsap.utils.toArray(".rotatedscal").forEach((el, index) => {
		let tl3 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 90%",
				end: "buttom 60%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tl3.set(el, { transformOrigin: "center center" }).from(
			el,
			{ opacity: 1, rotateZ: 45, scale: 0.5, y: "+=100" },
			{
				opacity: 1,
				rotateZ: 0,
				scale: 1,
				y: 0,
				duration: 1,
				immediateRender: false,
			}
		);
	});

	// For each images with class "animate-image" on page
	gsap.utils.toArray(".chy-slideinleft").forEach((el, index) => {
		let tl3 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 90%",
				end: "buttom 60%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tl3.set(el, { transformOrigin: "center center" }).from(
			el,
			{ x: "-=100" },
			{ x: 0, duration: 1, immediateRender: false }
		);
	});

	// For each images with class "animate-image" on page
	gsap.utils.toArray(".chy-slideinright").forEach((el, index) => {
		let tl4 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 90%",
				end: "buttom 60%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tl4.set(el, { transformOrigin: "center center" }).from(
			el,
			{ x: "+=100" },
			{ x: 0, duration: 1, immediateRender: false }
		);
	});

	// For each images with class "animate-image" on page
	gsap.utils.toArray(".chy-slideinup").forEach((el, index) => {
		let tl4 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 85%",
				end: "buttom 60%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tl4.set(el, { transformOrigin: "center center" }).from(
			el,
			{ y: "+=100" },
			{ y: 0, duration: 1, immediateRender: false }
		);
	});

	// For each images with class "animate-image" on page
	gsap.utils.toArray(".chy-zoomout").forEach((el, index) => {
		let tl6 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 85%",
				end: "buttom 60%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tl6.set(el, { transformOrigin: "center center" }).fromTo(
			el,
			{ scale: 1 },
			{ scale: 0, duration: 1, immediateRender: false }
		);
	});

	// For each images with class "animate-image" on page
	gsap.utils.toArray(".chy-zoomout2").forEach((el, index) => {
		let tl6 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 85%",
				end: "buttom 50%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tl6.set(el, { transformOrigin: "center center" }).fromTo(
			el,
			{ scale: 2 },
			{ scale: 1, duration: 1, immediateRender: false }
		);
	});

	// For each images with class "animate-image" on page
	gsap.utils.toArray(".chy-zoomout3").forEach((el, index) => {
		let tl6 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 85%",
				end: "buttom 50%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tl6.set(el, { transformOrigin: "center center" }).fromTo(
			el,
			{ scale: 1.5 },
			{ scale: 1, duration: 1, immediateRender: false }
		);
	});

	// For each images with class "animate-image" on page
	gsap.utils.toArray(".chyf2cc").forEach((el, index) => {
		let tl6 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 70%",
				end: "buttom 40%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tl6.set(el, { transformOrigin: "center center" }).fromTo(
			el,
			{
				color: getComputedStyle(
					document.documentElement
				).getPropertyValue("--chy-pr-2"),
			},
			{ color: "#fff", duration: 1, immediateRender: false }
		);
	});

	// For each images with class "animate-image" on page
	gsap.utils.toArray(".chyt1cc").forEach((el, index) => {
		let tl6 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 70%",
				end: "buttom 40%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tl6.set(el, { transformOrigin: "center center" }).fromTo(
			el,
			{ backgroundColor: "#6733E8" },
			{ backgroundColor: "#EDDFFF", duration: 1, immediateRender: false }
		);
	});

	// For each images with class "animate-image" on page
	gsap.utils.toArray(".chyroted").forEach((el, index) => {
		let tl6 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 3,
				start: "top 70%",
				end: "top 50%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tl6.set(el, { transformOrigin: "center center" }).fromTo(
			el,
			{ rotateZ: 360 },
			{ rotateZ: 0, duration: 1, immediateRender: false }
		);
	});

	// For each images with class "animate-image" on page
	gsap.utils.toArray(".chyclip").forEach((el, index) => {
		let tl6 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 80%",
				end: "top 60%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tl6.set(el, { transformOrigin: "center center" }).fromTo(
			el,
			{ clipPath: "polygon(30% 0, 70% 0, 70% 100%, 30% 100%)" },
			{
				clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
				duration: 1,
				immediateRender: false,
			}
		);
	});

	// For each images with class "animate-image" on page
	gsap.utils.toArray(".chyScl").forEach((el, index) => {
		let chyScl = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 95%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		chyScl
			.set(el, { transformOrigin: "center center" })
			.fromTo(
				el,
				{ scale: 0.8 },
				{ scale: 1, duration: 0.5, immediateRender: false }
			);
	});
	gsap.utils.toArray(".chy-about-4-img .bg-color").forEach((el, index) => {
		let chyScl = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 95%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		chyScl.set(el, { transformOrigin: "center center" }).fromTo(
			el,
			{ scale: 1.3, backgroundColor: "#C8AEFF" },
			{
				backgroundColor: "#F4EFFF",
				scale: 1,
				duration: 0.5,
				immediateRender: false,
			}
		);
	});
	/*
	gsap-animation
	====end====
	*/

	$(".js-marquee-wrapper").marquee({
		speed: 100,
		gap: 30,
		delayBeforeStart: 0,
		direction: "left",
		duplicated: true,
		pauseOnHover: true,
	});

	$(".js-marquee-wrapper2").marquee({
		speed: 100,
		gap: 30,
		delayBeforeStart: 0,
		direction: "right",
		duplicated: true,
		pauseOnHover: true,
	});

	// For each images with class "animate-image" on page
	gsap.utils.toArray(".chy-project-4-area .bg-img").forEach((el, index) => {
		let chyScl = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 90%",
				end: "top 50%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		chyScl
			.set(el, { transformOrigin: "center center" })
			.fromTo(
				el,
				{ xPercent: -100 },
				{ xPercent: 0, duration: 0.5, immediateRender: false }
			);
	});

	// For each images with class "animate-image" on page
	gsap.utils.toArray(".chy-project-4-area .bg-color").forEach((el, index) => {
		let chyScl = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 90%",
				end: "top 50%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		chyScl
			.set(el, { transformOrigin: "center center" })
			.fromTo(
				el,
				{ xPercent: 100 },
				{ xPercent: 0, duration: 0.5, immediateRender: false }
			);
	});

	gsap.utils.toArray(".chy-footer-4-il-img").forEach((el, index) => {
		let chyScl = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 80%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		chyScl
			.set(el, { transformOrigin: "center center" })
			.fromTo(
				el,
				{ xPercent: -100 },
				{ xPercent: 0, duration: 1, immediateRender: false }
			);
	});

	/*
	title-animation
	====start====
	*/

	$(window).on("load", function () {
		var st = $(".chy-split-text");
		if (st.length == 0) return;
		gsap.registerPlugin(SplitText);
		st.each(function (index, el) {
			el.split = new SplitText(el, {
				type: "lines,words,chars",
				linesClass: "split-line",
			});
			gsap.set(el, { perspective: 400 });

			if ($(el).hasClass("chy-split-in-right")) {
				gsap.set(el.split.chars, {
					opacity: 1,
					color: getComputedStyle(
						document.documentElement
					).getPropertyValue("--chy-pr-1"),
					x: "50",
					ease: "Back.easeOut",
				});
			}
			if ($(el).hasClass("chy-split-in-right-2")) {
				gsap.set(el.split.chars, {
					opacity: 1,
					color: getComputedStyle(
						document.documentElement
					).getPropertyValue("--chy-pr-2"),
					x: "50",
					ease: "Back.easeOut",
				});
			}

			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
				},
				x: "0",
				y: "0",
				rotateX: "0",
				color: "inherit",
				webkitTextStroke: "0px white",
				scale: 1,
				opacity: 1,
				duration: 1,
				stagger: 0.02,
			});
		});
	});

	/*
	title-animation
	====end====
	*/

	/*
		hero-2-shape-moveing-start
	*/
	gsap.set(".chy_price_1_next", { xPercent: -50, yPercent: -50 });

	let xSetter = gsap.quickSetter(".chy_price_1_next", "x", "px"); //apply it to the #id element's x property and append a "px" unit
	let ySetter = gsap.quickSetter(".chy_price_1_next", "y", "px"); //apply it to the #id element's x property and append a "px" unit

	window.addEventListener("mousemove", (e) => {
		xSetter(e.x);
		ySetter(e.y);
	});

	/*
		hero-2-shape-moveing-end
	*/

	/*
	mouse-move-animation
	====start====
	*/

	document.addEventListener("mousemove", parallax);
	function parallax(e) {
		document.querySelectorAll(".object").forEach(function (move) {
			var moving_value = move.getAttribute("data-value");
			var x = (e.clientX * moving_value) / 250;
			var y = (e.clientY * moving_value) / 250;

			move.style.transform =
				"translateX(" + x + "px) translateY(" + y + "px)";
		});
	}

	/*
	mouse-move-animation
	====end====
	*/

	/*
	mouse-over-scale
	=====start=====
	*/

	$(".tilt_scale").tilt({
		glare: true,
		maxGlare: 0.5,
	});

	/*
	mouse-over-scale
	=====end=====
	*/

	/*
	back-to-top
	=====start==== */
	var backtotop = $(".scroll-top");

	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			backtotop.addClass("show");
		} else {
			backtotop.removeClass("show");
		}
	});

	backtotop.on("click", function (e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "700");
	});
	/*
	back-to-top
	=====end====
	*/

	/*
	wow-activition
	=====start====
	*/

	new WOW().init();
	/*
	wow-activition
	=====end====
	*/

	// nice select activation
	if ($("select").length) {
		$("select").niceSelect();
	}

	// qty activation
	if ($("input.product-count").length) {
		$("input.product-count").TouchSpin({
			min: 1,
			max: 1000,
			step: 1,
			buttondown_class: "btn btn-link",
			buttonup_class: "btn btn-link",
		});
	}

	// counter activation
	$('.counter').counterUp({
		delay: 15,
		time: 3000,
	});

	// For each images with class "animate-image" on page
	gsap.utils.toArray(".chy-cta-5-area").forEach((el, index) => {
		let chyScl = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 95%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		chyScl
			.set(el, { transformOrigin: "center center" })
			.fromTo(
				el,
				{ scale: 0 },
				{ scale: 1, duration: 0.5, immediateRender: false }
			);
	});

	function setupMenuAnimations() {
		if ($("#menuToggle, #menuToggle2").length > 0) {
			let menuToggle = document.getElementById("menuToggle");
			let menuToggle2 = document.getElementById("menuToggle2");
			let onePageMenu = document.querySelectorAll(
				".fullpage-content-wrap li a"
			);

			let menuBar = gsap.timeline();
			menuBar.to(
				".chy-menu-btn-1",
				0.5,
				{
					background: "#6F9EDE",
				},
				"start"
			);
			menuBar.reverse();

			let menubgline = gsap.timeline({ paused: true });
			menubgline.to(".fullpage-menu", {
				duration: 0,
				display: "block",
				ease: "Expo.easeInOut",
			});
			menubgline.to(".menu-bg span", {
				duration: 0.5,
				width: "100%",
				stagger: 0.1,
				ease: "Expo.easeInOut",
			});
			menubgline.to(".menu-logo", {
				x: 0,
				opacity: 1,
				ease: "Expo.easeInOut",
			});
			menubgline.to(".mobile-main-navigation, .mobile-search-bar", {
				opacity: 1,
				y: 0,
				ease: "Expo.easeInOut",
			});
			menubgline.to(".fullpage-menu-gellary .item", {
				duration: 0,
				opacity: 1,
				stagger: 0.1,
				ease: "Expo.easeInOut",
			});
			menubgline.to(".full-page-socail-link li", {
				opacity: 1,
				y: 1,
				stagger: 0.1,
				ease: "Expo.easeInOut",
			});
			menubgline.to(".fullpage-menu-close, .fullpage-content-wrap li a", {
				duration: 0,
				x: 0,
				rotate: 0,
				opacity: 1,
				ease: "Expo.easeInOut",
			});
			menubgline.reverse();

			menuToggle.addEventListener("click", function () {
				menubgline.reversed(!menubgline.reversed());
			});

			menuToggle2.addEventListener("click", function () {
				menubgline.reversed(!menubgline.reversed());
			});

			// Loop through each element in onePageMenu and add event listener
			onePageMenu.forEach(function (element) {
				element.addEventListener("click", function () {
					menubgline.reversed(!menubgline.reversed());
				});
			});
		}
	}

	// Call the function
	setupMenuAnimations();

	// BG IMAGE ACTIVE
	function bgImageActive($scope, $) {
		$("[data-background]").each(function () {
			$(this).css(
				"background-image",
				"url(" + $(this).attr("data-background") + ") "
			);
		});
	}

	// PARALLAX ACTIVE
	function parallaxActive($scope, $) {
		document.addEventListener("mousemove", parallax);
		function parallax(e) {
			document.querySelectorAll(".object").forEach(function (move) {
				var moving_value = move.getAttribute("data-value");
				var x = (e.clientX * moving_value) / 250;
				var y = (e.clientY * moving_value) / 250;

				move.style.transform =
					"translateX(" + x + "px) translateY(" + y + "px)";
			});
		}
	}

	// splitText2 active js
	function splitText2Active($scope, $) {
		$(window).on("load", function () {
			var st = $(".chy-split-text-2");
			if (st.length == 0) return;
			gsap.registerPlugin(SplitText);
			st.each(function (index, el) {
				el.split = new SplitText(el, {
					type: "lines,words,chars",
					linesClass: "split-line",
				});
				gsap.set(el, { perspective: 400 });

				if ($(el).hasClass("chy-split-in-hero-1")) {
					gsap.set(el.split.chars, {
						opacity: 1,
						color: getComputedStyle(
							document.documentElement
						).getPropertyValue("--chy-pr-1"),
						x: "100",
						ease: "Back.easeOut",
					});
				}

				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 90%",
					},
					x: "0",
					y: "0",
					rotateX: "0",
					color: "inherit",
					webkitTextStroke: "0px white",
					scale: 1,
					opacity: 1,
					duration: 1,
					stagger: 0.02,
					delay: 1,
				});
			});
		});
	}

	function splitText4Active($scope, $) {
		$(window).on("load", function () {
			var st = $(".chy-split-text-4");
			if (st.length == 0) return;
			gsap.registerPlugin(SplitText);
			st.each(function (index, el) {
				el.split = new SplitText(el, {
					type: "lines,words,chars",
					linesClass: "split-line",
				});
				gsap.set(el, { perspective: 400 });

				if ($(el).hasClass("chy-split-in-hero-4")) {
					gsap.set(el.split.chars, {
						opacity: 1,
						color: getComputedStyle(
							document.documentElement
						).getPropertyValue("--chy-pr-1"),
						x: "100",
						ease: "Back.easeOut",
					});
				}

				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 90%",
					},
					x: "0",
					y: "0",
					rotateX: "0",
					color: "inherit",
					webkitTextStroke: "0px white",
					scale: 1,
					opacity: 1,
					duration: 1,
					stagger: 0.02,
					delay: 1,
				});
			});
		});
	}

	// Add Active class
	function addActiveClassOnLoad($scope, $) {
		const boxes = gsap.utils.toArray(".chy-class-add");
		boxes.forEach((img) => {
			gsap.to(img, {
				scrollTrigger: {
					trigger: img,
					scrub: 1,
					start: "top 80%",
					end: "bottom bottom",
					toggleClass: "active",
					toggleActions: "play none none reverse",
					once: true,
				},
			});
		});
	}

	// data-width
	function dataWidth($scope, $) {
		$("[data-width]").each(function () {
			$(this).css("width", $(this).attr("data-width"));
		});
	}

	function counterActive($scope, $) {
		if ($(".odometer").length) {
			jQuery(".odometer").appear(function (e) {
				var odo = jQuery(".odometer");
				odo.each(function () {
					var countNumber = jQuery(this).attr("data-count");
					jQuery(this).html(countNumber);
				});
			});
		}
	}

	function pricingSlideActive($scope, $) {
		let price1 = new Swiper(".chy_price_1_active", {
			loop: true,
			spaceBetween: 0,
			speed: 800,
			rtl: false,
			slidesPerView: 1,
			effect: "fade",
			autoplay: {
				delay: 5000,
			},
			fadeEffect: {
				crossFade: true,
			},
			pagination: {
				el: ".chy-price-1-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".chy_price_1_next",
				prevEl: ".chy_price_1_prev",
			},
		});

		if (jQuery(".chy_price_2_active").length > 0) {
			let wrapper = $(".chy_price_2_active");
			let delay = wrapper.data("delay");
			let speed = wrapper.data("speed");
			let pause_on_hover = wrapper.data("pause_on_hover");
			let chyprice2 = new Swiper(".chy_price_2_active", {
				loop: true,
				spaceBetween: 0,
				speed: speed,
				rtl: false,
				slidesPerView: 1,
				effect: "fade",
				autoplay: {
					delay: delay,
				},
				fadeEffect: {
					crossFade: true,
				},
				navigation: {
					nextEl: ".chy_price_2_next",
					prevEl: ".chy_price_2_prev",
				},
			});

			if (pause_on_hover == true) {
				$(".swiper-container").on("mouseenter", function (e) {
					chyprice2.autoplay.stop();
				});
				$(".swiper-container").on("mouseleave", function (e) {
					chyprice2.autoplay.start();
				});
			} else {
				chyprice2.autoplay.start();
			}
		}
	}

	function serviceSlideActive($scope, $) {
		if (jQuery(".chy_trusted_2_active").length > 0) {
			let wrapper = $(".chy_trusted_2_active");
			let delay = wrapper.data("delay");
			let speed = wrapper.data("speed");
			let pause_on_hover = wrapper.data("pause_on_hover");
			let chy_trusted_2_active = new Swiper(".chy_trusted_2_active", {
				loop: true,
				speed: speed,
				spaceBetween: 15,
				autoplay: {
					delay: delay,
				},
				pagination: {
					el: ".chy-trusted-2-pagination",
					clickable: true,
				},

				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					480: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 1,
					},
					992: {
						slidesPerView: 1,
					},
					1200: {
						slidesPerView: 2,
					},
				},
			});
			if (pause_on_hover == true) {
				$(".swiper-container").on("mouseenter", function (e) {
					chy_trusted_2_active.autoplay.stop();
				});
				$(".swiper-container").on("mouseleave", function (e) {
					chy_trusted_2_active.autoplay.start();
				});
			} else {
				chy_trusted_2_active.autoplay.start();
			}
		}

		if (jQuery(".chy_project_1_active").length > 0) {
			let wrapper = $(".chy_project_1_active");
			let delay = wrapper.data("delay");
			let speed = wrapper.data("speed");
			let pause_on_hover = wrapper.data("pause_on_hover");
			let chy_project_1_active = new Swiper(".chy_project_1_active", {
				slidesPerView: 3,
				spaceBetween: 0,
				loop: true,
				centeredSlides: true,
				rtl: false,
				infinite: false,
				grabCursor: true,
				speed: speed,
				autoplay: {
					delay: delay,
				},
				// If we need pagination
				navigation: {
					nextEl: ".chy_project_1_next",
					prevEl: ".chy_project_1_prev",
				},

				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 1,
					},
					992: {
						slidesPerView: 3,
					},
					1200: {
						slidesPerView: 3,
					},
					1400: {
						slidesPerView: 3,
					},
					1600: {
						slidesPerView: 4,
					},
				},
			});

			if (pause_on_hover == true) {
				$(".swiper-container").on("mouseenter", function (e) {
					chy_project_1_active.autoplay.stop();
				});
				$(".swiper-container").on("mouseleave", function (e) {
					chy_project_1_active.autoplay.start();
				});
			} else {
				chy_project_1_active.autoplay.start();
			}
		}

		if (jQuery(".chy_portfolio_2_active").length > 0) {
			let wrapper = $(".chy_portfolio_2_active");
			let delay = wrapper.data("delay");
			let speed = wrapper.data("speed");
			let pause_on_hover = wrapper.data("pause_on_hover");

			let chy_portfolio_2_active = new Swiper(".chy_portfolio_2_active", {
				spaceBetween: 0,
				loop: true,
				rtl: false,
				infinite: false,
				grabCursor: true,
				speed: speed,
				autoplay: {
					delay: delay,
				},
				pagination: {
					el: ".chy-portfolio-2-pagination",
					clickable: true,
					renderBullet: function (index, className) {
						return (
							'<span class="' +
							className +
							'">' +
							(index + 1) +
							"</span>"
						);
					},
				},

				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 1,
					},
					992: {
						slidesPerView: 3,
					},
					1200: {
						slidesPerView: 3,
					},
					1400: {
						slidesPerView: 3,
					},
					1600: {
						slidesPerView: 4,
					},
				},
			});

			if (pause_on_hover == true) {
				$(".swiper-container").on("mouseenter", function (e) {
					chy_portfolio_2_active.autoplay.stop();
				});
				$(".swiper-container").on("mouseleave", function (e) {
					chy_portfolio_2_active.autoplay.start();
				});
			} else {
				chy_portfolio_2_active.autoplay.start();
			}
		}

		if (jQuery(".chy_project_3_active").length > 0) {
			let wrapper = $(".chy_project_3_active");
			let delay = wrapper.data("delay");
			let speed = wrapper.data("speed");
			let pause_on_hover = wrapper.data("pause_on_hover");
			var chy_project_3_active = new Swiper(".chy_project_3_active", {
				loop: true,
				speed: speed,
				autoplay: {
					delay: delay,
				},
				navigation: {
					nextEl: ".chy_project_3_next",
					prevEl: ".chy_project_3_prev",
				},
				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					480: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 3,
					},
					1200: {
						slidesPerView: 3,
					},
					1400: {
						slidesPerView: 4,
					},
				},
			});

			if (pause_on_hover == true) {
				$(".swiper-container").on("mouseenter", function (e) {
					chy_project_3_active.autoplay.stop();
				});
				$(".swiper-container").on("mouseleave", function (e) {
					chy_project_3_active.autoplay.start();
				});
			} else {
				chy_project_3_active.autoplay.start();
			}
		}

		if (jQuery(".nim-service-slider").length > 0) {
			var nim_service_slider = new Swiper(".nim-service-slider", {
				slidesPerView: 4,
				loop: true,
				spaceBetween: 40,
				roundLengths: true,
				speed: 1000,
				navigation: {
					prevEl: ".nim-service-prev",
					nextEl: ".nim-service-next",
				},
				breakpoints: {
					1400: {
						slidesPerView: 4,
					},
					1300: {
						slidesPerView: 4,
					},
					1200: {
						slidesPerView: 3,
					},
					992: {
						slidesPerView: 3,
					},
					768: {
						slidesPerView: 2,
					},
					576: {
						slidesPerView: 1,
					},
					480: {
						slidesPerView: 1,
					},
					0: {
						slidesPerView: 1,
					},
				},
			});
		}
	}

	function testimonailActive($scope, $) {
		if (jQuery(".chy_team_slider_1_active").length > 0) {
			let wrapper = $(".chy_team_slider_1_active");
			let delay = wrapper.data("delay");
			let speed = wrapper.data("speed");
			let pause_on_hover = wrapper.data("pause_on_hover");

			let chy_team_slider_1_active = new Swiper(
				".chy_team_slider_1_active",
				{
					loop: true,
					spaceBetween: 0,
					speed: speed,
					rtl: false,
					slidesPerView: 1,
					effect: "fade",
					autoplay: {
						delay: delay,
					},
					fadeEffect: {
						crossFade: true,
					},
					pagination: {
						el: ".chy-team-slider-1-pagination",
						clickable: true,
					},
				}
			);

			if (pause_on_hover == true) {
				$(".swiper-container").on("mouseenter", function (e) {
					chy_team_slider_1_active.autoplay.stop();
				});
				$(".swiper-container").on("mouseleave", function (e) {
					chy_team_slider_1_active.autoplay.start();
				});
			} else {
				chy_team_slider_1_active.autoplay.start();
			}
		}

		if (jQuery(".chy_testimonial_2_active").length > 0) {
			let wrapper = $(".chy_testimonial_2_active");
			let delay = wrapper.data("delay");
			let speed = wrapper.data("speed");
			let pause_on_hover = wrapper.data("pause_on_hover");

			let chy_testimonial_2_active = new Swiper(
				".chy_testimonial_2_active",
				{
					loop: true,
					spaceBetween: 0,
					speed: speed,
					rtl: false,
					autoplay: {
						delay: delay,
					},

					pagination: {
						el: ".chy-testimonial-2-pagination",
						clickable: true,
					},
				}
			);

			if (pause_on_hover == true) {
				$(".swiper-container").on("mouseenter", function (e) {
					chy_testimonial_2_active.autoplay.stop();
				});
				$(".swiper-container").on("mouseleave", function (e) {
					chy_testimonial_2_active.autoplay.start();
				});
			} else {
				chy_testimonial_2_active.autoplay.start();
			}
		}

		if (jQuery(".chy_testimonial_4_active").length > 0) {
			let wrapper = $(".chy_testimonial_4_active");
			let delay = wrapper.data("delay");
			let speed = wrapper.data("speed");
			let pause_on_hover = wrapper.data("pause_on_hover");
			let testimonial4 = new Swiper(".chy_testimonial_4_active", {
				loop: true,
				spaceBetween: 0,
				speed: speed,
				rtl: false,
				autoplay: {
					delay: delay,
				},
				navigation: {
					nextEl: ".chy_testimonial_4_next",
					prevEl: ".chy_testimonial_4_prev",
				},
			});

			if (pause_on_hover == true) {
				$(".swiper-container").on("mouseenter", function (e) {
					testimonial4.autoplay.stop();
				});
				$(".swiper-container").on("mouseleave", function (e) {
					testimonial4.autoplay.start();
				});
			} else {
				testimonial4.autoplay.start();
			}
		}

		if (jQuery(".chy_t5_preview_active").length > 0) {
			let chyt5_thumb = new Swiper(".chy_t5_preview_active", {
				spaceBetween: 30,
				loop: false,
				speed: 1000,
				slidesPerView: 3,
				direction: "vertical",
				rtl: false,
				centeredSlides: false,
				watchSlidesProgress: false,

				breakpoints: {
					320: {
						slidesPerView: 2,
						direction: "horizontal",
					},
					576: {
						slidesPerView: 3,
						direction: "horizontal",
					},
					768: {
						slidesPerView: 3,
						direction: "horizontal",
					},
					992: {
						slidesPerView: 3,
						direction: "horizontal",
					},
					1200: {
						slidesPerView: 3,
						direction: "horizontal",
					},
					1400: {
						slidesPerView: 3,
						direction: "horizontal",
					},
					1600: {
						slidesPerView: 3,
						direction: "vertical",
					},
				},
			});
			let chyt5 = new Swiper(".chy_testimonial_5_active", {
				loop: true,
				spaceBetween: 0,
				rtl: false,
				slidesPerView: 1,
				effect: "fade",
				autoplay: {
					delay: 40000000,
				},
				fadeEffect: {
					crossFade: true,
				},
				thumbs: {
					swiper: chyt5_thumb,
				},
			});
		}

		// testimonial_6
		if (jQuery(".nim-testimonial-slider").length > 0) {
			var testimonial_6 = new Swiper(".nim-testimonial-slider", {
				slidesPerView: 1,
				loop: true,
				spaceBetween: 30,
				speed: 1000,
				pagination: {
					el: ".nim-testi-pagination",
					clickable: true,
				},
			});
		}
	}

	// heroSliderActive
	function heroSliderActive($scope, $) {
		let wrapper = $(".chy_hero_2_active");
		let delay = wrapper.data("delay");
		let speed = wrapper.data("speed");
		let pause_on_hover = wrapper.data("pause_on_hover");

		let chyhero2 = new Swiper(".chy_hero_2_active", {
			loop: true,
			spaceBetween: 0,
			speed: speed,
			rtl: false,
			slidesPerView: 1,
			effect: "fade",
			autoplay: {
				delay: delay,
			},
			fadeEffect: {
				crossFade: true,
			},
			navigation: {
				nextEl: ".chy_hero_2_next",
				prevEl: ".chy_hero_2_prev",
			},
		});

		if (pause_on_hover == true) {
			$(".swiper-container").on("mouseenter", function (e) {
				chyhero2.autoplay.stop();
			});
			$(".swiper-container").on("mouseleave", function (e) {
				chyhero2.autoplay.start();
			});
		} else {
			chyhero2.autoplay.start();
		}

		if ($(".nim-slider-main").length > 0) {
			var nim_slider_main = new Swiper(".nim-slider-main", {
				slidesPerView: 1,
				loop: true,
				spaceBetween: 30,
				roundLengths: true,
				effect: "fade",
				speed: 1000,
				pagination: {
					el: ".nim-main-pagination",
					clickable: true,
				},
				navigation: {
					prevEl: ".nim-main-prev",
					nextEl: ".nim-main-next",
				},
			});
		}
	}

	// progressActive
	function progressActive($scope, $) {
		if (typeof $.fn.knob != "undefined") {
			$(".knob").each(function () {
				var $this = $(this),
					knobVal = $this.attr("data-rel");

				$this.knob({
					draw: function () {
						$(this.i).val(this.cv + "%");
					},
				});

				$this.appear(
					function () {
						$({
							value: 0,
						}).animate(
							{
								value: knobVal,
							},
							{
								duration: 2000,
								easing: "swing",
								step: function () {
									$this
										.val(Math.ceil(this.value))
										.trigger("change");
								},
							}
						);
					},
					{
						accX: 0,
						accY: -150,
					}
				);
			});
		}
	}

	// infoBoxActiveClass
	function infoBoxActiveClass($scope, $) {
		$(".chy-services-4-item").on("mouseover", function () {
			var current_class = document.getElementsByClassName(
				"chy-services-4-item  active"
			);
			current_class[0].className = current_class[0].className.replace(
				" active",
				""
			);
			this.className += " active";
		});
	}

	// pricingActiveClass
	function pricingActiveClass($scope, $) {
		$(".chy-price-card-1-item").on("mouseover", function () {
			var current_class = document.getElementsByClassName(
				"chy-price-card-1-item active"
			);
			current_class[0].className = current_class[0].className.replace(
				" active",
				""
			);
			this.className += " active";
		});

		$(".chy-price-3-item").on("mouseover", function () {
			var current_class = document.getElementsByClassName(
				"chy-price-3-item active"
			);
			current_class[0].className = current_class[0].className.replace(
				" active",
				""
			);
			this.className += " active";
		});

		$(".chy-testimonial-3-item").on("mouseover", function () {
			var current_class = document.getElementsByClassName(
				"chy-testimonial-3-item active"
			);
			current_class[0].className = current_class[0].className.replace(
				" active",
				""
			);
			this.className += " active";
		});
	}

	// brandSlider
	function brandSlider($scope, $) {
		var brand_slider = new Swiper('.nim-sponsor-slider', {
			spaceBetween: 105,
			slidesPerView: 5,
			roundLengths: true,
			loop: true,
			loopAdditionalSlides: 30,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			speed: 400,
			breakpoints: {
				'1600': {
					slidesPerView: 5,
				},
				'1200': {
					slidesPerView: 4,
				},
				'992': {
					slidesPerView: 4,
				},
				'768': {
					slidesPerView: 4,
				},
				'576': {
					slidesPerView: 3,
					spaceBetween: 50,
				},
				'0': {
					slidesPerView: 2,
				},
			},
		});
	}

	$(window).on("elementor/frontend/init", function () {
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_hero_section.default",
			function ($scope, $) {
				bgImageActive($scope, $);
				parallaxActive($scope, $);
				splitText2Active($scope, $);
				addActiveClassOnLoad($scope, $);
				splitText4Active($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_trusted.default",
			dataWidth
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_trusted.default",
			counterActive
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_count_box.default",
			counterActive
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_image_box.default",
			counterActive
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_pricing_slide.default",
			pricingSlideActive
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_service_slide.default",
			serviceSlideActive
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_testimonial.default",
			testimonailActive
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_hero_slider.default",
			bgImageActive
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_hero_slider.default",
			heroSliderActive
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_image_box.default",
			addActiveClassOnLoad
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_service_list.default",
			addActiveClassOnLoad
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_about.default",
			bgImageActive
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_about.default",
			counterActive
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_progress.default",
			progressActive
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_info_box.default",
			infoBoxActiveClass
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_pricing_box.default",
			pricingActiveClass
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_cta.default",
			bgImageActive
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_brand.default",
			brandSlider
		);
	});

	var TXT_Custom_JS = {
		init: function() {
			this.Basic.init();
		},

		Basic: {
			init: function() {

				this.Animation();
				this.scrollTop();
				this.TitleAnimation();

			},
			Animation: function (){
				if($('.wow').length){
					var wow = new WOW(
					{
						boxClass:     'wow',
						animateClass: 'animated',
						offset:       0,
						mobile:       true,
						live:         true
					}
					);
					wow.init();
				};
			},
			TitleAnimation: function (){
				jQuery(document).ready(function() {
					var st = jQuery(".tx-split-text");
					if(st.length == 0) return;
					gsap.registerPlugin(SplitText);
					st.each(function(index, el) {
						el.split = new SplitText(el, {
							type: "lines,words,chars",
							linesClass: "split-line"
						});
						gsap.set(el, { perspective: 400 });
						if( jQuery(el).hasClass('split-in-fade') ){
							gsap.set(el.split.chars, {
								opacity: 0,
								ease: "Back.easeOut",
							});
						}
						if( jQuery(el).hasClass('split-in-right') ){
							gsap.set(el.split.chars, {
								opacity: 1,
								x: "100",
								color:'#bee041',
								ease: "Back.easeOut",
							});
						}
						if( jQuery(el).hasClass('split-in-right-2') ){
							gsap.set(el.split.chars, {
								opacity: 1,
								x: "100",
								color:'#00DDD0',
								ease: "Back.easeOut",
							});
						}
						if( jQuery(el).hasClass('split-in-left') ){
							gsap.set(el.split.chars, {
								opacity: 0,
								x: "-50",
								ease: "circ.out",
							});
						}
						if( jQuery(el).hasClass('split-in-up') ){
							gsap.set(el.split.chars, {
								y: "80",
								ease: "circ.out",
							});
						}
						if( jQuery(el).hasClass('split-in-down') ){
							gsap.set(el.split.chars, {
								opacity: 0,
								y: "-80",
								ease: "circ.out",
							});
						}
						if( jQuery(el).hasClass('split-in-rotate') ){
							gsap.set(el.split.chars, {
								opacity: 1,
								rotateX: "50deg",
								ease: "circ.out",
								color:'#A249ED',
								ease: "Back.easeOut",

							});
						}
						if( jQuery(el).hasClass('split-in-scale') ){
							gsap.set(el.split.chars, {
								opacity: 0,
								scale: "0.5",
								ease: "circ.out",
							});
						}
						if( jQuery(el).hasClass('split-in-fade') ){
							gsap.set(el.split.chars, {
								opacity: 0,
								duration: 0.2,
								ease: "power1.out",
								stagger: { amount: 0.8 },
							});
						}
						el.anim = gsap.to(el.split.chars, {
							scrollTrigger: {
								trigger: el,
								start: "top 90%",
							},
							x: "0",
							y: "0",
							rotateX: "0",
							color: 'inherit',
							webkitTextStroke: "0px white",
							scale: 1,
							opacity: 1,
							duration: 1,
							stagger: 0.02,
						});
					});
				});
				let splitTextLines = gsap.utils.toArray(".txt-text-anim p");
				splitTextLines.forEach(splitTextLine => {
					const tl = gsap.timeline({
						scrollTrigger: {
							trigger: splitTextLine,
							start: 'top 90%',
							duration: 2,
							end: 'bottom 60%',
							scrub: false,
							markers: false,
							toggleActions: 'play none none none'
						}
					});
					const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
					gsap.set(splitTextLine, { perspective: 400 });
					itemSplitted.split({ type: "lines" })
					tl.from(itemSplitted.lines, {
						duration: 1,
						delay: 0.5,
						opacity: 0,
						x: "50",
						force3D: true,
						transformOrigin: "top center -50",
						stagger: 0.1
					});
				});
				jQuery(window).on('load', function(){
					const boxes = gsap.utils.toArray('.txt_item_active');
					boxes.forEach(svg => {
						gsap.to(svg, {
							scrollTrigger: {
								trigger: svg,
								start: "top 70%",
								end: "bottom bottom",
								toggleClass: "active",
								once: true,
							}
						});
					});
				});
				gsap.utils.toArray(' .appear_left').forEach((el, index) => {
					let tlcta = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							scrub: 2,
							start: "top 90%",
							end: "top 70%",
							toggleActions: "play none none reverse",
							markers: false
						}
					})

					tlcta
					.set(el, {transformOrigin: 'center center'})
					.from(el, { opacity: 1,  x: "-=300"}, {opacity: 1, x: 0, duration: 1, immediateRender: false})
				});
				gsap.utils.toArray(' .appear_right').forEach((el, index) => {
					let tlcta = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							scrub: 2,
							start: "top 90%",
							end: "top 70%",
							toggleActions: "play none none reverse",
							markers: false
						}
					})

					tlcta
					.set(el, {transformOrigin: 'center center'})
					.from(el, { opacity: 1,  x: "+=300"}, {opacity: 1, x: 0, duration: 1, immediateRender: false})
				});
				gsap.utils.toArray(' .appear_top').forEach((el, index) => {
					let tlcta = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							scrub: 2,
							start: "top 90%",
							end: "top 70%",
							toggleActions: "play none none reverse",
							markers: false
						}
					})

					tlcta
					.set(el, {transformOrigin: 'center center'})
					.from(el, { opacity: 1,  y: "+=300"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
				});
				gsap.utils.toArray(' .appear_bottom').forEach((el, index) => {
					let tlcta = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							scrub: 2,
							start: "top 90%",
							end: "top 70%",
							toggleActions: "play none none reverse",
							markers: false
						}
					})

					tlcta
					.set(el, {transformOrigin: 'center center'})
					.from(el, { opacity: 1,  y: "-=300"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
				});
			},
			scrollTop: function (){
				$('.scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
				jQuery('.video_box').magnificPopup({
					disableOn: 200,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false,
				});
				$('.zoom-gallery').magnificPopup({
					delegate: 'a',
					type: 'image',
					closeOnContentClick: false,
					preloader: true,
					closeBtnInside: false,
					mainClass: 'mfp-with-zoom',
					gallery: {
						enabled: true
					},
					zoom: {
						enabled: false,
						duration: 300,
						opener: function(element) {
							return element.find('img');
						}
					}
				});
			},
		}
	}
	jQuery(document).ready(function (){
		TXT_Custom_JS.init();
	});


	if ($(".progress-bar").length) {
		var $progress_bar = $('.progress-bar');
		$progress_bar.appear_skill();
		$(document.body).on('appear', '.progress-bar', function() {
			var current_item = $(this);
			if (!current_item.hasClass('appeared')) {
				var percent = current_item.data('percent');
				current_item.css('width', percent + '%').addClass('appeared').parent().append('<span>' + percent + '%' + '</span>');
			}
		});
	};
})(jQuery);
