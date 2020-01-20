<?php
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "entornocliente1";

$check = $_POST['check'];

$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
/*if($check == true){
$stmt = $conn->prepare("SELECT * FROM peliculas WHERE nombre LIKE '%".$_POST['nombre']."%' AND genero LIKE '%".$_POST['genero']."%' AND estreno >= 2000");	
}else{ */
$stmt = $conn->prepare("SELECT * FROM peliculas WHERE nombre LIKE '%".$_POST['nombre']."%' AND genero LIKE '%".$_POST['genero']."%'");		
//}
$stmt->execute();
$peliculas = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($peliculas);
?>