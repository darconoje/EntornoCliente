<?php 
function validar(){
    $errores = [];
    if(isset($_POST["tamaño"])){
       $tamaño = $_POST["tamaño"];
       $errores["tamaño"] = [];
    
       if(!preg_match("/^[0-9]*$/",$tamaño)){
          $errores["tamaño"]["numerico"] = "ERROR ESTO NO ES UN NUMERO";
       }
       if($tamaño < 0){
          $errores["tamaño"]["min"] =  "COMO MINIMO DEBE SER MAYOR QUE 0";
       }
    }

    if(isset($_POST["nombre2"])){
       $nombre2 = $_POST["nombre2"];
       $errores["nombre2"] = [];
    
       if(strlen($nombre2)==0){
          $errores["nombre2"]["min"] =  "DEBE DE CONTENER ALGUN CARACTER";
       }
    }

    if(isset($_POST["origen"])){
       $origen = $_POST["origen"];
       $errores["origen"] = [];
       if(!preg_match("/^[A-Z][a-z]+( [A-Z][a-z]+)*$/",$origen)){
          $errores["origen"]["letras"] = "ERROR DEBEN USARSE SOLAMENTE LETRAS, LA INICIAL EN MAYUSCULA";
       }
    
       if(strlen($origen)==0){
          $errores["origen"]["min"] =  "DEBE CONTENER ALGUN CARACTER";
       }
    }

    return $errores;
}