<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST' && $_SERVER['REQUEST_METHOD'] !== 'GET' && $_SERVER['REQUEST_METHOD'] !== 'PUT') {
    http_response_code(405);
    exit;
}

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

error_reporting(E_ALL); ini_set('display_errors', 1);
echo "Hello World";


// Allow from any origin
header('Access-Control-Allow-Origin: *');

// Database connection settings
$host = 'kamil-foundation-server.mysql.database.azure.com';
$user = 'admin1';
$password = 'Waser567765.';
$database = 'project';
$port = 3306;
$ssl_ca = 'DigiCertTLSRSA4096RootG5.crt';

// Connect to the database using PDO
try {
    $dsn = "mysql:host=$host;dbname=$database;port=$port;charset=utf8mb4";
    $options = array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::MYSQL_ATTR_SSL_CA => $ssl_ca
    );
    $conn = new PDO($dsn, $user, $password, $options);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    exit;
}

// Get the form data
$answer1 = $_POST['questionGender'];
$answer2 = $_POST['questionAge'];
$answer3 = $_POST['questionEducation'];
$answer4 = $_POST['questionIT'];

// Insert the data into the database
$sql = "INSERT INTO demographics (Gender, Age, Education, IT) VALUES (:answer1, :answer2, :answer3, :answer4)";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':answer1', $answer1);
$stmt->bindParam(':answer2', $answer2);
$stmt->bindParam(':answer3', $answer3);
$stmt->bindParam(':answer4', $answer4);

if ($stmt->execute()) {
    echo "Thank you for your answers";
} else {
    echo "Error: " . $sql . "<br>" . $stmt->errorInfo();
}

// Close the connection
$conn = null;
?>
