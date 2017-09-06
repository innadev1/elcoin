<?php
    
    // session_start();
    global $db;
    // print_r($_SESSION);

    try {
        $db = new PDO( "mysql:host=localhost;dbname=elcoin;charset=utf8", "elcoin", "elcoin123" );
        // var_dump($db);
    }

    catch(Exception $e) {
        echo $e->getMessage() ;
        echo "An error has occurred";
    }

?> 