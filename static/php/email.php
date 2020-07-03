<?php
if(isset($_POST['submit']))
{
    // from the form
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = htmlentities($_POST['message']);

    // set here
    $subject = "$name has contacted Anax Gaming!";
    //MAKE SURE TO CHANGE TO ANAX GAMING'S EMAIL AFTER TESTING
    $to = 'josephsy96@hotmail.com';

    $body = <<<HTML
$message
HTML;

    $headers = "From: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";

    // send the email
    mail($to, $subject, $body, $headers);

    echo 'Your email has been sent.';
    // redirect afterwords, if needed
        //    header('Location: index.html');
}
?>

