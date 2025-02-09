<?php
session_start();

if (!isset($_SESSION['email'])) {
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Welcome to the Dashboard</h1>
                <p>You are logged in as: <?php echo $_SESSION['email']; ?></p>
                <a href="logout.php">Logout</a>
            </div>
        </div>
    </div>
</body>
</html>
