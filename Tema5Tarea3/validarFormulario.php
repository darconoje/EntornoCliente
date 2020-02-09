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
          $errores["tamaño"]["min"] =  "COMO MINIMO DEBE SER 0";
       }
       if($tamaño == null){
          $errores["tamaño"]["vacio"] = "NO PUEDE ESTAR VACIO";
       }
    }

    if(isset($_POST["nombre"])){
       $nombre = $_POST["nombre"];
       $errores["nombre"] = [];
    
       if(strlen($nombre)==0){
          $errores["nombre"]["vacio"] =  "NO PUEDE ESTAR VACIO";
       }
    } 



    if(isset($_POST["origen"])){
       $origen = $_POST["origen"];
       $errores["origen"] = [];
       if(!preg_match("/^[A-Z][a-z]+( [A-Z][a-z]+)*$/",$origen)){
          $errores["origen"]["letras"] = "ERROR DEBEN USARSE SOLAMENTE LETRAS, LA INICIAL EN MAYUSCULA";
       }
    
       if(strlen($origen)==0){
          $errores["origen"]["vacio"] =  "NO PUEDE ESTAR VACIO";
       }
    }

    if(!isset($_POST["nombre"])){
      $errores["nombre"]["vacio"] =  "NO PUEDE ESTAR VACIO";
    }

    if(!isset($_POST["origen"])){
      $errores["origen"]["vacio"] =  "NO PUEDE ESTAR VACIO";
    }

    if(!isset($_POST["tamaño"])){
      $errores["tamaño"]["vacio"] =  "NO PUEDE ESTAR VACIO";
    }    

    return $errores;
}