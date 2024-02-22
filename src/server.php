<?php
header("Content-Type: application/json; charset=UTF-8");
$json = json_decode(file_get_contents("php://input"));
 $encode = json_encode($json);
 echo $encode;
 ?>