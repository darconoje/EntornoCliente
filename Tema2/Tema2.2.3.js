//Implementar las siguientes funciones para que pasen una serie de pruebas
//Usando solo estructuras de control para ello.

//Devuelves 1 si a es mayor que b
//Devuelves -1 si a es menor que b
//Devuelves 0 si a es igual b

function quienEsMayor(a,b){
let resultado = 0;
	if(a > b){
		resultado = 1;
	}else if(a < b){
		resultado = -1;
	}else{
		resultado = 0;
	}
	return resultado;
}

//Dado un array de elementos, devuelve la suma de todos aquellos que los elementos sean pares
function sumarElementosPares(elemetos){
let resultado = 0;
let n = elemetos.length;
for(let i = 0; i < n; i++){
	if (elemetos[i]%2==0) {
			resultado += elemetos[i];
		}
	}
	return resultado;
}

//Dado un array de elementos devuelve el valor mas grande de todos ellos.
function escogerValorMasGrande(elemetos){
let resultado = 0;
let n = elemetos.length;
for(let i = 0; i < n; i++){
	if(elemetos[i]>resultado){
		resultado = elemetos[i];
		}
	}
	return resultado;
}

//Dada una palabra cualquier, devuelve la palabra alreves, por ejemplo: "HOLA" => "ALOH"
function invertirUnaPalabra(String){
let resultado = "";
let n = String.length;
let cont = 0;
for(let i = n-1 ; i >= 0 ; i--){
	resultado += String[i];
	}
return resultado;		
}

//Dada un array, cuenta el numero de elementos impares que contiene
function contarElementosImpares(String){
let resultado = 0;
let n = String.length;
for(let i = 0; i<n;i++){
	if (String[i]%2!=0) {
			resultado++;
		}	
	}
return resultado;
}
