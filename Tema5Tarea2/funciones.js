var procesos = [];

$(function(){
    $("#nombre2").change(function(){
        validarNombre($("#nombre2"));
    });

    $("#origen").change(function(){
        validarNombre($("#origen"));
    });

    $("#tamaño").change(function(){
        validarNumero($("#tamaño"));
    });

    $("#formularioJSON").submit(function(event){
        event.preventDefault();
        obtenerDatosJSON();
    });

    $("#formularioBusqueda").submit(function(event){
        event.preventDefault();
        obtenerDatosBusqueda();
    });

    $("#formularioAñadir").submit(function(event){
        event.preventDefault();
        validarFormularioBusqueda();
    });

});

function validarNumero(input){
    let datosPost = {};
    datosPost[input.attr("name")] = input.val();
    realizarValidacion(datosPost,null);
}

function validarNombre(input){
    let datosPost = {};
    datosPost[input.attr("name")] = input.val();
    realizarValidacion(datosPost,null);
}

function validarFormularioBusqueda(){
    let datosPost = $("#formulario").serialize();
    realizarValidacion(datosPost,function(){
        datosAñadir();
    });
}

function realizarValidacion(datosPost,funcionCallback){
    
    $.ajax({
        url:"validarDatos.php",
        method:'POST',
        data:datosPost,
        type:"JSON",
        beforeSend:function(){
            $("#spinner").show();
            procesos.push(true);
        }
    })

    .done(function(errores){
        let todoCorrecto = true;
      
        for(inputName in errores){
            let erroresInput = errores[inputName];
            let divErrores = $(`#${inputName}`).next("div");
            divErrores.html("");
            if(!$.isEmptyObject(erroresInput)){
                for(tipoError in erroresInput){
                    divErrores.append(`<div>${erroresInput[tipoError]}</div>`);
                }
                todoCorrecto = false;
            }
        }

        if(todoCorrecto && funcionCallback !== null){
            funcionCallback();
        }else{
            document.getElementById("resultado").innerHTML="CORREGIR ERRORES";   
        }
    })

    .fail(function(){
        alert("HA HABIDO UN ERROR EN LA PETICIÓN");
    })
    .always(function(){
        procesos.pop();
        if(procesos.length === 0){
          $("#spinner").hide();
        }
    });
}

function obtenerDatosJSON(){
    $("#spinner").css("display","block");
    fetch("datosJSON.php", {
        method: 'post'
    })
    .then(function(response){ return response.json()})
    .then(tratarResultadoJSON)
    .catch(function(err) {
        console.log(err);
        alert("ERROR EN LA PETICION");
         $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN"); 
    }).finally(function(){
         $("#spinner").css("display","none");
    });
}

function obtenerDatosBusqueda(){
    let form = new FormData();
    $("#spinner").css("display","block");
    form.append("nombre",$("#nombre").val());
    form.append("so",$("#so").val());
    fetch("datosBusqueda.php",{
        method:"post",
        body:form
    })
    .then(function(response){
            return response.json();
    })
    .then(tratarResultadoJSON)
    .catch(function(err){
        console.log(err);
        alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");    
    }).finally(function(){
        $("#spinner").css("display","none");
    });
}

function datosAñadir(){
    let form = new FormData();
    form.append("nombre2",$("#nombre2").val());
    form.append("so2",$("#so2").val());
    form.append("origen",$("#origen").val());
    form.append("tamaño",$("#tamaño").val());
    form.append("estado",$("#estado").val());
    fetch("datosAñadir.php",{
        method:"post",
        body:form
    })
    .then(function(response){
            return response.json();
    })
    .then(function(){
        $("#resultado").html("DISTRIBUCIÓN AÑADIDA CORRECTAMENTE");
    })
    .catch(function(error){
        console.error(error);
        alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");    
    }).finally(function(){
    })
    
    ;
}

function tratarResultadoJSON(respuesta){
    var resultados= respuesta;
    let salida="<table border='1'><tr><th>NOMBRE</th><th>SISTEMA OPERATIVO</th><th>ORIGEN</th><th>TAMAÑO (MB)</th><th>ESTADO</th></tr>";
    if(resultados.length == 0){
        document.getElementById("resultado").innerHTML="NO SE HA OBTENIDO NINGUN RESULTADO";         
    }else{
        for (let i=0; i < resultados.length; i++){
            let objeto = resultados[i];
            salida+="<tr><td>"+objeto.nombre+"</td><td>"+
            objeto.so+"</td><td>"+objeto.origen+"</td><td>"+
            objeto.tamaño+"</td><td>"+objeto.estado+"</td></tr>";
        }

        salida+="</table>";

        document.getElementById("resultado").innerHTML=salida;        
    }
}