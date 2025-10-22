<?php
include 'conn.php';
// Fetch sensor data from the "data" table
$sql = "SELECT name, value FROM data";
$result = $conn->query($sql);

// Create an associative array to store sensor data
$sensorData = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $name = $row["name"];
        $value = $row["value"];
        $sensorData[$name] = $value;
    }
}

// Close the connection
$conn->close();

// Return the JSON-encoded array
echo json_encode($sensorData);
?>