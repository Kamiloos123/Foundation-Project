<?php
    // Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit;
  }

  // Allow from any origin
  header('Access-Control-Allow-Origin: *');

// Database connection settings
$host = 'kamil-foundation-server.mysql.database.azure.com';
$user = 'admin1';
$password = 'Waser567765.';
$database = 'project';
$port = 3306;

// Connect to the database
$conn = mysqli_connect($host, $user, $password, $database, $port);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get the form data
$answer1 = $_POST['questionGender'];
$answer2 = $_POST['questionAge'];
$answer3 = $_POST['questionEducation'];
$answer4 = $_POST['questionIT'];

// Insert the data into the database
$sql = "INSERT INTO demographics (Gender, Age, Education, IT) VALUES ('$answer1', '$answer2', '$answer3', '$answer4')";

if (mysqli_query($conn, $sql)) {
    echo "Thank you for your answers";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
