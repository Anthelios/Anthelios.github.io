$(function(){
	AnimateHrefMovement();
	StaticAlert();
	SideNav();
	Gallery();
	Slider();
});

function BytesToSize(bytes) {
   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
   if (bytes == 0) return '0 Byte';
   var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
   return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};

function AnimateHrefMovement(){
	$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[href="#"]').click('click', function (event) {
	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 300);
	    return false;	
	});
}

function StaticAlert(){
	$('.alert-close').click(function(){
		$(this).parent('.alert').remove();
	});
}


function SideNav(){
	$('.hamburger').click(function(){			
		$(this).find('.toggle').toggleClass('active');
		$('aside').toggleClass('active');
		$('body').toggleClass('aside-open');
	});
}

function Gallery(){
	if($('.gallery-imgs').length>1){
		$('.gallery-imgs img').click(function(){
			if($(this).hasClass('active')){
				return;
			}else{
				var images = $('.gallery-imgs').children();
				images.removeClass('active');
				$(this).addClass('active');
				var src = $(this).attr('src');
				$('.gallery-current-img img').animate({opacity: '0'}, 200, function(){
		        $('.gallery-current-img img').attr('src',src);
		        $('.gallery-current-img img').animate({opacity: '1'}, 200);
	    		});

			}
		});
		$('.gallery-arrow').click(function(){			
			if($(this).hasClass('gallery-left-arrow')){
				GalleryNextImage('left');
			}else{
				GalleryNextImage('right');
			}
		});
	}
}

function GalleryNextImage(direccion){
	var images = $('.gallery-imgs').children();
	var current_image_position = $('.gallery-imgs').children('.active').index();
	var total_images = images.length;
	images.removeClass('active');
	switch(direccion){
	    case 'left':
	    	if(current_image_position == 0){
	    		$(images[total_images-1]).addClass('active');
	    		var src = $(images[total_images-1]).attr('src');
	    	}else{
	    		$(images[current_image_position-1]).addClass('active');
	    		var src = $(images[current_image_position-1]).attr('src');
	    	}
	        break;
	    case 'right':
			if(current_image_position == (total_images-1)){
	    		$(images[0]).addClass('active');
	    		var src = $(images[0]).attr('src');
	    	}else{
	    		$(images[current_image_position+1]).addClass('active');
	    		var src = $(images[current_image_position+1]).attr('src');
	    	}
	        break;
	} 
	$('.gallery-current-img img').animate({opacity: '0'}, 200, function(){
        $('.gallery-current-img img').attr('src',src);
        $('.gallery-current-img img').animate({opacity: '1'}, 200);
    });	
}

function Slider(){
	if($('.slider').find('.slider-img').length>1){
		var slider_imgs = $('.slider').find('.slider-img');
		var position = 1;
		next_image = slider_imgs[position];
		setInterval(function(){
			$(slider_imgs).fadeOut();
			if(position+1 == slider_imgs.length){
				position = 0;
			}else{
				position = position+1;
			}	
			$(next_image).fadeIn();
			next_image = slider_imgs[position];
		}, 3000);
	}
}