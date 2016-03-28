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

        // a query get all the records from the users table
        $sql = "SELECT expenses.user_id as emp_id, username as name, date, project, purpose, "
                . "amount as rate, approver_name as pm, expenses_status_id as status, total, invoice,"
                . "reimburse FROM expenses "
                . "LEFT JOIN users "
                . "ON users.user_id=expenses.user_id"
                . " WHERE expenses.user_id=$user_id";

        // use prepared statements, even if not strictly required is good practice
        $stmt = $dbh->prepare( $sql );

        // execute the query
        $stmt->execute();
        $array = array();
        $result = $stmt->fetchAll( PDO::FETCH_ASSOC);
        // fetch the results into an array
        $result1 = array('user1' => $result);

        // convert to json
        $json = json_encode( $result1 );

        // echo the json string
        echo $json; die();
?>

