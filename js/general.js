$(function(){
	$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[href="#"]').click('click', function (event) {
	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 300);
	    return false;	
	});
	$("input[type=checkbox]").each(function(i) {
	    $(this).prop('checked',false);
	});
	$("input[type=radio]").each(function(i) {
	    this.checked = false;
	});
	$('input[name=service-type]').click(function(){
		$('.form-type').hide();
		$('.form-general').show();
		var option = parseInt($(this).val());
		console.log(option);
		switch(option){
		    case 1:
		        $('#one-way-trip').show();
		        break;
		    case 2:
		        $('#one-way-trip').show();
		        $('#round-trip').show();
		        break;
	        case 3:
		    case 4:
		       	$('#multiple-cities').show();
		        break;
		} 
	});
	$('input[name=bus-type]').click(function(){
		$('.personal-info').show();
	});
	$('.alert-close').click(function(){
		$(this).parent('.alert').remove();
	});
	$('.input-date').each(function(i) {
		var materialPicker001 = new MaterialDatepicker(this, {
	  		weekBegin: 'monday',
	  		color: "#f57c00",
	  		lang: "es",
	  		outputFormat: 'DD/MM/YYYY'
		});	
	});
	$('.hamburger').click(function(){			
		$(this).find('.toggle').toggleClass('active');
		$('aside').toggleClass('active');
		$('body').toggleClass('aside-open');
	});
	GalleryInit();
});


function GalleryInit(){
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
			galleryNextImage('left');
		}else{
			galleryNextImage('right');
		}
	});
}

function galleryNextImage(direccion){
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
