-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-02-2020 a las 20:50:24
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `entornocliente2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `distribuciones`
--

CREATE TABLE `distribuciones` (
  `nombre` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `so` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `origen` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `tamaño` int(11) NOT NULL,
  `estado` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `distribuciones`
--

INSERT INTO `distribuciones` (`nombre`, `so`, `origen`, `tamaño`, `estado`) VALUES
('Apodio', 'Linux', 'Francia', 3600, 'Durmiente'),
('Bio-Linux', 'Linux', 'Reino Unido', 1400, 'Durmiente'),
('FreeBSD', 'BSD', 'Estados Unidos', 3200, 'Activo'),
('Linux Mint', 'Linux', 'Irlanda', 1900, 'Activo'),
('OpenIndiana', 'Solaris', 'Reino Unido', 2000, 'Activo'),
('Oracle Solaris', 'Solaris', 'Estados Unidos', 0, 'Activo'),
('Peppermint', 'Linux', 'Reino Unido', 1400, 'Activo'),
('Project Trident', 'BSD', 'Estados Unidos', 1000, 'Activo'),
('Rescatux', 'Linux', 'España', 700, 'Activo'),
('Ubuntu', 'Linux', 'Isla de Man', 1900, 'Activo'),
('Void', 'Linux', 'España', 800, 'Activo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `distribuciones`
--
ALTER TABLE `distribuciones`
  ADD PRIMARY KEY (`nombre`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
