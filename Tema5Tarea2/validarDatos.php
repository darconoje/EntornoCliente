<?php
header('Content-Type: application/json');
require_once "validarFormulario.php";
echo json_encode(validar());
?>