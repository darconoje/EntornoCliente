document.addEventListener("DOMContentLoaded",function(){
    let formularioMYSQL = document.getElementById("formularioXML");
    formularioMYSQL.addEventListener("submit",function(event){
        event.preventDefault();
        realizarPeticionSincronaXML();
    });

    let formularioPDO = document.getElementById("formularioJSON");
    formularioPDO.addEventListener("submit",function(event){
        event.preventDefault();
        realizarPeticionAsincronaJSON();
    });

    let formularioBuscar = document.getElementById("formularioBusqueda");
    formularioBuscar.addEventListener("submit",function(event){
        event.preventDefault();
        peticionBusqueda();
    });

    let formularioAñadir = document.getElementById("formularioAñadir");
    formularioAñadir.addEventListener("submit",function(event){
        event.preventDefault();
        peticionAñadir();
    });    
})

/////////////////////////////////////////////////////////
// Función crear objeto XMLHTTPRequest///////////////////
/////////////////////////////////////////////////////////

function objetoXHR(){
    if (window.XMLHttpRequest){// El navegador implementa la interfaz XHR de forma nativa
        return new XMLHttpRequest();
    }else if (window.ActiveXObject){ // El navegador no implementa la interfaz XHR de forma nativa
                                     // Por ejemplo: Internet explorer.
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++){
            try{
                /* Se intenta crear el objeto en Internet Explorer comenzando
                en la versión más moderna del objeto hasta la primera versión.
                En el momento que se consiga crear el objeto, saldrá del bucle
                devolviendo el nuevo objeto creado. */

                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {}//Capturamos el error,
        }
    }
    /* Si llegamos aquí es porque el navegador no posee ninguna forma de crear el objeto.
     Emitimos un mensaje de error usando el objeto Error.
     Más información sobre gestión de errores en:
     HTTP://www.javascriptkit.com/javatutors/trycatch2.sHTML
     */
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}

function realizarPeticionSincronaXML(){
    let divResultado =  document.getElementById("resultado");
    divResultado.innerHTML = "";
    document.getElementById("spinner").style ="display:block";
    miXHR = new objetoXHR();
    miXHR.open("GET", "datosXML.php", false);
    miXHR.onreadystatechange = comprobarEstadoPeticionXML;    
    miXHR.send(null);
}

function realizarPeticionAsincronaJSON(){
    let divResultado =  document.getElementById("resultado");
    divResultado.innerHTML = "";
    document.getElementById("spinner").style ="display:block";
    miXHR = new objetoXHR();
    miXHR.open("GET", "datosJSON.php", true);
    miXHR.onreadystatechange = comprobarEstadoPeticionJSON;
    miXHR.send(null);
}

function comprobarEstadoPeticionXML(){
    switch(this.readyState){
        case 4:
            if (this.status == 200){
               crearTablaXML(this.responseXML);
            }else{
                alert("HA HABIDO UN ERROR. INTENTELO MAS TARDE.")
            }
            document.getElementById("spinner").style ="display:none";
            break;    
    }
}

function comprobarEstadoPeticionJSON(){
    switch(this.readyState){
        case 4:
            if (this.status == 200){
                crearTablaJSON(this.responseText);
            }else{
                alert("HA HABIDO UN ERROR. INTENTELO MAS TARDE.")
            }
            document.getElementById("spinner").style ="display:none";
            break;    
    }
}

function crearTablaJSON(respuesta){
    var resultados= JSON.parse(respuesta);
    let salida="<table border='1'><tr><th>NOMBRE</th><th>GENERO</th><th>DIRECTOR</th><th>ESTRENO</th></tr>";
    if(resultados.length===0){
        document.getElementById("resultado").innerHTML="NO HAY NINGUN RESULTADO";
    }else{
         for (let i=0; i < resultados.length; i++){
            let objeto = resultados[i];
            salida+="<tr><td>"+objeto.nombre+"</td><td>"+
            objeto.genero+"</td><td>"+objeto.director+"</td><td>"+
            objeto.estreno +"</td></tr>";
        }

        salida+="</table>";

        document.getElementById("resultado").innerHTML=salida;       
    }


}

function crearTablaXML(respuesta){
    let  datos=respuesta;


    // Tenemos que recorrer el fichero XML empleando los métodos del DOM
    let peliculas = datos.documentElement.getElementsByTagName("PELICULA");

    // En la variable salida compondremos el código HTML de la tabla a imprimir.
    let salida="<table border='1'><tr><th>NOMBRE</th><th>GENERO</th><th>DIRECTOR</th><th>ESTRENO</th></tr>";

    // Hacemos un bucle para recorrer todos los elementos CD.
    for (let i=0;i<peliculas.length;i++){
        salida+="<tr>";

        let nombre =peliculas[i].getElementsByTagName("NOMBRE");
        salida+="<td>" + nombre[0].firstChild.nodeValue + "</td>";

        let genero =peliculas[i].getElementsByTagName("GENERO");
        salida+="<td>" + genero[0].firstChild.nodeValue + "</td>";

        let director =peliculas[i].getElementsByTagName("DIRECTOR");
        salida+="<td>" + director[0].firstChild.nodeValue + "</td>";

        let duracion =peliculas[i].getElementsByTagName("ESTRENO");
        salida+="<td>" + duracion[0].firstChild.nodeValue + "</td>";

    // Cerramos la fila.
        salida+="</tr>";
    }

    // Cuando ya no hay más peliculas cerramos la tabla.
    salida+="</table>";

    // Imprimimos la tabla dentro del contenedor resultados.
    document.getElementById("resultado").innerHTML=salida;
}

function peticionBusqueda(){
    let divResultado =  document.getElementById("resultado");
    divResultado.innerHTML = "";

    let nombre = document.getElementById("nombre").value;
    let genero = document.getElementById("genero").value;
    let check = document.getElementById("check").checked;

    document.getElementById("spinner").style ="display:block";
    
    miXHR = new objetoXHR();

    miXHR.open("POST", "datosBusqueda.php", true);
    let datos = "nombre="+nombre+"&genero="+genero+"&check="+check;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.onreadystatechange = comprobarEstadoPeticionJSON;
    miXHR.send(datos);       
}

function peticionAñadir(){
    let divResultado =  document.getElementById("resultado");
    divResultado.innerHTML = "";

    let nombre = document.getElementById("nombre2").value;
    let genero = document.getElementById("genero2").value;
    let director = document.getElementById("director").value;
    let estreno = document.getElementById("estreno").value;

    document.getElementById("spinner").style ="display:block";
    
    miXHR = new objetoXHR();

    miXHR.open("GET", "datosAñadir.php", true);
    let datos = "nombre="+nombre+"&genero="+genero+"&director="+director+"&estreno="+estreno;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.onreadystatechange = comprobarEstadoPeticionAñadir;
    miXHR.send(datos);       

}

function comprobarEstadoPeticionAñadir(){
    switch(this.readyState){
        case 4:
            if (this.status == 200){
                tratarAñadir(this.responseText);
            }else{
                alert("HA HABIDO UN ERROR. INTENTELO MAS TARDE.")
            }
            document.getElementById("spinner").style ="display:none";
            break;    
    }
}

function tratarAñadir(respuesta){
    var resultados= JSON.parse(respuesta);
    document.getElementById("resultado").innerHTML="AÑADIDO CON ÉXITO";       
}