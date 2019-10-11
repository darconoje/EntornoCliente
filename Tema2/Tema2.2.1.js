// EJERCICIOS CON LOS OPERANDOS
// LAS LÍNEAS DE RETURN NUNCA DEBEN CAMBIARSE.
// DEBE TOCARSE EL CÓDIGO ANTES DEL RETURN PARA QUE LA FUNCIÓN DEVUELVA TRUE

function asignacionDeValoresSumar(){

    let x = 0;
    let y = 0;

    x +=3;

    return x === 3;
}


function asignacionDeValoresRestar(){

    let x = 0;
    let y = 0;

    x -= -5;

    return x === 5;
}

function asignacionDeValoresMultiplicacion(){

    let x = 7;
    let y = 5;
    x *=y;
    return x === 35;
}

function asignacionDeValoresResto(){

    let x = 3;
    let y = 2;
    x%=y;
    return x === 1;
}

function comparacionIgualdad(){

    let x = undefined;
    let y = null;

    let resultado = x==y;

    return resultado;
}

function comparacionIgualdadEstricto(){

    let x = undefined;
    let y = null;

    let resultado = x===undefined;

    return resultado;
}

function compararcionMayorIgual(){

    let x = 1;
    let y = 1;
    let resultado = x >= y;
    return resultado;
}


function incremento(){

    let x = 4;
    x++;
    return x === 5;
}


function decremento(){

    let x = 6;
    x--;
    return x === 5;
}


function igualdadIncremento(){

    let x = 5;

    return x++ === 5;
}

function comparacionAND(){
    var x = "";
    var y = "";
    if (x=="" & y ==""){
     var resultado = true;
    }
    return resultado;
}

function comparacionOR(){
    var x = "";
    var y = "";
     if (x=="" | y ==""){
     var resultado = true;
    }
    return resultado;
}

function comparacionNOT(){
    var x = "";
     if (x!=1){
     var resultado = true;
    }
    return resultado;
}