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
$stmt = $conn->prepare("SELECT nombre FROM distribuciones where so ='".$_POST["selectSO"]."'");		
$stmt->execute();
$listadoDistribuciones = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($listadoDistribuciones);
?>