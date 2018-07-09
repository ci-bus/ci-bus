-- Adminer 4.6.2 MySQL dump

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
(1,	1,	1,	'Test task',	'info',	'task content',	2,	'2018-06-25 07:06:46'),
(2,	2,	1,	'task 2 title',	'warning',	'task 2 content',	1,	'2018-06-26 08:26:26'),
(3,	2,	1,	'Test task 3',	'success',	'task content 3',	0,	'2018-06-25 07:06:46'),
(4,	1,	1,	'aaa',	'success',	'&lt;p&gt;bbb&lt;/p&gt;',	1,	'2018-07-02 10:44:15'),
(5,	1,	1,	'aaa',	'danger',	'&lt;p&gt;ccc&lt;/p&gt;',	2,	'2018-07-02 10:45:41'),
(6,	1,	1,	'ddd',	'info',	'&lt;p&gt;eee&lt;/p&gt;',	4,	'2018-07-02 11:03:32'),
(7,	2,	1,	'www',	'default',	'&lt;p&gt;zzz&lt;/p&gt;',	4,	'2018-07-02 11:04:57'),
(8,	2,	1,	'sss primary',	'primary',	'&lt;p&gt;xxx&lt;/p&gt;',	4,	'2018-07-02 11:14:31');

DROP TABLE IF EXISTS `task_chat`;
CREATE TABLE `task_chat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task_user_id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  `message` text COLLATE utf8_bin NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `task_user_id` (`task_user_id`),
  KEY `task_id` (`task_id`),
  CONSTRAINT `task_chat_ibfk_1` FOREIGN KEY (`task_user_id`) REFERENCES `task_user` (`id`),
  CONSTRAINT `task_chat_ibfk_2` FOREIGN KEY (`task_id`) REFERENCES `task` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `task_chat` (`id`, `task_user_id`, `task_id`, `message`, `date`) VALUES
(2,	1,	3,	'asd',	'2018-07-03 15:24:59'),
(3,	1,	3,	'zxc',	'2018-07-03 15:27:54'),
(4,	2,	3,	'Esto es un mensaje de prueba :)',	'2018-07-05 15:19:36'),
(5,	1,	3,	'Test 2 ;D',	'2018-07-05 15:29:27'),
(6,	1,	3,	'Tetst 3',	'2018-07-05 15:29:47');

DROP TABLE IF EXISTS `task_chat_read`;
CREATE TABLE `task_chat_read` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task_user_id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `task_user_id` (`task_user_id`),
  KEY `task_id` (`task_id`),
  CONSTRAINT `task_chat_read_ibfk_1` FOREIGN KEY (`task_user_id`) REFERENCES `task_user` (`id`),
  CONSTRAINT `task_chat_read_ibfk_2` FOREIGN KEY (`task_id`) REFERENCES `task` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `task_chat_read` (`id`, `task_user_id`, `task_id`, `date`) VALUES
(1,	1,	3,	'2018-05-05 14:36:23');

DROP TABLE IF EXISTS `task_doc`;
CREATE TABLE `task_doc` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task_user_id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  `title` varchar(250) COLLATE utf8_bin NOT NULL,
  `content` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`),
  KEY `task_user_id` (`task_user_id`),
  KEY `task_id` (`task_id`),
  CONSTRAINT `task_doc_ibfk_1` FOREIGN KEY (`task_user_id`) REFERENCES `task_user` (`id`),
  CONSTRAINT `task_doc_ibfk_2` FOREIGN KEY (`task_id`) REFERENCES `task` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


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
(1,	'Miguel',	'miguelelinventor@gmail.com',	'fe01ce2a7fbac8fafaed7c982a04e229'),
(2,	'María',	'maria@gmail.com',	'81dc9bdb52d04dc20036dbd8313ed055');

-- 2018-07-09 06:23:45