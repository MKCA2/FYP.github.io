<?php
$host = 'localhost'; // Replace with your database host
$username = 'root'; // Replace with your database username
$password = ''; // Replace with your database password
$database = 'sensordatabase'; // Replace with your database name

$connection = mysqli_connect($host, $username, $password, $database);

$query = "SELECT * FROM sensors";

$result = mysqli_query($connection, $query);

if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

if (!$result) {
    die("Query failed: " . mysqli_error($connection));
}

$data = [];

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

// Close the database connection
mysqli_close($connection);

// Set the response header to indicate JSON content
header('Content-Type: application/json');

// Output the JSON data
echo json_encode($data);

?>