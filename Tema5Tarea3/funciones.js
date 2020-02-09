var procesos = [];

$(function(){

    $("#selectSO").change(function(){
        obtenerDatosSelect();
    });

    $("#nombre").change(function(){
        validarDatos([$(this)],false);
    });

    $("#origen").change(function(){
        validarDatos([$(this)],false);
    });

    $("#tamaño").change(function(){
        validarDatos([$(this)],false);
    });

    $("#formularioActualizar").submit(function(event){
        event.preventDefault();
        $("#botonActualizar").prop("disabled",true);
        $("#formularioActualizar input").prop("readOnly",true);
        validarDatos([$("#nombre"),$("#origen"),$("#tamaño")],true);       
    });

    $("button[data-accion='eliminar']").on("click",function(event){
        let boton = $(event.target);
        
        mostrarModalEliminar(boton.attr("data-idEliminar"));
    });

    $("button[data-accion='confirmar-eliminar']").on("click",function(event){
        let boton = $(event.target);
        eliminarDistribucion(boton.attr("data-idEliminar"));
    });

});

function obtenerDatosSelect(){
    $("#spinner").css("display","block"); 
    let form = new FormData();
    form.append("selectSO",$("#selectSO").val());
    fetch("datosSelect.php",{
        method:"post",
        body:form
    })
    .then(function(response){
            return response.json();
    })
    .then(rellenarSelect)
    .catch(function(err){
        alert("ERROR EN LA PETICION");
        $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");    
    }).finally(function(){
        $("#spinner").css("display","none");
    });
}

function rellenarSelect(respuesta){
    var resultados= respuesta;
    let salida="";         
        for (let i=0; i < resultados.length; i++){
            let objeto = resultados[i];
            salida+="<option>"+objeto.nombre+"</option>";
        }

        document.getElementById("selectResultado").innerHTML=salida;        
}

function validarDatos(listaInputs,ejecutarFormulario){
    let form = new FormData();
    $("#spinner").css("display","block");
    listaInputs.forEach(
        input => form.append(input.attr('id'),input.val())
    );
    fetch("validarDatos.php",{
            method:"POST",
            body:form
        
    })
    .then(function(response){
            return response.json();
    })
    .then(function(errores){
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
                   datosActualizar();
            }
    })
    .catch(function(err){
        console.log(err);
        alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");    
    }).finally(function(){
        $("#spinner").css("display","none");
    });
}

function datosActualizar(){
    let form = new FormData();
    form.append("selectDistribucion",$("#selectDistribucion").val());
    form.append("nombre",$("#nombre").val());
    form.append("so",$("#so").val());
    form.append("origen",$("#origen").val());
    form.append("tamaño",$("#tamaño").val());
    form.append("estado",$("#estado").val());
    fetch("datosActualizar.php",{
        method:"post",
        body:form
    })
    .then(function(response){
            return response.json();
    })
    .then($("#resultado").html("DISTRIBUCIÓN ACTUALIZADA CORRECTAMENTE"))
    .catch(function(err){
        console.log(err);
        alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");    
    });    
    /*
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
            $("#resultado").html("DISTRIBUCIÓN ACTUALIZADA CORRECTAMENTE");
        })
      .fail(function(){
          alert("HA HABIDO UN ERROR EN LA PETICIÓN");
      });
      */
}


function mostrarModalEliminar(idEliminar){
    $("#botonConfirmarEliminar").attr("data-ideliminar",idEliminar);
    $("#modalEliminar").modal("show");
}

function eliminarDistribucion(idEliminar){
    let form = new FormData();
    form.append("nombre",idEliminar);
    fetch("eliminar.php",{
        method:"POST",
        body:form
    }).then(function(){
        $("#modalEliminar").modal("hide");
        $("tr[data-idDistribucion='"+idEliminar+"']").remove();
    });
}