<?php
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "entornocliente1";

$listadoPeliculas = array();

$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->prepare("SELECT * FROM peliculas");      
$stmt->execute();

$listadoPeliculas = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($listadoPeliculas);
?>