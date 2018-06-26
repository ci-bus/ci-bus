SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `task`;
CREATE TABLE `task` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task_user_id` int(11) NOT NULL,
  `task_project_id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_bin NOT NULL,
  `type` varchar(100) COLLATE utf8_bin NOT NULL,
  `content` text COLLATE utf8_bin NOT NULL,
  `step` int(11) NOT NULL COMMENT '0 backlog, 1 todo, 2 progress, 3 review, 4 done, 5 hidden',
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `task` (`id`, `task_user_id`, `task_project_id`, `title`, `type`, `content`, `step`, `date`) VALUES
(1,	2,	1,	'Test task',	'info',	'task content',	1,	'2018-06-25 07:06:46'),
(2,	1,	1,	'task 2 title',	'warning',	'task 2 content',	3,	'2018-06-26 08:26:26');

DROP TABLE IF EXISTS `task_project`;
CREATE TABLE `task_project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `task_project` (`id`, `name`) VALUES
(1,	'Edeka');

DROP TABLE IF EXISTS `task_user`;
CREATE TABLE `task_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `pass` varchar(100) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `task_user` (`id`, `name`, `email`, `pass`) VALUES
(1,	'Miguel',	'm.calero@w-b-s.net',	'81dc9bdb52d04dc20036dbd8313ed055'),
(2,	'María',	'maria@gmail.com',	'maria');