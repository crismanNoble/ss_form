$(document).ready(function(){

	// do stuff on form submission
	$('#ss_submit').click(function(e){

		//disable form submission
		$('#ss_submit').prop('disabled', true);
		$('#ss_submit').addClass('loading');
		
		e.preventDefault();

		var form = $('#ss_form');
		var action = form.attr('action');
		var method = form.attr('method');

		var submission = {};
		var errors = [];

		var submit = true;

		form.find('.ss_field').each(function(){

			var key = $(this).attr('name');

			if(key){
				var required = $(this).hasClass('ss_required');
				var val = $(this).val();
				if(required && val.length < 1){
					submit = false;
					errors.push($(this).attr('id'));	
				} 
				submission[key] = val;	
			}
			
		});

		if(submit){
			$.ajax({
			    url: action,
				data: submission,
				type: method,
				success: function(data){
					ss_sayThanks();
				}
			});	
		} else {
			errors.map(function(id){
				var errored = $('#'+id);
				errored.addClass('ss_error_field');

				var errorSpan = $(document.createElement('span'));
				errorSpan.html(errored.data('errortext'));
				errorSpan.addClass('ss_error_label');

				var label = $(form.find('[for="'+id+'"]')[0]);

				label.append(errorSpan);
			});
			
			//re-enable the the button
			$('#ss_submit').prop('disabled', false);
			$('#ss_submit').removeClass('loading');
		}
		

	});

	//clear errors on focus of a field
	$('.ss_field').focus(function(){
		$(this).removeClass('ss_error_field');
		var who = $(this).attr('id');
		var form = $('#ss_form');
		var label_error = $(form.find('[for="'+who+'"] .ss_error_label')[0]);
		label_error.remove();
	});

	//say thanks
	function ss_sayThanks(){
		
		var form = $('#ss_form');

		//clear out the form fields
		form.find('.ss_field').each(function(){
			$(this).val('');
		});

		//re-enable the the button
		$('#ss_submit').prop('disabled', false);
		$('#ss_submit').removeClass('loading');

		//mind your manners
		if(form.data('thankyou')){
			//hide the form
			form.hide();

			//show the thankyou text
			var thanks = $(document.createElement('div'));
			thanks.addClass('ss_thanks');
			thanks.html(form.data('thankyou'));
			form.before(thanks);
			
			//check for respawnability
			if(form.data('regen')){
				var another = $(document.createElement('a'));
				another.attr('href','#');
				another.text(form.data('regen'));
				thanks.append(another);

				//respawn form, kill thank you
				another.click(function(e){
					e.preventDefault();
					$('.ss_thanks').remove();
					$('#ss_form').show();
				});
			}	
		}

		
	}

});