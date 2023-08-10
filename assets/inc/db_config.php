<?php
    // ini_set('display_errors', 1);
    // ini_set('display_startup_errors', 1);
    // error_reporting(E_ALL);

    $host = 'localhost';
    $Db = 'users';
    $user = 'root';
    $password = 'root';


    $connection = "mysql:host=$host;dbname=$Db;charset=utf8mb4";

    try {
        $pdo = new PDO($connection, $user, $password);

        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    } catch (PDOException $error) {
        echo $error->getCode() . ' ' . $error->getMessage();
        exit;
    }
?>
