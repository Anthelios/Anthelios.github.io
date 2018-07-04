$(function(){
	CustomInputFile(); 
	JobOfferForm();
});

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

function JobOfferForm(){
	$('.job-offers li').click(function(){
		$('#job-form').fadeIn();
	});
}