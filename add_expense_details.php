<?php

        // set up the connection variables
        $db_name  = 'expense_management';
        $hostname = 'localhost';
        $username = 'root';
        $password = 'qburst';
        
        session_start();
        if (isset($_SESSION['logged_user_id']) && !empty($_SESSION['logged_user_id'])) {
            $user_id = $_SESSION['logged_user_id'];
        }

        // connect to the database
        $dbh = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password);

        $approver_name = $_REQUEST['pm'];
        $project = $_REQUEST['project'];
        $purpose = $_REQUEST['purpose'];
        $invoice = $_REQUEST['invoice'];
        $amount = $_REQUEST['rate'];
        $date = date("Y-m-d", strtotime($_REQUEST['date']));
        $reimburse = $_REQUEST['reimburse'];
        $expenses_status_id = $_REQUEST['status'];
        
        // a query get all the records from the users table
        $sql = "INSERT INTO expenses (user_id, approver_name, project, purpose, 
                invoice, amount, date, reimburse, expenses_status_id)
                VALUES ('$user_id', '$approver_name','$project', '$purpose', '$invoice',"
                . "'$amount', '$date', '$reimburse', '$expenses_status_id');";

        // use prepared statements, even if not strictly required is good practice
        $stmt = $dbh->prepare( $sql );

        // execute the query
        $stmt->execute();
        die('success');
?>

