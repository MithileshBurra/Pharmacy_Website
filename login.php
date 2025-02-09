<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $conn = new mysqli('localhost', 'root', '', 'test');
    if ($conn->connect_error) {
        die("Connection Failed: " . $conn->connect_error);
    } else {
        $stmt = $conn->prepare("SELECT * FROM registration WHERE email = ? AND password = ?");
        $stmt->bind_param("ss", $email, $password);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows === 1) {
            // Valid login
            $_SESSION['email'] = $email;
            header("Location: dashboard.php"); // Redirect to your dashboard page
        } else {
            // Invalid login
            header("Location: login.html"); // Redirect back to the login page
        }

        $stmt->close();
        $conn->close();
    }
}
?>
