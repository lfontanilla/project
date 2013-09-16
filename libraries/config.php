<?php

// Connection's Parameters
//$db_host = "mysql3.000webhost.com";
//$db_name = "a4187511_company";
//$username = "a4187511_root";
//$password = "T4kt1ks1";
$db_host = "localhost";
$db_name = "company";
$username = "root";
$password = "";
$con = mysqli_connect($db_host, $username, $password, $db_name);
if (mysqli_connect_errno())
  $con = "";
?>