<?php

        // set up the connection variables
        $db_name  = 'expense_management';
        $hostname = 'localhost';
        $username = 'root';
        $password = 'qburst';
        
        $user_email = $_REQUEST['email'];
        $user_password = $_REQUEST['password'];

        // connect to the database
        $dbh = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password);

        // a query get all the records from the users table
        $sql = "SELECT user_id, password, username, email FROM users WHERE email='$user_email' AND password='$user_password'";

        // use prepared statements, even if not strictly required is good practice
        $stmt = $dbh->prepare( $sql );

        // execute the query
        $stmt->execute();

        // fetch the results into an array
        $result = $stmt->fetchAll( PDO::FETCH_ASSOC );
        
        if(!(empty($result)))
        {
            session_start();
            $_SESSION["logged_user_id"] = $result[0]['user_id'];
        }
        // convert to json
        $json = json_encode( $result );

        // echo the json string
        echo $json; die();
?>
