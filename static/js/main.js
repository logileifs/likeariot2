(function($) {
	'use strict';

	$(document).ready(function() {

		var carousel = $('.owl-carousel');

		carousel.owlCarousel({
			stagePadding: 50,
			loop:false,
			autoplay:false,
			autoplayTimeout:5000,
			autoplayHoverPause:false,
			//center:false,
			//lazyload:true,
			//startPosition: 0,
			margin:10,
			nav:false,
			/*itemsDesktop: [960, 4], 
			itemsDesktopSmall: [900, 3], 
			itemsTablet: [600, 2], 
			itemsMobile: [480, 1]*/
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				960:{
					items:4
				}
			}
		});

		//carousel.trigger('owl.goTo', 1);
		//var activeslide = document.getElementsByClassName('owl-item active')[1];
		//activeslide.getElementsByTagName('a')[0].click();

		$(".item").on("mouseover", function () {
			$(this).find("figcaption").css("visibility", "visible");
			$(this).find("p").css("visibility", "visible");
			$(this).find("a").css("visibility", "visible");
		});

		$(".item").on("mouseleave", function() {
			$(this).find("p").css("visibility", "hidden");
			$(this).find("a").css("visibility", "hidden");
		});

		$("#header-search").on("focus", function() {
			$('.main-header__search').addClass('change');
			$("#header-search").css("color", "#FFB3B3");
		});

		$("#header-search").on("focusout", function() {
			if ( !$("#header-search").is(':hover') ){
				$('.main-header__search').removeClass('change');
				$("#header-search").css("color", "black");
			}
		});

		$("#header-search").on("mouseover", function() {
			$('.main-header__search').addClass('change');
			$("#header-search").css("color", "#FFB3B3");
		});

		$("#header-search").on("mouseleave", function() {
			if ( !$("#header-search").is(':focus') ){
				$('.main-header__search').removeClass('change');
				$("#header-search").css("color", "black");
			}
		});

		$('#search-input').on('mouseover', function() {
			$('#header-search').css('color', '#FFB3B3');
		});

		$('#search-input').on('mouseleave', function() {
			if ( !$("#header-search").is(':focus') ){
				$('#header-search').css('color', 'black');
			}
		});

		$('#disclaimer').on({"click": function() {
			var tooltipText = "All items/clothes marked with an asterisk (*) are sponsored or affiliate links. All sponsored posts and links are marked with the tag ’sponsored‘ and/or the name of the customer/agency.";
			if ($('#tooltip').length == 0){
				$('#footer').prepend('<div id="tooltip">' + tooltipText  + '</div>');
				$( "#tooltip" ).position({
					of: event,
					my: "center, bottom-75",
					collision: "fit"
				});
			}
			else {
				$('#tooltip').remove();
			}
		},"mouseout": function() {
			$('#tooltip').remove();	
			}
		});


		/* Swipebox Lightbox Plugin
		==========================================*/
		$( '.swipebox' ).swipebox();


		/* Sticky Header
		==========================================*/
		$('#sticky').scrollToFixed();


		/* Animated Placeholders
		==========================================*/
		Placeholdem( document.querySelectorAll( '[placeholder]' ) );


		/* OwlCarousel Homepage and similar posts 
		==========================================*/
		/*$(window).resize( function(){
			$(".slider").owlCarousel({
				items: 3,
				nav: false,
				responsive: true,
				lazyLoad: true,
				autoPlay : 5000,
				stopOnHover: true,
			});
		});*/
		$(window).resize();
		
		/* OwlCarousel Gallery Post
		==========================================*/
		$(".post__gallery").owlCarousel({

			navigation : false,
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true

			// "singleItem:true" is a shortcut for:
			// items : 1, 
			// itemsDesktop : false,
			// itemsDesktopSmall : false,
			// itemsTablet: false,
			// itemsMobile : false

		});

		/* OwlCarousel Twitter 
		==========================================*/
		/*$(".twitter-feed").owlCarousel({
			paginationSpeed : 400,
			singleItem: true,
			autoPlay : 4000,
			stopOnHover: true,
		});*/


		//$(".parallax-slider").skippr();

		//$('.parallax-slider__slide').parallax("50%", 0.3);
		//$('.parallax-slider__slide h2').parallax("50%", 0.1);

		/* Fade elements while scrolling
		================================================= */
		jQuery(function($) {
			var divs = $('.fade-that');
			var divsCapt = $('.animate');
			$(window).on('scroll', function() {
				var st = $(this).scrollTop();
				divs.css({ 
					'opacity' : 0.15 + st/800,
				}); 
				divsCapt.css({ 
					'transform' : 'translateY(' + 0 + st/4 +'px)',
					'-webkit-transform' : 'translateY(' + 0 + st/4 +'px)',
				}); 
			});
		});


		/* Search Input 
		==========================================*/
		$('#header-search').blur(function(){
			$('.main-header__search').removeClass("focus");
		}).focus(function() {		
			$('.main-header__search').addClass("focus");
		});

		$(function(){
			var submenu = $('.submenu-link');
			var submenuList = $('.mobile-menu__list ul');

			submenu.click(function(){
				if ( submenu.hasClass('selected') ) {
					$(this).find(submenuList).hide();
					submenu.removeClass('selected');
				}
				else {
					$(this).find(submenuList).show();
					submenu.addClass('selected');
				}
			});
		});    


		/* Post Parallax and some maths to make it fullheight
		=====================================================*/
		/*$('.post__image--fullwidth').parallax("50%", 0.4);


		$(function(){

			var browserWidth = $( window ).width();

			var postImg = $('.post__image--fullwidth');
			var headerHeight = $('.main-header__top').height() + $('.main-header__logo').outerHeight() + $('.main-header__navigation').height();
			var postImgHeight = $(window).height() - headerHeight

			if ( browserWidth >= 768 ) {
				postImg.css('height',postImgHeight + 'px')
			}
			else {
				postImg.css('height',postImgHeight + 'px')
			}

		});*/


		/* Nice looking Youtube Posts 
		=============================================*/
		$('.yt_container').prettyEmbed({
			previewSize: 'hd',           // use either this option...
			customPreviewImage: '',      // ...or this option

			// Embed controls
			showInfo: false,
			showControls: true,
			loop: false,

			colorScheme: 'dark',
			showRelated: false,

			useFitVids: true
		});


		/*	Toggle (FAQ)
		/*----------------------------------------------------*/
	 
		// Find the toggles and hide their content
		$('.toggle').each(function(){
			$(this).find('.toggle-content').hide();
		});
	 
		// When a toggle is clicked (activated) show their content
		$('.toggle a.toggle-trigger').click(function(){
			var el = $(this), parent = el.closest('.toggle');
	 
			if( el.hasClass('active') )
			{
				parent.find('.toggle-content').slideToggle();
				el.removeClass('active');
			}
			else
			{
				parent.find('.toggle-content').slideToggle();
				el.addClass('active');
			}
			return false;
		});

		// Get the modal
		var modal = document.getElementById('myModal');

		// Get the button that opens the modal
		//var btn = document.getElementById("myBtn");


		setTimeout(function()
		{
			//console.log('PopupShown: ' + localStorage['PopupShown']);
			if (localStorage["PopupShown"] == false || localStorage['PopupShown'] == undefined)
			{
				if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
					//console.log('DESKTOP!');
					//console.log('PopupShown: ' + sessionStorage['PopupShown']);
					//console.log('3 seconds!');
					modal.style.display = 'flex'
					localStorage["PopupShown"] = true
					console.log('popup!');
				}
			}
		}, 45000)

		// Get the <span> element that closes the modal
		//var span = document.getElementsByClassName("close")[0];
		var closeButton = document.getElementById('close-modal')
		// When the user clicks on <span> (x), close the modal
		closeButton.onclick = function() {
			console.log('close button clicked');
			modal.style.display = "none";
		}

		var signupButton = document.getElementById('mc-embedded-subscribe')
		signupButton.onclick = function() {
			console.log('signupButton clicked!');
			modal.style.display = 'none'
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		    if (event.target == modal) {
		        modal.style.display = "none";
		    }
		}


		/*	Notification Boxes
		/*----------------------------------------------------*/
		$('.close').click(function(){
			$(this).parent().fadeOut('slow');
		});


		/*	Tabs
		/*----------------------------------------------------*/
		$("#tabs li").click(function() { 
		
			var this_tmp = $(this);  
			
			$("#tabs li").removeClass('active');   
			$(this).addClass("active");        
			$(".tab_content:visible").fadeOut(300, function(){            
				
				var selected_tab = this_tmp.find("a").attr("href");            
				$(selected_tab).fadeIn(300);        
			});  
			
			return false;    
		});


		/*	Accordions with contents
		/*----------------------------------------------------*/
		/*$(function() {
			var accList = $('.accordion li p')
			var accLink = $('.accordion li a') 
			var accExpanded = $('.expand')		
			
			accList.hide();
			accExpanded.show();
			accLink.click(function(e) {
				e.preventDefault();
				if(!$(this).hasClass('active')) {
					accLink.removeClass('active');
					accList.filter(':visible').slideUp('normal');
					$(this).addClass('active').next().stop(true,true).slideDown('normal');
				} else {
					$(this).removeClass('active');
					$(this).next().stop(true,true).slideUp('normal');
				}
			});
		});

		$(function() {
			//var userId = '1528266078';
			var caroId = '306589255';
			var lindaId = '198083335';
			//var accessToken = '1528266078.488ac6d.14b39af6e5634a13bc1a60029dc34234';
			var caroToken = '306589255.488ac6d.b2b1ccbac44f4f1299d9f50fc3c08a12';
			var lindaToken = '198083335.488ac6d.77f8827448a042939b9ebb2b944a2a49';
			var caroUrl = "https://api.instagram.com/v1/users/"+caroId+"/media/recent/?access_token="+caroToken;
			var lindaUrl = 'https://api.instagram.com/v1/users/'+lindaId+'/media/recent/?access_token='+lindaToken;
			$.ajax({
				type: 'GET',
				url: caroUrl,
				dataType: 'jsonp',
				contentType: 'text/plain',
				xhrFields: {
  					withCredentials: false
				},
				success: function(data, textStatus, xhr) {
					console.log('success data: ', data);
					console.log('textStatus: ', textStatus);
					var img1 = data.data[0].images.thumbnail.url;
					//var img2 = data.data[1].images.thumbnail.url;
					var img3 = data.data[2].images.thumbnail.url;
					//var img4 = data.data[3].images.thumbnail.url;
					var img5 = data.data[4].images.thumbnail.url;
					//var img6 = data.data[5].images.thumbnail.url;
					$("#instapic1").attr("src", img1);
					//$("#instapic2").attr("src", img2);
					$("#instapic3").attr("src", img3);
					//$("#instapic4").attr("src", img4);
					$("#instapic5").attr("src", img5);
					//$("#instapic6").attr("src", img6);
				},
				error: function() {}
			});

			$.ajax({
				type: 'GET',
				url: lindaUrl,
				dataType: 'jsonp',
				contentType: 'text/plain',
				xhrFields: {
  					withCredentials: false
				},
				success: function(data, textStatus, xhr) {
					//var img1 = data.data[0].images.thumbnail.url;
					var img2 = data.data[1].images.thumbnail.url;
					//var img3 = data.data[2].images.thumbnail.url;
					var img4 = data.data[3].images.thumbnail.url;
					//var img5 = data.data[4].images.thumbnail.url;
					var img6 = data.data[5].images.thumbnail.url;
					//$("#instapic1").attr("src", img1);
					$("#instapic2").attr("src", img2);
					//$("#instapic3").attr("src", img3);
					$("#instapic4").attr("src", img4);
					//$("#instapic5").attr("src", img5);
					$("#instapic6").attr("src", img6);
				},
				error: function() {}
			});
		});*/
	});

} (jQuery));