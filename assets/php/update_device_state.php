
<?php
include 'conn.php';
// Get the device and new state from the AJAX request
$device = $_POST["device"];
$newState = $_POST["state"];

// Update the device state in the database
$sql = "UPDATE devices SET state = '$newState' WHERE name = '$device'";

if ($conn->query($sql) === TRUE) {
    echo "Device state updated successfully";
} else {
    echo "Error updating device state: " . $conn->error;
}

// Close the connection
$conn->close();
?>
