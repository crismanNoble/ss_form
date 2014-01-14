#ss_form
=======

*Stupid simple forms*

##Features

* sends you an email of the form content
* works even if js is disabled
* contains zero css
* stupid simple ajax requests
* stupid simple validation and error handling
* stupid simple loading and error states

##Configure

* upload the `ss_form` folder to your server
* include the `ss_from\ss_ajax.php` file (also include jquery / zepeto)
* put the form into you dom
* change the `$to` in the `ss_from\ss_mail.php` file or else I will recieve all your mails
* style it so as to not let it look like poop

##Requirements

* jquery
* php
* aptitude to create an html form

##Docs

###Putting together a basic form
	
Start with a form elemet. Give it an id of `ss_form`, provide a `method`, and proivde an `action`. The defaults of `POST` and `ss_form/ss_mail.php` work if you want to use the provided mailer.

	<form id="ss_form" method="POST" action="ss_form/ss_mail.php">
		<!-- form elements here -->
	</form>

Give the form some elements. Each thing to collect needs a label and `input` or `textarea`. Provide a `for` on your label and give the `input` a class of `ss_field`.

	<form id="ss_form" method="POST" action="ss_form/ss_mail.php">
	
		<label for="email">Email:</label>
    	<input type="text" class="s_field" name="email" id="email"/>
    	
	</form>	
	
Give the form a submit button. Give the button an id of `ss_submit`.

	<form id="ss_form" method="POST" action="ss_form/ss_mail.php">
	
		<label for="email">Email:</label>
    	<input type="text" class="s_field" name="email" id="email"/>
    	
    	<input type="submit" value="Submit" id="ss_submit"/>
    	
	</form>	

The form will now work, if you kept the defaults it will email you whatever someone puts in the box, including an empty string...

Mark fields as required by giving them a class of `ss_required`. This prevents submission of the form unless there is *something*, *anything* in the field. Setting a `data-errortext` attribute will provide help text when an attempt to submit occours without filling out the field.

	<input type="text" class="ss_text ss_field ss_required" name="email" id="ss_text_2" data-errortext="email is required"/>

Mind your manners. It is a good idea to show the user that something happened after they clicked the button. If the `form` element contains a `data-thankyou` attribute the form will be hidden on successfull submission and a `div` with the `data-thankyou` text will show in its place. If `data-regen` is passed a link to regenerate an empty form will be included with the text in this attribute.

	<form id="ss_form" method="POST" action="ss_form/ss_mail.php" data-thankyou="Thank you." data-regen="Another?">
	
Putting all the peices together we get:

	<form id="ss_form" method="POST" action="ss_form/ss_mail.php" data-thankyou="Thank you." data-regen="Another?">
		<label for="ss_text_1">Name:</label>
		<input type="text" class="ss_text ss_field" name="name" id="ss_text_1" />

		<label for="ss_text_2">Email:</label>
		<input type="text" class="ss_text ss_field ss_required" name="email" id="ss_text_2" data-errortext="email is required"/>

		<label for="ss_text_3">Message:</label>
		<textarea type="text" class="ss_text ss_field ss_required" name="message" id="ss_text_3" data-errortext="message is required"></textarea>

		<input type="submit" value="Submit" id="ss_submit"/>
	</form>
	

####Todos

* remove unnecessary ids
* show screenshots
* show renedered htmls
* document helper classes