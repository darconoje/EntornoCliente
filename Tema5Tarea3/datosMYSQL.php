<?php
require_once "configuracion.php";

// Creamos la conexion
$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");
$sql = "SELECT * FROM distribuciones";
$sql2 = "SELECT nombre FROM distribuciones";
$distribuciones = $conexion->query($sql);
$distribuciones2 = $conexion->query($sql);