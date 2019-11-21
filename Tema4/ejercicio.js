let listadousuarios = [];

document.addEventListener("DOMContentLoaded",function(){
    let formulario = document.getElementById("formularioCrearUsuario");
    formulario.addEventListener("submit",validarFormulario);
})

function validarNombre(event){
    let esCorrecto = true;
    let inputNombre = document.getElementById("nombre");
    let valor = inputNombre.value.trim();
    let listaErrores = document.getElementById("erroresNombre");
    listaErrores.innerHTML = "";
    inputNombre.classList.remove("inputErroneo");
    inputNombre.classList.remove("inputCorrecto");

    if(!/^[a-zA-Z\s]+$/.test(valor)){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "SOLO DEBEN USARSE LETRAS O ESPACIOS";
        listaErrores.appendChild(divError);
    }

    if(valor.length < 3){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "DEBE HABER AL MENOS 3 CARACTERES";
        listaErrores.appendChild(divError);
    }

    if(esCorrecto){
        inputNombre.classList.add("inputCorrecto");
    }else{
        inputNombre.classList.add("inputErroneo");
    }

    return esCorrecto;
}

function validarApellidos(event){
    let esCorrecto = true;
    let inputApellidos = document.getElementById("apellidos");
    let valor = inputApellidos.value.trim();
    let listaErrores = document.getElementById("erroresApellidos");
    listaErrores.innerHTML = "";
    inputApellidos.classList.remove("inputErroneo");
    inputApellidos.classList.remove("inputCorrecto");

    if(!/^[a-zA-Z\s]+$/.test(valor)){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "SOLO DEBEN USARSE LETRAS O ESPACIOS";
        listaErrores.appendChild(divError);
    }

    if(valor == document.getElementById("nombre").value.trim() ){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "LOS APELLIDOS NO PUEDEN SER IGUAL AL NOMBRE";
        listaErrores.appendChild(divError);
    }

    if(valor.length < 3){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "DEBE HABER AL MENOS 3 CARACTERES";
        listaErrores.appendChild(divError);
    }

    if(esCorrecto){
        inputApellidos.classList.add("inputCorrecto");
    }else{
        inputApellidos.classList.add("inputErroneo");
    }

    return esCorrecto;
}

function validarEdad(event){
    let esCorrecto = true;
    let inputEdad = document.getElementById("edad");
    let valor = inputEdad.value.trim();
    let listaErrores = document.getElementById("erroresEdad");
    listaErrores.innerHTML = "";
    inputEdad.classList.remove("inputErroneo");
    inputEdad.classList.remove("inputCorrecto");

    if(!/^[0-9]*$/.test(valor)){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "SOLO DEBEN USARSE NUMEROS";
        listaErrores.appendChild(divError);
    }

    if(valor.length < 1){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "NO PUEDE ESTAR VACIO";
        listaErrores.appendChild(divError);
    }

    if(parseInt(valor)<18){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "DEBE SER MAYOR DE EDAD";
        listaErrores.appendChild(divError);
    }

    if(esCorrecto){
        inputEdad.classList.add("inputCorrecto");
    }else{
        inputEdad.classList.add("inputErroneo");
    }

    return esCorrecto;
}

function validarProfesion(event){
    return true;
}

function validarTerminos(event){
    let esCorrecto = true;
    let inputTerminos = document.getElementById("terminos");
    let listaErrores = document.getElementById("erroresTerminos");
    listaErrores.innerHTML = "";
    inputTerminos.classList.remove("inputErroneo");
    inputTerminos.classList.remove("inputCorrecto"); 

    if(!inputTerminos.checked){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "DEBE ACEPTAR LOS TERMINOS";
        listaErrores.appendChild(divError);
    }

    if(esCorrecto){
        inputTerminos.classList.add("inputCorrecto");
    }else{
        inputTerminos.classList.add("inputErroneo");
    }

    return esCorrecto;  
}

function validarFormulario(event){
    event.preventDefault();
    let esFormularioCorrecto = false;
    let esCorrectoNombre = validarNombre();
    let esCorrectoApellidos = validarApellidos();
    let esCorrectoEdad = validarEdad();
    let esCorrectoProfesion = validarProfesion();
    let esCorrectoTerminos = validarTerminos();
    if(esCorrectoNombre && esCorrectoApellidos && esCorrectoEdad && esCorrectoProfesion && esCorrectoTerminos){
        esFormularioCorrecto = true;
    }
    if(esFormularioCorrecto){

        let formulario = event.target;
        formulario.submit();

        let usuario = {};
        let nombre = document.getElementById("nombre").value.trim();
        let apellidos = document.getElementById("apellidos").value.trim();
        let edad = document.getElementById("edad").value.trim();
        let profesion = document.getElementById("profesion").value;
        usuario.nombre = nombre;
        usuario.apellidos = apellidos;
        usuario.edad = edad;
        usuario.profesion = profesion;
        listadoUsuarios.push(usuario);

        alert("USUARIO CREADO");
        formulario.reset();
    }else{
        alert("HAY ERRORES EN EL FORMULARIO");
    }

 
}