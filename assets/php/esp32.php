<?php
include 'conn.php';
// Get the concatenated string with device states from the POST request
$deviceStatesString = $_POST["device_states"];

// Split the string into an array of device states
$deviceStatesArray = explode("$", $deviceStatesString);

// Update the "data" table with the new device states
$sql = "UPDATE data SET value = '$deviceStatesArray[0]' WHERE name = 'consumo_gas'";
$conn->query($sql);

$sql = "UPDATE data SET value = '$deviceStatesArray[1]' WHERE name = 'consumo_agua'";
$conn->query($sql);

$sql = "UPDATE data SET value = '$deviceStatesArray[2]' WHERE name = 'consumo_elect'";
$conn->query($sql);

$sql = "UPDATE data SET value = '$deviceStatesArray[3]' WHERE name = 'reserva_agua'";
$conn->query($sql);

$sql = "UPDATE data SET value = '$deviceStatesArray[4]' WHERE name = 'generador_solar'";
$conn->query($sql);

$sql = "UPDATE data SET value = '$deviceStatesArray[5]' WHERE name = 'generador_heolico'";
$conn->query($sql);

// Fetch device states from the "devices" table
$sql = "SELECT name, state FROM devices";
$result = $conn->query($sql);

// Create an associative array to store device states
$deviceStates = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $device = $row["name"];
        $state = $row["state"];
        $deviceStates[$device] = $state;
    }
}

// Close the connection
$conn->close();

// Return the concatenated string of device states
echo implode("$", $deviceStates);
?>