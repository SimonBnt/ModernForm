<?php
    require_once "db_config.php";
    require_once "function.php";

    $email = $password = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST) && !empty($_POST)) {
        $email = testInput($_POST["email"]);
        $password = testInput($_POST["password"]);

        if (empty(["email"])) {
            header("Location: index.php");
            exit;
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL) || !preg_match("/^[^\s@]+@[^\s@]+\.[^\s@]+$/", $email)){
            header("Location: index.php");
            exit;
        };

        if (empty(["password"])) {
            header("Location: index.php");
            exit;
        } elseif (!preg_match("/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/", $password)) {
            header("Location: index.php");
            exit;
        } else {
            $hashOptions = [
                "cost" => 12,
            ]; 
    
            $hashedPassword = password_hash($password, PASSWORD_BCRYPT, $hashOptions);
        };

        signIn($email,$hashedPassword);
    }
?>
