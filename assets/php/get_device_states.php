

<?php
// 
include 'conn.php';

// Fetch device states from the database
$sql = "SELECT * FROM devices";
$result = $conn->query($sql);

// Create an associative array to store device states
$states = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $device = $row["name"];
        $state = $row["state"];
        $states[$device] = $state;
    }
}

// Close the connection
$conn->close();

// Return the JSON-encoded array
echo json_encode($states);
?>
