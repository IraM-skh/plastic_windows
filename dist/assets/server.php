<?php
header('Content-Type: application/json; charset=UTF-8');

$json = json_decode(file_get_contents("php://input"));
 //Выводим JSON для AJAX-запрса:
 echo var_dump($json);
 ?>
