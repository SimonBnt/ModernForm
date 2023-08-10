<?php
    require_once "db_config.php";
    require_once "mailer.php";
    require_once "function.php";

    $name = $email = $message = "";

    // $nameError = $emailError = $messageError = $passwordError = $samePasswordError = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST) && !empty($_POST)) {
        $name = testInput($_POST["name"]);
        $email = testInput($_POST["email"]);
        $message = testInput($_POST["message"]);

        if (empty(["name"])) {
            header("Location: index.php");
            exit;
        } elseif (!preg_match("/^[a-zA-Z-']*$/", $name)) {
            header("Location: index.php");
            exit;
        };

        if (empty(["email"])) {
            header("Location: index.php");
            exit;
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL) || !preg_match("/^[^\s@]+@[^\s@]+\.[^\s@]+$/", $email)){
            header("Location: index.php");
            exit;
        };

        if (empty(["message"])) {
            header("Location: index.php");
            exit;
        } elseif (!is_string($email) || !preg_match("/^([a-z0-9,?!;.: ]+)$/", $message) || strlen($message) > 255) {
            header("Location: index.php");
            exit;
        };
    }
?>