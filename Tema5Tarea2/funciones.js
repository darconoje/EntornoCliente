var procesos = [];

$(function(){
    $("#nombre2").change(function(){
        validarDatos([$(this)],false);
    });

    $("#origen").change(function(){
        validarDatos([$(this)],false);
    });

    $("#tamaño").change(function(){
        validarDatos([$(this)],false);
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
        $("#botonAñadir").prop("disabled",true);
        $("#formulario input").prop("readOnly",true);
        validarDatos([$("#nombre2"),$("#origen"),$("#tamaño")],true);       
    });

});

function obtenerDatosJSON(){
    $("#spinner").css("display","block");
    $.ajax({
        url:"datosJSON.php",
        method:'POST',
        type:"JSON"
    })
      .done(function(response){
            tratarResultadoJSON(response);
        })
      .fail(function(){
        alert("HA HABIDO UN ERROR EN LA PETICIÓN");
        $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
      }).always(function(){
         $("#spinner").css("display","none");        
      });
}

function obtenerDatosBusqueda(){
    $("#spinner").css("display","block");
    let nombre = $("#nombre").val();
    let so = $("#so").val();
    $.ajax({
        url:"datosBusqueda.php",
        method:'POST',
        data:{nombre:nombre,so:so},
        type:"JSON"
    })
      .done(function(response){
            tratarResultadoJSON(response);
        })
      .fail(function(){
        alert("HA HABIDO UN ERROR EN LA PETICIÓN");
        $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
      }).always(function(){
         $("#spinner").css("display","none");        
      });    
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

function validarDatos(listaInputs,ejecutarFormulario){
    var datosPOST = {};
    listaInputs.forEach(
        input => datosPOST[input.attr('name')] = input.val()
    );
    
    $.ajax({
        url:"validarDatos.php",
        method:'POST',
        data:datosPOST,
        type:"JSON",
        beforeSend:function(){
            $("#spinner").show();
            procesos.push(true);
        }
    })
      .done(function(errores){
            document.getElementById("resultado").innerHTML="";
            let todoCorrecto = true;
            for(inputName in errores){
                let erroresInput = errores[inputName];
                $(`#${inputName}`).removeClass("inputCorrecto");
                $(`#${inputName}`).removeClass("inputErroneo");
                let divErrores = $(`#${inputName}`).next("div");
                divErrores.html("");
                if(!$.isEmptyObject(erroresInput)){
                    $(`#${inputName}`).addClass("inputErroneo");
                    for(tipoError in erroresInput){
                        divErrores.append(`<div>${erroresInput[tipoError]}</div>`);
                    }
                    todoCorrecto = false;
                    document.getElementById("resultado").innerHTML="DEBE CORREGIR LOS ERRORES";

                }else{
                   $(`#${inputName}`).addClass("inputCorrecto"); 
                }
            }

            if(todoCorrecto && ejecutarFormulario){
                   datosAñadir();
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
          if(ejecutarFormulario){
            $("#botonAñadir").prop("disabled",false);
            $("#formularioAñadir input").prop("readOnly",false);
          }
      })
}

function datosAñadir(){
    let nombre = $("#nombre2").val();
    let so = $("#so2").val();
    let origen = $("#origen").val();
    let tamaño = $("#tamaño").val();
    let estado = $("#estado").val();
    $.ajax({
        url:"datosAñadir.php",
        method:'POST',
        data:{nombre2:nombre,so2:so,origen:origen,tamaño:tamaño,estado:estado},
        type:"JSON"
    })
      .done(function(errores){
            $("#resultado").html("DISTRIBUCIÓN AÑADIDA CORRECTAMENTE");
        })
      .fail(function(){
          alert("HA HABIDO UN ERROR EN LA PETICIÓN");
      });
}

