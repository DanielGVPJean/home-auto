-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 22-10-2025 a las 19:36:43
-- Versión del servidor: 11.8.3-MariaDB-log
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `casa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `data`
--

CREATE TABLE `data` (
  `idData` int(11) NOT NULL,
  `name` text NOT NULL,
  `value` float NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `data`
--

INSERT INTO `data` (`idData`, `name`, `value`) VALUES
(1, 'consumo_gas', 6.4),
(2, 'consumo_agua', 0),
(3, 'consumo_elect', 144.4),
(4, 'reserva_agua', 5000),
(5, 'generador_solar', 517),
(6, 'generador_heolico', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `devices`
--

CREATE TABLE `devices` (
  `idDevice` int(11) NOT NULL,
  `name` text NOT NULL,
  `state` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `devices`
--

INSERT INTO `devices` (`idDevice`, `name`, `state`) VALUES
(1, 'foco1', 1),
(2, 'foco2', 1),
(3, 'foco3', 1),
(4, 'foco4', 1),
(5, 'foco5', 1),
(6, 'foco6', 1),
(7, 'foco7', 1),
(8, 'pc', 1),
(9, 'tv', 1),
(10, 'bocinas', 1),
(11, 'regadera', 1),
(12, 'estufa', 1),
(13, 'boiler', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `timeData`
--

CREATE TABLE `timeData` (
  `idDay` int(11) NOT NULL,
  `minutes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `timeData`
--

INSERT INTO `timeData` (`idDay`, `minutes`) VALUES
(1, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `data`
--
ALTER TABLE `data`
  ADD PRIMARY KEY (`idData`);

--
-- Indices de la tabla `devices`
--
ALTER TABLE `devices`
  ADD PRIMARY KEY (`idDevice`);

--
-- Indices de la tabla `timeData`
--
ALTER TABLE `timeData`
  ADD PRIMARY KEY (`idDay`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `data`
--
ALTER TABLE `data`
  MODIFY `idData` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `devices`
--
ALTER TABLE `devices`
  MODIFY `idDevice` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `timeData`
--
ALTER TABLE `timeData`
  MODIFY `idDay` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
