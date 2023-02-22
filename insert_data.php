<?php
echo "Hello World";

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
$ssl = array(
    'ca' => 'DigiCertTLSRSA4096RootG5.crt',
    'verify_peer' => true,
);

// Connect to the database using PDO
try {
    $dsn = "mysql:host=$host;dbname=$database;port=$port";
    $options = array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::MYSQL_ATTR_SSL_CA => $ssl['ca'],
        PDO::MYSQL_ATTR_SSL_VERIFY_SERVER_CERT => $ssl['verify_peer']
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

$conn = null;
?>