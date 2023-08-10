<?php
    require_once "db_config.php";
    require_once "mailer.php";

    // function sendEmail($to, $subject, $name, $email, $message) {

    // }

    function signIn($email, $hashedPassword) {
        session_start();
        global $pdo;

        try {
            $query = $pdo -> prepare("SELECT * FROM users WHERE email=? and password=?"); 
            $query -> setFetchMode(PDO::FETCH_ASSOC);
            $query -> execute($email, md5($hashedPassword));
            $tab = $query -> fetchAll();

            if (count($tab) == 0) {
            } else {
                $_SESSION["connected"] = true;
                header("location:index.php");
            }
            echo "Vous êtes bien connecté";
        } catch (PDOException $e) {
            return [$e -> getCode()];
            echo "Une erreur est intervenue et vous n'avez pas pu vous connecter";
            session_destroy();
            header("location:index.php");
        }

    }

    function addUser($email, $hashedPassword, $samePassword) {
        session_start();
        global $pdo;

        if (!password_verify($samePassword, $hashedPassword)) {
            try {
                $query = $pdo -> prepare("INSERT INTO users (email, password) VALUES ('$email', '$hashedPassword')"); 
                $query -> execute();
                echo "Votre compte a bien été ajouté";
            } catch (PDOException $e) {
                return [$e -> getCode()];
                echo "Une erreur est intervenue et votre compte n'a pas pu être ajouté";
                session_destroy();
                header("location:index.php");
            }
        }
    }

    function testInput($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>
