<?php
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "entornocliente2";

$listadoDistribuciones = array();

$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->prepare("INSERT INTO distribuciones (nombre,so,origen,tamaño,estado) VALUES ('".$_POST['nombre2']."', '".$_POST['so2']."', '".$_POST['origen']."', '".$_POST['tamaño']."', '".$_POST['estado']."')");
$stmt->execute();
echo $stmt->rowCount();
?>