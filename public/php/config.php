

<?php
/* Database credentials. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
define('DB_SERVER', 'localec2-34-200-116-132.compute-1.amazonaws.com
host');
define('DB_USERNAME', 'whixavqxvwiesi');
define('DB_PASSWORD', '60b2088259a63bcf52183e122b2c5b61d771164eacb6eb869d4af98ffb2405cc
');
define('DB_NAME', 'd19tpt5atnil09');
 
/* Attempt to connect to MySQL database */
try{
    $pdo = new PDO("mysql:host=" . DB_SERVER . ";dbname=" . DB_NAME, DB_USERNAME, DB_PASSWORD);
    // Set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e){
    die("ERROR: Could not connect. " . $e->getMessage());
}
?>

