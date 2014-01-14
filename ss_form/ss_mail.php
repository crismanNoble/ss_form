<?php

$name = $_POST['name'];
if(empty($name)){
	$name = $_GET['name'];	
}

$email = $_POST['email'];
if(empty($email)){
	$email = $_GET['email'];	
}

$message = $_POST['message'];
if(empty($message)){
	$message = $_GET['message'];	
}

$to = "jcnoble2@gmail.com";

//subject
$subject = $name. ' just filled in your stupid simple form.';

//message
$body = 'Someone from your stupid simple form said:';
$body .='name: '.$name.'<br/>';
$body .='email: '.$email.'<br/>';
$body .='message: '.$message;

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Additional headers
$headers .= 'From: '.$email;

// Mail it
$sent = mail($to, $subject, $body, $headers);

if($sent){
	echo 'Thanks!';	
} else {
	echo 'There was an error, please try again';
}

?>