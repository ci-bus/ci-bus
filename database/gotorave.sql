
CREATE TABLE `chat` (
  `id` int(11) NOT NULL,
  `name` varchar(20) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


INSERT INTO `chat` (`id`, `name`) VALUES
(1, 'Sala general'),
(2, 'BreakBeat'),
(3, 'Drum and Bass'),
(4, 'Mercado');



CREATE TABLE `chat_msg` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `chat_id` int(11) NOT NULL,
  `msg` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;



CREATE TABLE `event` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `image` text COLLATE utf8_bin NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `description` text COLLATE utf8_bin NOT NULL,
  `postal` varchar(200) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;



CREATE TABLE `event_tag` (
  `id` int(11) NOT NULL,
  `event_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;



CREATE TABLE `music` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `titulo` varchar(255) COLLATE utf8_bin NOT NULL,
  `enlace` varchar(255) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;



CREATE TABLE `music_tag` (
  `id` int(11) NOT NULL,
  `music_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_row` int(11) NOT NULL,
  `tabla` varchar(20) COLLATE utf8_bin NOT NULL,
  `review` int(1) NOT NULL,
  `date` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `name` varchar(20) COLLATE utf8_bin NOT NULL,
  `type` enum('music','user','event') COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;



INSERT INTO `tags` (`id`, `name`, `type`) VALUES
(1, 'BreakBeat', 'music'),
(2, 'Drum and Bass', 'music'),
(3, 'Dj', 'user'),
(4, 'Productor', 'user'),
(18, 'Fiestera', 'user'),
(6, 'Techno', 'music'),
(7, 'DubStep', 'music'),
(8, 'House', 'music'),
(17, 'Fiestero', 'user'),
(10, 'Promotor', 'user'),
(11, 'Rave', 'event'),
(12, 'Dicoteca', 'event'),
(13, 'Nave Industrial', 'event'),
(14, 'Playa', 'event'),
(15, 'After', 'event'),
(19, 'Ravero', 'user'),
(20, 'Ravera', 'user');


CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8_bin NOT NULL,
  `pass` varchar(255) COLLATE utf8_bin NOT NULL,
  `type` varchar(10) COLLATE utf8_bin NOT NULL,
  `name` varchar(20) COLLATE utf8_bin NOT NULL,
  `date` date NOT NULL,
  `add_friends` int(3) NOT NULL DEFAULT '1',
  `online` int(11) NOT NULL,
  `image` text COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


INSERT INTO `user` (`id`, `email`, `pass`, `type`, `name`, `date`, `add_friends`, `online`, `image`) VALUES
(1, 'root', 'admin', 'admin', 'Miguel Angel', '2016-10-14', 1, 1493235610, 'uploads/1.png');



CREATE TABLE `user_follow` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_id_followed` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;



CREATE TABLE `user_friend` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_id2` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;



CREATE TABLE `user_review` (
  `id` int(11) NOT NULL,
  `user_id_from` int(11) NOT NULL,
  `user_id_to` int(11) NOT NULL,
  `review` int(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;



CREATE TABLE `user_tag` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


ALTER TABLE `chat`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `chat_msg`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `event_tag`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `music`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `music_tag`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `review`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `user_follow`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `user_friend`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `user_review`
  ADD PRIMARY KEY (`id`,`user_id_from`,`user_id_to`);


ALTER TABLE `user_tag`
  ADD PRIMARY KEY (`id`);




ALTER TABLE `chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `chat_msg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `event_tag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `music`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `music_tag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `user_follow`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `user_friend`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `user_review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `user_tag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;