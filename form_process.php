<?php
    $name = $email = $message = $password = $samePassword = "";

    $nameError = $emailError = $messageError = $passwordError = $samePasswordError = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = testInput($_POST["name"]);
        $email = testInput($_POST["email"]);
        $message = testInput($_POST["message"]);
        $password = testInput($_POST["password"]);
        $samePassword = testInput($_POST["samepassword"]);
    };

    function testInput($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    };

    if ($_POST["RESQUEST_METHOD"] == "POST") {
        if (empty($_POST["name"])) {
            header("Location: index.php");
            exit;
        } else {
            $name = testInput($_POST["name"]);

            if(!preg_match("/^[a-zA-Z-']*$/", $name)) {
                header("Location: index.php");
                exit;
            };
        };
    };
?>