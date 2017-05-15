-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Servidor: localhost:3306
-- Tiempo de generación: 15-05-2017 a las 19:37:38
-- Versión del servidor: 5.5.42
-- Versión de PHP: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gotorave`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bio_aunmas`
--

CREATE TABLE `bio_aunmas` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `imagen` text COLLATE utf8_bin NOT NULL,
  `texto` text COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `bio_aunmas`
--

INSERT INTO `bio_aunmas` (`id`, `id_usuario`, `imagen`, `texto`) VALUES
(1, 1, 'https://www.monorean.com/assets/picto_01-06c1ce1341112f256e1f252030ac360a.png', 'Indetectable: El pinganillo para exámenes no se verá ni se escuchará nada en absoluto desde fuera. Es invisible para el ojo humano.'),
(2, 1, 'http://www.imagen.com.mx/assets/img/imagen_share.png', 'hola estas bien?');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bio_cabezera`
--

CREATE TABLE `bio_cabezera` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `imagen` text COLLATE utf8_bin NOT NULL,
  `color` varchar(7) COLLATE utf8_bin NOT NULL,
  `texto` text COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `bio_cabezera`
--

INSERT INTO `bio_cabezera` (`id`, `id_usuario`, `imagen`, `color`, `texto`) VALUES
(1, 1, 'assets/img/cabezera1.jpg', '#cce8f6', 'La versión básica de nuestro pinganillo para exámenes ¡la evolución de las clásicas chuletas para examen!');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bio_piedepagina`
--

CREATE TABLE `bio_piedepagina` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `texto` text COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `bio_piedepagina`
--

INSERT INTO `bio_piedepagina` (`id`, `id_usuario`, `texto`) VALUES
(1, 1, 'Se aceptan pagos por tarjeta de crédito <img src="assets/img/visa_icon.png"><img src="assets/img/master_ico.png"> de forma segura con pasarela de pago <img src="assets/img/redsys.png"');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bio_preguntas`
--

CREATE TABLE `bio_preguntas` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `texto1` text COLLATE utf8_bin NOT NULL,
  `texto2` text COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `bio_preguntas`
--

INSERT INTO `bio_preguntas` (`id`, `id_usuario`, `texto1`, `texto2`) VALUES
(1, 0, 'Lo necesito ya!', 'No hay problema, los pinganillos de nuestra tienda se mandan mediante envío 24 horas y el paquete se despacha el mismo día que se recibe el pago. Por lo tanto el pinganillo para exámenes te llegará al día siguiente de hacer el pedido.<br><br>Nota: Los tiempos de envío podrían variar según el país de envío, cuando realices el pedido de tu pinganillo a través de la página web se indicará el tiempo de envío según el tipo de envío.'),
(3, 0, '¿Envio gratuito?', 'No hay problema, los pinganillos de nuestra tienda se mandan mediante envío 24 horas y el paquete se despacha el mismo día que se recibe el pago. Por lo tanto el pinganillo para exámenes te llegará al día siguiente de hacer el pedido.\r\n');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bio_productos`
--

CREATE TABLE `bio_productos` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `imagen` text COLLATE utf8_bin NOT NULL,
  `texto` text COLLATE utf8_bin NOT NULL,
  `precio` float NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `bio_productos`
--

INSERT INTO `bio_productos` (`id`, `id_usuario`, `imagen`, `texto`, `precio`) VALUES
(1, 1, 'assets/img/producto1.png', 'La versión avanzada de nuestro pinganillo para exámenes. <br><br>Mejores prestaciones para garantizar el aprobado en tus exámenes con nuestos pinganillos invisibles.', 1400);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bio_quees`
--

CREATE TABLE `bio_quees` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `texto1` text COLLATE utf8_bin NOT NULL,
  `texto2` text COLLATE utf8_bin NOT NULL,
  `imagen` text COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `bio_quees`
--

INSERT INTO `bio_quees` (`id`, `id_usuario`, `texto1`, `texto2`, `imagen`) VALUES
(1, 1, 'Bioculus es un sistema de comunicación diseñado para copiar en los exámenes. Monorean consiste en un pinganillo invisible del tamaño de una lenteja que deberás de introducir en tu oído. Por el pinganillo podrás escuchar a tu compañero alto y claro de manera totalmente discreta.', 'Conecta tu modelo de Bioculus con tu teléfono móvil, colócate el anillo inductor en el cuello e introduce el pinganillo en tu oído.', 'ttps://www.monorean.com/assets/I18n/es/infography_what_is-46e48b439a92d8a37913ef47ee8277f3.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bio_submenu`
--

CREATE TABLE `bio_submenu` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `imagen` text COLLATE utf8_bin NOT NULL,
  `texto` text COLLATE utf8_bin NOT NULL,
  `enlace` varchar(200) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `bio_submenu`
--

INSERT INTO `bio_submenu` (`id`, `id_usuario`, `imagen`, `texto`, `enlace`) VALUES
(1, 1, 'eye-open', ' &nbsp; DE UN VISTAZO', '#vistazo'),
(2, 1, 'list', ' &nbsp; MODELOS', '#modelos'),
(3, 1, 'book', ' &nbsp; QUÉ ES?', '#quees'),
(4, 1, 'question-sign', ' &nbsp; DUDAS', '#dudas'),
(5, 1, 'comment', ' &nbsp; CONTACTO', '#contacto');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bio_aunmas`
--
ALTER TABLE `bio_aunmas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `bio_cabezera`
--
ALTER TABLE `bio_cabezera`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `bio_piedepagina`
--
ALTER TABLE `bio_piedepagina`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `bio_preguntas`
--
ALTER TABLE `bio_preguntas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `bio_productos`
--
ALTER TABLE `bio_productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `bio_quees`
--
ALTER TABLE `bio_quees`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `bio_submenu`
--
ALTER TABLE `bio_submenu`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bio_aunmas`
--
ALTER TABLE `bio_aunmas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `bio_cabezera`
--
ALTER TABLE `bio_cabezera`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `bio_piedepagina`
--
ALTER TABLE `bio_piedepagina`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `bio_preguntas`
--
ALTER TABLE `bio_preguntas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `bio_productos`
--
ALTER TABLE `bio_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `bio_quees`
--
ALTER TABLE `bio_quees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `bio_submenu`
--
ALTER TABLE `bio_submenu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
