-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Servidor: localhost:3306
-- Tiempo de generación: 20-05-2017 a las 11:10:50
-- Versión del servidor: 5.5.42
-- Versión de PHP: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de datos: `gotorave`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bio_aunmas`
--

CREATE TABLE IF NOT EXISTS `bio_aunmas` (
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

CREATE TABLE IF NOT EXISTS `bio_cabezera` (
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

CREATE TABLE IF NOT EXISTS `bio_piedepagina` (
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

CREATE TABLE IF NOT EXISTS `bio_preguntas` (
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

CREATE TABLE IF NOT EXISTS `bio_productos` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `imagen` text COLLATE utf8_bin NOT NULL,
  `texto` text COLLATE utf8_bin NOT NULL,
  `precio` float NOT NULL,
  `but_menu_text1` varchar(50) COLLATE utf8_bin NOT NULL,
  `but_menu_text2` varchar(50) COLLATE utf8_bin NOT NULL,
  `landing_html` text COLLATE utf8_bin NOT NULL,
  `but_buy_text` varchar(50) COLLATE utf8_bin NOT NULL,
  `video_titulo` varchar(100) COLLATE utf8_bin NOT NULL,
  `video_html` text COLLATE utf8_bin NOT NULL,
  `whatis_titulo` varchar(100) COLLATE utf8_bin NOT NULL,
  `whatis_html` text COLLATE utf8_bin NOT NULL,
  `whatis_but_buy_text` varchar(50) COLLATE utf8_bin NOT NULL,
  `install_imagen` text COLLATE utf8_bin NOT NULL,
  `install_html` text COLLATE utf8_bin NOT NULL,
  `install_titulo` varchar(100) COLLATE utf8_bin NOT NULL,
  `caract_titulo` varchar(100) COLLATE utf8_bin NOT NULL,
  `color_back_landing` varchar(7) COLLATE utf8_bin NOT NULL,
  `color_back_video` varchar(7) COLLATE utf8_bin NOT NULL,
  `color_back_install` varchar(7) COLLATE utf8_bin NOT NULL,
  `color_back_caract` varchar(7) COLLATE utf8_bin NOT NULL,
  `color_back_question` varchar(7) COLLATE utf8_bin NOT NULL,
  `color_back_footer` varchar(7) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `bio_productos`
--

INSERT INTO `bio_productos` (`id`, `id_usuario`, `imagen`, `texto`, `precio`, `but_menu_text1`, `but_menu_text2`, `landing_html`, `but_buy_text`, `video_titulo`, `video_html`, `whatis_titulo`, `whatis_html`, `whatis_but_buy_text`, `install_imagen`, `install_html`, `install_titulo`, `caract_titulo`, `color_back_landing`, `color_back_video`, `color_back_install`, `color_back_caract`, `color_back_question`, `color_back_footer`) VALUES
(1, 1, 'assets/img/producto1.png', 'La versión avanzada de nuestro pinganillo para exámenes. <br><br>Mejores prestaciones para garantizar el aprobado en tus exámenes con nuestos pinganillos invisibles.', 1400, 'Camara', 'CMR', 'Monorean® Pro Copia en los exámenes con absoluta tranquilidad sin cables.  Conécta el pinganillo a tu teléfono mediante Bluetooth y haz una llamada de teléfono normal.  Su collar inductor es plano como un papel, no se notará debajo de una camiseta fina.  Envía pitidos a tu compañero y descuelga el teléfono pulsando el Pulsador Beeper.  Controla las grabaciones MP3 de tu teléfono móvil con los Pulsadores MP3.', '¡COMPRALO AHORA!', '¿Como funciona bioculusPro?', '<iframe width="560" height="315" src="https://www.youtube.com/embed/JOPUeq8kRhM" frameborder="0" allowfullscreen></iframe>', '0', '¿Como funciona?\r\nEspera una llamada entrante y pulsa prolongadamente el Pulsador Beeper, que tendrás en tu pie, para aceptarla. Puedes optar por presionar el Pulsador prolongadamente y llamar al último número marcado.Empezarás a escuchar a tu compañero a través del pinganillo oculto en tu oído. Durante la conversación presiona el Pulsador para enviar zumbidos a tu compañero. Por ejemplo usa: un pitido para decir ''sí''; dos pitidos para decir ''no''; varias pulsaciones rápidas para decir ''dicta más despacio''. Podrás establecer códigos según tus necesidades. Presiona el Pulsador prolongadamente para finalizar la llamada.', 'Compralo ahora', 'assets/img/figura.png', '¿Como funciona?\r\nEspera una llamada entrante y pulsa prolongadamente el Pulsador Beeper, que tendrás en tu pie, para aceptarla. Puedes optar por presionar el Pulsador prolongadamente y llamar al último número marcado.Empezarás a escuchar a tu compañero a través del pinganillo oculto en tu oído. Durante la conversación presiona el Pulsador para enviar zumbidos a tu compañero. Por ejemplo usa: un pitido para decir ''sí''; dos pitidos para decir ''no''; varias pulsaciones rápidas para decir ''dicta más despacio''. Podrás establecer códigos según tus necesidades. Presiona el Pulsador prolongadamente para finalizar la llamada.', 'Instalación del pinganillo BioculusPro', 'Características técnicas del pinganillo BioculusPro', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bio_product_images`
--

CREATE TABLE IF NOT EXISTS `bio_product_images` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `titulo` varchar(200) COLLATE utf8_bin NOT NULL,
  `imagen` text COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bio_quees`
--

CREATE TABLE IF NOT EXISTS `bio_quees` (
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

CREATE TABLE IF NOT EXISTS `bio_submenu` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `imagen` text COLLATE utf8_bin NOT NULL,
  `texto` text COLLATE utf8_bin NOT NULL,
  `enlace` varchar(200) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


ALTER TABLE `bio_aunmas`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `bio_cabezera`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `bio_piedepagina`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `bio_preguntas`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `bio_productos`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `bio_product_images`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `bio_quees`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `bio_submenu`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `bio_aunmas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;

ALTER TABLE `bio_cabezera`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;

ALTER TABLE `bio_piedepagina`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;

ALTER TABLE `bio_preguntas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;

ALTER TABLE `bio_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;

ALTER TABLE `bio_product_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `bio_quees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;

ALTER TABLE `bio_submenu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;