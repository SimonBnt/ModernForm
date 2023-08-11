<?php
    require_once "db_config.php";
    require_once "function.php";

    $email = $password = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST) && !empty($_POST)) {
        $email = testInput($_POST["email"]);
        $password = testInput($_POST["password"]);

        if (empty(["email"])) {
            exit;
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL) || !preg_match("/^[^\s@]+@[^\s@]+\.[^\s@]+$/", $email)){
            exit;
        };

        if (empty(["password"])) {
            exit;
        } elseif (!preg_match("/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/", $password)) {
            exit;
        } else {
            $hashOptions = [
                "cost" => 12,
            ]; 
    
            $hashedPassword = password_hash($password, PASSWORD_BCRYPT, $hashOptions);
        };

        login($email,$hashedPassword);
    }
?>
