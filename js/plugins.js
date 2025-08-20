$(document).ready(function(){

	// Global Variables

		var toggle_primary_button = $('.nav_toggle_button'),
				toggle_primary_icon = $('.nav_toggle_button i'),
				toggle_secondary_button = $('.page_nav li span'),
				primary_menu = $('.page_nav'),
				secondary_menu = $('.page_nav ul ul'),
				webHeight = $(document).height(),
				window_width = $(window).width();

	// Company name and phone number on content area
	$("main * :not('h1') , #banner ,#bottom1,#bottom2,#bottom3,#bottom4,#middle,#footer").not('.woocommerce *').each(function() {
		var regex1 = /(?![^<]+>)((\+\d{1,2}[\s.-])?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{6})/g;
		var regex2 = /(?![^<]+>)((\+\d{1,2}[\s.-])?\(?\d{3}\)?[\s.-]?\d{4}[\s.-]?\d{4})/g;
		var regex = /(?![^<]+>)((\+\d{1,2}[\s.-])?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})/g;
				$(this).html(
						$(this).html()
						.replace(/Brainard Delola/g, "<mark class='comp'>$&</mark>")
						.replace(regex1, "<mark class='main_phone'>$&</mark>").replace(regex2, "<mark class='main_phone'>$&</mark>").replace(regex, "<mark class='main_phone'>$&</mark>"));
		});

		$("main a[href]").each(function() {
		   var newHref = $(this).attr('href').replace("<mark class='comp'>", "").replace("</mark>", "");
			 $(this).attr('href', newHref);
		});

		// Forms on content area
		var form = $('main').find('#myframe');
			if(form.length > 0) {
			document.getElementById('myframe').onload = function(){
			  calcHeight();
			};
		}

	// Add class to tab having drop down
	$( ".page_nav li:has(ul)").find('span i').addClass("fa-caret-down");


	//Multi-line Tab
	toggle_secondary_button.click(function(){
		$(this).parent('li').siblings('li').children('ul').slideUp(400, function() {
			$(this).removeAttr('style');
		});

		$(this).parent('li').siblings('li').find('.fa').removeClass("fa-caret-up").addClass("fa-caret-down");

		$(this).parent('li').children('ul').slideToggle();
		$(this).children().toggleClass("fa-caret-up").toggleClass("fa-caret-down");
	});

	// Basic functionality for nav_toggle

	var hamburger = $(".hamburger");
    // hamburger.each(function(){
        // $(this).click(function(){
         // $(this).toggleClass("is-active");
        // });
      // });

	hamburger.click(function(){
		primary_menu.addClass('toggle_right_style');
		$('.toggle_right_nav').addClass('toggle_right_cont');
		$(".nav_toggle_button").toggleClass('active');
		$(".hamburger").toggleClass("is-active");
		$('body').addClass('active');
	});


	$('.toggle_nav_close, .menu_slide_right .hamburger').click(function(){
		primary_menu.removeClass('toggle_right_style');
		secondary_menu.removeAttr('style');
		toggle_secondary_button.children().removeClass("fa-caret-up").addClass("fa-caret-down");
		$('.toggle_right_nav').removeClass('toggle_right_cont');
		$(".nav_toggle_button").removeClass('active');
		$(".hamburger").removeClass("is-active");
		$('body').removeClass('active');
	});

	// Normal swapping

	// Swap Elements
	function swap_this(){
		if(window_width <= 600){
			$('.main_logo').insertAfter('.logo_wrap');
			$('#nav_area').insertBefore('header');
			$('#bottom2').insertAfter('#main_area');
			$('#middle').insertAfter('#bottom2');
		
		}else if(window_width <= 800){
			$('.main_logo').insertAfter('.logo_wrap');
			$('#nav_area').insertBefore('header');
			$('#bottom2').insertAfter('#main_area');
			$('#middle').insertAfter('#bottom2');


		} else if(window_width > 800 && window_width <= 1000){
			$('.main_logo').insertBefore('.head_info');
			$('#nav_area').insertAfter('header');
			$('#bottom2').insertAfter('#main_area');
			$('#middle').insertAfter('#bottom2');

			
		} else {
			$('.main_logo').insertBefore('.head_info');
			$('#nav_area').insertAfter('header');
			$('#bottom2').insertAfter('#main_area');
			$('#middle').insertAfter('#bottom2');

		} 
	}


		const dynamicMinHeight = (targetElement) => {
		const targetElements = [...document.querySelectorAll(targetElement)];
		if (targetElements.length <= 0 || !targetElement) return;
		targetElements.forEach((el) => (el.style.minHeight = "auto"));
		const targetElementsHeight = targetElements.map((el) => el.offsetHeight);
		const heighestHeight = Math.max(...targetElementsHeight);
		targetElements.forEach((el) => (el.style.minHeight = `${heighestHeight}px`));
		
	};
	
	dynamicMinHeight(".btm2_boxes section h2");
	swap_this();

	// Reset all configs when width > 800
	$(window).resize(function(){
		window_width = $(this).width();
	dynamicMinHeight(".btm2_boxes section h2");
		swap_this();

		if(window_width > 800) {
			$(".nav_toggle_button").removeClass('active');
			$(".hamburger").removeClass("is-active");
			primary_menu.removeClass('toggle_right_style');
			$('.toggle_right_nav').removeClass('toggle_right_cont');
			$('body').removeClass('active');
		}
		else{
			secondary_menu.removeAttr('style');
			toggle_secondary_button.children().removeClass("fa-caret-up").addClass("fa-caret-down");
		}


	});

	$('.rslides').responsiveSlides();
	$('.box_skitter_large').skitter({
		theme: 'square',
		numbers_align: 'center',
		progressbar: false,
		navigation: true,
		numbers: false,
		dots:false, 
		preview: false,
		interval: 3500,
		thumbs: false
	});

	$('.back_top').click(function () { // back to top
		$("html, body").animate({
			scrollTop: 0
		}, 900);
		return false;
	});

	$(window).scroll(function(){  // fade in fade out button
	var windowScroll = $(this).scrollTop();

		if (windowScroll > (webHeight * 0.5) && window_width <= 600 ) {
			$(".back_top").fadeIn();
		} else{
			$(".back_top").fadeOut()
		};

		// For (AddThis) Plugins
		if($('body #at-share-dock').hasClass('at-share-dock')) {
			$('.back_top').addClass('withAddThis_plugins');
			$('.footer_btm').addClass('withAddThis_ftr_btm');
		} else {
			$('.back_top').removeClass('withAddThis_plugins');
			$('.footer_btm').removeClass('withAddThis_ftr_btm');
		}
		// End (AddThis) Plugins

			  if ($('#container').length >= 1) {

             var fixbtmbg = $('#container').offset().top;
                 if (windowScroll > fixbtmbg && window_width > 1000){

                 $('.container_parallax').addClass('fixbtmbg');
                     } else {
                 $('.container_parallax').removeClass('fixbtmbg');
                }
         }

			  if ($('#middle').length >= 1) {

             var fixbtmbg = $('#middle').offset().top;
                 if (windowScroll > fixbtmbg && window_width > 1000){

                 $('.middle_parallax').addClass('fixbtmbg');
                     } else {
                 $('.middle_parallax').removeClass('fixbtmbg');
                }
         }
	  if ($('#main_area').length >= 1) {

             var fixbtmbg = $('#main_area').offset().top;
                 if (windowScroll > fixbtmbg && window_width > 1000){

                 $('.main_parallax').addClass('fixbtmbg');
                     } else {
                 $('.main_parallax').removeClass('fixbtmbg');
                }
         }  if ($('#bottom1').length >= 1) {

             var fixbtmbg = $('#bottom1').offset().top;
                 if (windowScroll > fixbtmbg && window_width > 1000){

                 $('.bottom1_parallax').addClass('fixbtmbg');
                     } else {
                 $('.bottom1_parallax').removeClass('fixbtmbg');
                }
         }

		 	 if ($('#bottom2').length >= 1) {

             var fixbtmbg = $('#bottom2').offset().top;
                 if (windowScroll > fixbtmbg && window_width > 1000){

                 $('.bottom2_parallax').addClass('fixbtmbg');
                     } else {
                 $('.bottom2_parallax').removeClass('fixbtmbg');
                }
         }

	});

	// Testimonial 
	$("#commentform").click(function(){
		if ($('#author').val() == '') {
		$('#author').addClass( "testimonialreq" );
		} else {
		$('#author').removeClass( "testimonialreq" ); 
		}
		
		if ($('#email').val() == '') {
		$('#email').addClass( "testimonialreq" );
		} else {
		$('#email').removeClass( "testimonialreq" );
		}
		
		if ($('#comment').val() == '') {
		$('#comment').addClass( "testimonialreq" );
		} else {
		$('#comment').removeClass( "testimonialreq" );
		}
		
	});

	// Animation
	new WOW().init();

	// Accordion
	$('.accord h6').click(function(){
		$(this).next().slideToggle()
	   .siblings('.accord div').slideUp();
	   //toggle sign
		$(this).toggleClass('sign')
		.siblings('.accord h6').removeClass();
	});

	//---------------------- START OF CODE (FORM ACTIVATION) -------------------------------//
	$("#submit_formmessage .form_email").change(function(){
		validateEmail();
	});
	$('#submit_formmessage .form_btn').on('click', function () {
		if ($('#submit_formmessage .form_fullname').val() == '') {
		  $('#submit_formmessage .form_fullname').addClass("FormReq");
		} else {
		  $('#submit_formmessage .form_fullname').removeClass("FormReq");
		} if ($('#submit_formmessage .form_chkbox').not(':checked')) {
		  $('#submit_formmessage .form_chkbox').addClass("FormReq");
		} else {
		  $('#submit_formmessage .form_chkbox').removeClass("FormReq");
		}
		if ($('#submit_formmessage .form_email').val() == '') {
		  $('#submit_formmessage .form_email').addClass("FormReq");
		} else {
		  validateEmail();
		}
		if (grecaptcha.getResponse() == "") {
		  var $recaptcha = document.querySelector('#g-recaptcha-response');
		  $recaptcha.setAttribute("required", "required");
		  $('.g-recaptcha iframe').addClass('FormReq').attr('id', 'recaptcha');
		}
	  });

	// FOR EMAIL VALIDATOR
	function validateEmail(){
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			var email = $('#submit_formmessage .form_email').val();
			if( !emailReg.test( email ) ) {
			  $('#submit_formmessage .form_email').addClass( "FormReq" );
			  $('#invalid-msg').show();
			  $('#invalid-msg').html('Please enter a valid email address.');
			} else {
			  $('#submit_formmessage .form_email').removeClass( "FormReq" );
			  $('#invalid-msg').hide();
			}
	}

	// FOR PROMPT POP-UP MESSAGE
	$('#success .close').click(function () {
		$('#success').fadeOut();
		$('#recaptcha-error').fadeOut();
	});
   
	$('.rclose').click(function () {
		$('#recaptcha-error').fadeOut();
	});
   
	$('#error-msg .error-close').click(function () {
		$('#error-msg').fadeOut();
	});

	//---------------------- END OF CODE (FORM ACTIVATION -------------------------------//

	     var typed = new Typed(".auto-type",{
          strings : ["Front-end Developer"],
          typeSpeed : 100,
          backSpeed : 100,
          loop : true,
        })
var owl = $('.owl-carousel');
owl.owlCarousel({
margin: 10,
loop: true,
nav: true,
autoplay:true,
dots:true,
responsive: {
0: {
items: 1
},
600: {
items: 1
},
601: {
items: 2
},
1000: {
items: 2
},
1001: {
items: 3
}
}
})


const lenis = new Lenis()

	lenis.on('scroll', (e) => {
	  console.log(e)
	})

	lenis.on('scroll', ScrollTrigger.update)

	gsap.ticker.add((time)=>{
	  lenis.raf(time * 1000)
	})

	gsap.ticker.lagSmoothing(0)

	

});

 document.addEventListener("DOMContentLoaded", function () {
            const orb = document.querySelector(".orb");
            let currentHue = 0;

            function updateColors() {
                currentHue = (currentHue + 1) % 360;
                orb.style.backgroundColor = `hsla(${currentHue}, 100%, 50%, 0.5)`; /* Background color */
                orb.style.borderColor = `hsla(${currentHue}, 100%, 50%, 1)`; /* Border color without transparency */
                requestAnimationFrame(updateColors);
            }

            updateColors(); // Start the color-changing loop

            document.addEventListener("mousemove", function (e) {
                const x = e.clientX;
                const y = e.clientY;

                orb.style.left = x - orb.clientWidth / 1.5 + "px";
                orb.style.top = y - orb.clientHeight / 1.5 + "px";
            });

	
        });

				 function downloadFile() {
      const link = document.createElement('a');
      link.href = 'files/Brainard_cv.pdf'; // Change this to your file path
      link.download = 'Brainard_cv.pdf'; // This will be the file name on download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
		
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const offset = 0; // height of navbar
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 900; // milliseconds → increase to slow down
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const ease = progress / duration; // linear easing
      window.scrollTo(0, startPosition + distance * ease);
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  });
});