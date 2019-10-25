//Esta funcion devuelve una frase nueva que contenga
//Todas las palabras de la frase pasada por parámetro
//que contenga el trozo de palabra. 
//Pero no valdrán aquellas que tengan el trozo de la palabra
//Al principio o al final.

//Por ejemplo: obtenerNuevaFrase("Espero ir al cine a ver el joker","e") => "ver joker";
//Por ejemplo: obtenerNuevaFrase("Todo depende de si el raton si acaba pronto con el queso","to") => "raton";
function obtenerNuevaFrase(frase,trozoPalabra){
    let resultado = "";
    let fraselowercase = frase.toLowerCase();
    let palabras = fraselowercase.split(" ");
    for(let i = 0 ; i<palabras.length ; i++){
        let palabra = palabras[i];
        if(palabra.includes(trozoPalabra)==true&&palabra.startsWith(trozoPalabra)==false&&palabra.endsWith(trozoPalabra)==false){
            resultado += palabra + " ";             
        }
    }
    return resultado.trim();
}

//Función que devuelve la suma de todas las posiciones
//En la que se encuentra una palabra en una frase.
//Por ejemplo: sumaDePosiciones("Prueba de la rueda","ue") => 16
//Por ejemplo: sumaDePosiciones("Aclaremos el ejercicio","acl") => 0
function sumaDePosiciones(frase,trozoPalabra){
    let resultado = 0;
    let fraselowercase = frase.toLowerCase();
    let i = 0;
    while(i<fraselowercase.length&&fraselowercase.includes(trozoPalabra,i)==true){
        resultado += fraselowercase.indexOf(trozoPalabra,i);
         i += fraselowercase.indexOf(trozoPalabra,i)+trozoPalabra.length;     
    }
    return resultado;
}

//Función que valida el formato RGB de los colores
//Formato RGB solo acepta letras de la A-F y a-f, 
//y numeros de 0 a 9, además de empezar por #.
//Los ejemplos de colores RGB son:
//     #123ABC o #123abc
//     #BBB    o #333     
function esValidoFormatoRGB(color){
    let resultado = false;
    if(color.startsWith("#")==true){
        for(let i = 1; i<color.length; i++){
            if((color.charCodeAt(i)>=48&&color.charCodeAt(i)<=57)||(color.charCodeAt(i)>=65&&color.charCodeAt(i)<=70)||(color.charCodeAt(i)>=97&&color.charCodeAt(i)<=102)){
                resultado = true;
            }else{
                resultado = false;
                break;
            }
        }       
    }
    return resultado;
}

//Función que valida una URL de una web .com y .es
//con más de un parámetro GET en la url.
//Las urls deben empezar por http://www. o https://www.
//Recordad que el primer parámetro por GET se indica con "?""
//Recordad que el segundo y posteriores parámetros por GET se indica con "&"
//Por ejemplo: http://www.prueba.es?ejemplo=1&prueba=2 => valido
//Por ejemplo: http://www.prueba.es?ejemplo=1 =>no valido
//Por ejemplo: http://www.prueba.es => No valido
//Por ejemplo: https://www.prueba?hola=1&holita=2&holar=3 =>No valido
function esValidaURL(url){
    let resultado = false;
    if(url.indexOf("?")>=0){
        let urlget = url.split("?");
        if(urlget[0].indexOf(".")>=0){
            let urlinicio = urlget[0].split(".");
            if(urlget[1].indexOf("&")>=0){
                let urlgetparam = urlget[1].split("&");
                if(urlinicio.length==3&&urlget.length==2&&urlgetparam.length>=2){
                    if((urlinicio[0].localeCompare("http://www")==0||urlinicio[0].localeCompare("https://www")==0)&&(urlinicio[2].localeCompare("com")==0||urlinicio[2].localeCompare("es")==0)){
                        resultado = true; 
                    }                       
                }
            }           
        }        
    }
    return resultado;
}
