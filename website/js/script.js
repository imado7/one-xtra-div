// JavaScript Document

// window load
$(window).load(function() {
	
	$('body').css('display', 'block');
	
	$('.home-container, .portfolio-container').css('display', 'none');
			
	
	// start home container slide down
	$('.home-container').slideDown({
		'duration': 1500,
		'easing': 'swing'
	});
	
	
	// home container content fadein
	$('.logo-circle, .p-intro, .scroll-div').css('opacity', '0');
	$('.logo-circle, .p-intro, .scroll-div').delay(2000).animate({
		'opacity': 1
	}, 1500);

	
	// create scroll down btn
	$('.scroll-div').append('<button class=scroll-down></button>');
	// create home btn
	$('.scroll-back').append('<button class=home-btn></button>');
	
	
	/* mouseWheel*/
	$('.main-container').bind('mousewheel', function(e){
		if(e.originalEvent.wheelDelta > 0)
		{
			$('.home-container').slideUp({
				'duration': 500,
				'easing': 'swing'
			});
			$('.portfolio-container').fadeIn(1000);
		}
		 else {
			$('.home-container').slideDown({
				'duration': 500,
				'easing': 'swing'	
			});
			$('.portfolio-container').fadeOut(500);
			
		}
	});
	

	
	
	// scroll donw btn click event
	$('.scroll-down').click(function(){
		$('.home-container').slideUp({
			'duration': 1000,
			'easing': 'swing'	
		});
		$('.portfolio-container').fadeIn(1500);
	});
	
	
	// home btn click event
	$('.home-btn').click(function(){
		$('.home-container').slideDown({
			'duration': 1000,
			'easing': 'swing'	
		});
		$('.portfolio-container').fadeOut(500);
	});
	
	
	// load projects content into window modal and prevent mousewheel event
	$('a.open-mouse').click(function(){
		$('.main-container').unbind("mousewheel");
		$('#works-content').html('<object data="works.html" />');
	});
	
	
	// allow mousewheel on ,odal window projects
	/*
	$('#works-content').bind('mousewheel DOMMouseScroll', function(e) {
    	var scrollTo = null;

    	if (e.type == 'mousewheel') {
        	scrollTo = (e.originalEvent.wheelDelta * -1);
    	}
    	else if (e.type == 'DOMMouseScroll') {
        	scrollTo = 40 * e.originalEvent.detail;
    	}

    	if (scrollTo) {
        	e.preventDefault();
        	$(this).scrollTop(scrollTo + $(this).scrollTop());
    	}
	});
	*/

	
	// when close window modal return to mousewheel event
	$('a.m-close').click(function(){
		$('.main-container').bind('mousewheel', function(e){
			if(e.originalEvent.wheelDelta > 0)
			{
				$('.home-container').slideUp({
					'duration': 1000,
					'easing': 'swing'
				});
				$('.portfolio-container').fadeIn(1500);
			}
		 	else {
				$('.home-container').slideDown({
					'duration': 1000,
					'easing': 'swing'	
				});
				$('.portfolio-container').fadeOut(500);
			}
		
		});
	});
	
	
	// social links click event
	$('.i-linkedin').click(function() {
		window.open('https://www.linkedin.com/pub/imad-el-maoed/50/a5a/461');
	});
	$('.i-google-plus').click(function() {
		window.open('https://plus.google.com/u/0/116118041050107647524/posts');
	});
	$('.i-twitter').click(function() {
		window.open('https://twitter.com/imad_el_maoed');
	});
	
	
	
	

			
			
});