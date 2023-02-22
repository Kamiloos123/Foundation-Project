<?php
// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit;
}

// Get the form data
$answer1 = $_POST['questionGender'];
$answer2 = $_POST['questionAge'];
$answer3 = $_POST['questionEducation'];
$answer4 = $_POST['questionIT'];

// Construct the email message
$to = 'kamilgrec1@googlemail.com';
$subject = 'New questionnaire response';
$message = "Gender: $answer1\nAge: $answer2\nEducation: $answer3\nIT: $answer4";
$headers = 'From: webmaster@example.com' . "\r\n" .
           'Reply-To: webmaster@example.com' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

// Send the email
if (mail($to, $subject, $message, $headers)) {
    echo "Thank you for your answers";
} else {
    echo "An error occurred while submitting your answers. Please try again later.";
}
?>
