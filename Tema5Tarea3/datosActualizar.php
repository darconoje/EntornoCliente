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
$stmt = $conn->prepare("UPDATE distribuciones SET nombre='".$_POST['nombre']."', so='".$_POST['so']."', origen='".$_POST['origen']."', tamaño='".$_POST['tamaño']."', estado='".$_POST['estado']."' WHERE nombre='".$_POST['selectDistribucion']."'");
$stmt->execute();
echo $stmt->rowCount();
?>