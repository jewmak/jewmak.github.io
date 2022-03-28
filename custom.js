jQuery( function ( $ ) {

	function fixTop() {
		var offset = $(document).scrollTop();
		var wpadminbar = $('#wpadminbar').outerHeight();

		if(offset > 0){
			$('header#masthead').addClass('offset');
			$('header#masthead .navbar-brand > a > img').attr("src", '/wp-content/themes/pizzapasta/inc/assets/images/pizza_pasta_logo2.png');
			
		} else {
			$('header#masthead').removeClass('offset');
			$('header#masthead .navbar-brand > a > img').attr("src", '/wp-content/themes/pizzapasta/inc/assets/images/pizza_pasta_logo.png');
			
		}
		
		/*var navbarHeight = $('header#masthead').outerHeight();
		
		if(offset > 0 && !$('body').hasClass('home')){
			$('#banner').css('marginTop', navbarHeight-1);
		}
		else{
			$('#banner').css('marginTop', 0);
		}*/
		
	}

	$('.gallery .gallery-item a').each(function(){
		$(this).prepend('<span class="magnify"></span>');
	});
	
	$('.photos .gallery .gallery-item a').each(function(){
		$(this).prepend('<span class="btn">Galeria</span>');
	});

	function equalHeight(group) {
		var windowWidth = $(window).width();
		if(windowWidth>768){
			tallest = 0;
			group.each(function() {
				thisHeight = $(this).height();
				if(thisHeight > tallest) {
				tallest = thisHeight;
				}
			});
		}
		else{
			tallest = 'auto';
		}
		group.height(tallest);
	}
	
	$(window).on('resize', function() {
		fixTop();
	});
	
	$(window).on('scroll', function() {
		fixTop();
	});
	
	$(window).on( "load", function() {
		fixTop();
    });
	
});