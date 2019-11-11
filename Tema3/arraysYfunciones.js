let animal1 = {nombre:"Thor",especie:"Perro",raza:"caniche",vida:5};
let animal2 = {nombre:"Capitan America",especie:"Gato",raza:"siames",vida:8};
let animal3 = {nombre:"Viuda Negra",especie:"Perro",raza:"bulldog",vida:15};
let animal4 = {nombre:"Hulk",especie:"Perro",raza:"pastor aleman",vida:12};
let animal5 = {nombre:"Ojo de Halcon",especie:"Perro",raza:"san bernardo",vida:9};
let animal6 = {nombre:"Loky",especie:"Perro",raza:"salchicha",vida:4};
let animal7 = {nombre:"Iron Man",especie:"Conejo",raza:"pascuas",vida:9};
let animal8 = {nombre:"WarMachine",especie:"Perro",raza:"raton de praga",vida:20};
let animal9 = {nombre:"Vision",especie:"Perro",raza:"pastor belga",vida:12};
let animal10 = {nombre:"Mercurio",especie:"Pajaro",raza:"loro",vida:15};

let listadoAnimales = [animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, animal9, animal10];

// Dada la lista de animales, habría que implementar las siguientes funciones (2 puntos)

function existeAlgunaEspeciePerroConVidaPares(){   

	let resultado = listadoAnimales.filter( x => x.vida % 2 == 0).some( x => x.especie == "Perro");

	return resultado;

}


// Dada una especie, sumar las vidas de todas los animales con
// más de una palabra en su nombre y que sea de esa especie (2 puntos)
// Esta función debe ejecutarse cada 10 segundos.

function sumarVidas(especie){

	let resultado = listadoAnimales.filter( x => x.especie == especie && x.nombre.split(" ").length>1).map( x => x.vida).reduce((acum,x) => acum+x);

	return console.log(resultado);

}

setInterval(function(){sumarVidas("Perro");},10000);

// Obtener una lista de todos los animales dada una especie y una raza
// Ordenados por nombre de forma descendente (2 puntos)
// Esta función debe ejecutarse 10 segundos después de ejecutarse.

function dameAnimales(especie,raza){

	function ordenarPorNombreDescendente(a,b){
   		return - a.nombre.toLocaleLowerCase().localeCompare(b.nombre.toLocaleLowerCase());
	}

	let resultado = listadoAnimales.filter( x => x.especie == especie && x.raza == raza).sort(ordenarPorNombreDescendente);

	return console.log(resultado);

}

setTimeout(function(){dameAnimales("Perro","caniche");},10000);

// Crear una funcíon, que añada un animal más a lista cumpliendo los siguientes requisitos: 
// Nombre del animal con más vida de la lista
// Especie con menos letras de las especies que hay en la lista
// Raza del animal con el nombre más alto en orden ascdente
// Vida es el número de la posición del primer animal con vida par 
// 4 puntos
	function ordenarPorNombreAscendente(a,b){
   		return a.nombre.toLocaleLowerCase().localeCompare(b.nombre.toLocaleLowerCase());
	}
function incluirAnimal(){

	function ordenarPorNumeroLetrasEspecieAscendente(a,b){
		return a.especie.length - b.especie.length;
	}

	function ordenarVidaAscendente(a,b){
		return a.vida - b.vida;
	}

	function ordenarPorNombreAscendente(a,b){
   		return a.nombre.toLocaleLowerCase().localeCompare(b.nombre.toLocaleLowerCase());
	}

	function ordenarPorNumeroLetrasEspecieDescendente(a,b){
		return a.especie.length + b.especie.length;
	}

	let listadoAnimales1 = [animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, animal9, animal10];
	let listadoAnimales2 = [animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, animal9, animal10];
	let listadoAnimales3 = [animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, animal9, animal10];
	let listadoAnimales4 = [animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, animal9, animal10];

	let nuevoanimal = {
		nombre: listadoAnimales1.sort(ordenarVidaAscendente).pop().nombre,
		especie: listadoAnimales2.sort(ordenarPorNumeroLetrasEspecieAscendente).shift().especie,
		raza: listadoAnimales3.sort(ordenarPorNombreAscendente).pop().raza,
		vida: listadoAnimales4.indexOf(listadoAnimales.filter( x => x.vida % 2 == 0)[0])
	};

	listadoAnimales.push(nuevoanimal);

	return listadoAnimales;

}