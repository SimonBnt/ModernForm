<?php
    require_once "db_config.php";

    function login($email, $password) {
        session_start();
        global $pdo;
    
        try {
            $query = $pdo->prepare("SELECT * FROM users WHERE email=?"); 
            $query->setFetchMode(PDO::FETCH_ASSOC);
            $query->execute([$email]);
            $user = $query->fetch();

            if(empty($user) || $user === false) {
                $_SESSION["errorMessage"] = "Login failed.";
            } elseif (!password_verify($password, $user["password"])) {
                $_SESSION["errorMessage"] = "Wrong password.";
            } else {
                $_SESSION["validationMessage"] = "You are successfully connected.";
                $_SESSION["connected"] = true;
            }
        } catch (PDOException $e) {
            session_destroy();
            error_log("Database error: " . $e->getMessage());
        } finally {
            header("location:../../index.php");
        }
    }

    function addUser($email, $hashedPassword, $samePassword) {
        session_start();
        global $pdo;

        try {
            if (password_verify($samePassword, $hashedPassword)) {
                $query = $pdo->prepare("INSERT INTO users (email, password) VALUES ('$email', '$hashedPassword')"); 
                $query->execute();
                $_SESSION["validationMessage"] = "Your account has been successfully added.";
            } else {
                $_SESSION["errorMessage"] = "An error occurred, and your account could not be added.";
            }
        } catch (PDOException $e) {
            session_destroy();
            error_log("Database error: " . $e->getMessage());
        } finally {
            header("location:../../index.php");
        }
    }

    function testInput($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>
