<?php
// process.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['fullName']);
    $phone = htmlspecialchars($_POST['phone']);
    $mail = htmlspecialchars($_POST['email']);
    $service = htmlspecialchars($_POST['serviceSelect']);
    $rdv =htmlspecialchars($_POST['appointmentDate']);
    $message =htmlspecialchars($_POST['moreDetails']);


    // Example: send email
    $to = "emadidou@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nTéléphone: $phone\nEmail: $email\nService: $service\nRendez-Vous: $rdv\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Sorry, something went wrong.";
    }
}
?>