<?php
// Para que el navegador no haga cache de los datos devueltos por la página PHP.
header('Cache-Control: no-cache, must-revalidate');
// Leemos el contenido del fichero XML
// e imprimimos su contenido.
// Muy importante indicar al navegador que va a recibir contenido XML
// eso lo hacemos con la siguiente cabecera:
header("Content-Type: text/xml");
$ficheroxml="<?xml version=\"1.0\" encoding=\"utf-8\"?>";
$ficheroxml.='
<CATALOGO>
    <PELICULA>
        <NOMBRE>Star Wars: Episodio VIII - El Ascenso de Skywalker</NOMBRE>
        <GENERO>Ciencia Ficción</GENERO>
        <DIRECTOR>JJ Abrams</DIRECTOR>
        <ESTRENO>2019</ESTRENO>
    </PELICULA>
    <PELICULA>
        <NOMBRE>El Señor de los Anillos - La Comunidad del Anillo</NOMBRE>
        <GENERO>Fantasía</GENERO>
        <DIRECTOR>Peter Jackson</DIRECTOR>
        <ESTRENO>2001</ESTRENO>
    </PELICULA>
    <PELICULA>
        <NOMBRE>Infiltrados</NOMBRE>
        <GENERO>Suspense</GENERO>
        <DIRECTOR>Martin Scorsese</DIRECTOR>
        <ESTRENO>2006</ESTRENO>
    </PELICULA>
    <PELICULA>
        <NOMBRE>Terminator 2 - El Juicio Final</NOMBRE>
        <GENERO>Acción</GENERO>
        <DIRECTOR>James Cameron</DIRECTOR>
        <ESTRENO>1991</ESTRENO>
    </PELICULA>
</CATALOGO>';

echo $ficheroxml;