$(function(){
	ResetRadioAndCheckboxes();
	CustomRadioButtons();
	CustomInputFile();
	InputDatepicker();
});

function ResetRadioAndCheckboxes(){
	$("input[type=checkbox]").each(function(i) {
	    $(this).prop('checked',false);
	});
	$("input[type=radio]").each(function(i) {
	    this.checked = false;
	});
}

function CustomRadioButtons(){
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
}

function CustomInputFile(){
	$('.input-file').click(function(){
		var input = $(this).siblings('input[type=file]');
		input.click();
		input.off('change');
		input.change(function(){
			var filename = this.files[0].name;
			var size = this.files[0].size;
			$(this).siblings('.input-file-name').text(filename+' - '+BytesToSize(size));
		});
	});
}

function InputDatepicker(){
	$('.input-date').each(function(i) {
		var materialPicker001 = new MaterialDatepicker(this, {
	  		weekBegin: 'monday',
	  		color: "#f57c00",
	  		lang: "es",
	  		outputFormat: 'DD/MM/YYYY'
		});	
	});
}