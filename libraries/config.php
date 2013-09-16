<?php

// Connection's Parameters
$db_host = "localhost";
$db_name = "company";
$username = "root";
$password = "";
$con = mysqli_connect($db_host, $username, $password, $db_name);
if (mysqli_connect_errno())
  $con = "";
?>
