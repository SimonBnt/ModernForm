<?php
    $name = $email = $message = $password = $samePassword = "";

    // $nameError = $emailError = $messageError = $passwordError = $samePasswordError = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST) && !empty($_POST)) {
        $name = testInput($_POST["name"]);
        $email = testInput($_POST["email"]);
        $message = testInput($_POST["message"]);
        $password = testInput($_POST["password"]);
        $samePassword = testInput($_POST["samepassword"]);

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

        if (empty(["samepassword"])) {
            header("Location: index.php");
            exit;
        } elseif (!password_verify($samePassword, $hashedPassword)) {
            header("Location: index.php");
            exit;
        } else {
            $hashedSamePassword = password_hash($samePassword, PASSWORD_BCRYPT, $hashOptions);
        };
    };

    function testInput($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    };
?>