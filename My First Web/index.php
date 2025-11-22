<?php
// Dummy PHP page

$title = "My Dummy PHP Page";
$message = "Welcome to your first PHP page!";
$date = date("Y-m-d H:i:s");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?php echo htmlspecialchars($title); ?></title>
</head>
<body>
    <h1><?php echo htmlspecialchars($title); ?></h1>
    <p><?php echo htmlspecialchars($message); ?></p>
    <small>Page generated on <?php echo $date; ?></small>
</body>
</html>