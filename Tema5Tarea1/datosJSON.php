<?php
// Cabecera para indicar que vamos a enviar datos JSON y que no haga caché de los datos.
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');

$listadoPeliculas = array();

$pelicula1= [
        "nombre" => "Star Wars: Episodio VIII - El Ascenso de Skywalker",
        "genero" => "Ciencia Ficción",
        "director" => "JJ Abrams",
        "estreno" => "2019"
    ];

$pelicula2= [
    "nombre" => "El Señor de los Anillos - La Comunidad del Anillo",
    "genero" => "Fantasía",
    "director" => "Peter Jackson",
    "estreno" => "2001"
];

$pelicula3= [
    "nombre" => "Infiltrados",
    "genero" => "Suspense",
    "director" => "Martin Scorsese",
    "estreno" => "2006"
];

$pelicula4= [
    "nombre" => "Terminator 2 - El Juicio Final",
    "genero" => "Acción",
    "director" => "James Cameron",
    "estreno" => "1991"
];

$listadoPeliculas[] = $pelicula1;
$listadoPeliculas[] = $pelicula2;
$listadoPeliculas[] = $pelicula3;
$listadoPeliculas[] = $pelicula4;

echo json_encode($listadoPeliculas);