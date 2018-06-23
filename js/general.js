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
});

