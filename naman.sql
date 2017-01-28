-- phpMyAdmin SQL Dump
-- version 4.0.10.12
-- http://www.phpmyadmin.net
--
-- Host: 127.13.163.2:3306
-- Generation Time: Jan 28, 2017 at 06:01 AM
-- Server version: 5.5.52
-- PHP Version: 5.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `naman`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE IF NOT EXISTS `courses` (
  `idx` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `donefrom` text NOT NULL,
  `univ` text NOT NULL,
  `grade` double NOT NULL,
  `c_status` int(11) NOT NULL,
  `orderx` double NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

-- --------------------------------------------------------

--
-- Table structure for table `ninja`
--

CREATE TABLE IF NOT EXISTS `ninja` (
  `idx` int(11) NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `orderx` double NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE IF NOT EXISTS `projects` (
  `idx` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `img` text NOT NULL,
  `text` text NOT NULL,
  `link` text NOT NULL,
  `orderx` double NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=17 ;

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE IF NOT EXISTS `skills` (
  `idx` int(11) NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `orderx` double NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=48 ;

-- --------------------------------------------------------

--
-- Table structure for table `work`
--

CREATE TABLE IF NOT EXISTS `work` (
  `idx` int(11) NOT NULL AUTO_INCREMENT,
  `org` text NOT NULL,
  `title` text NOT NULL,
  `link` text NOT NULL,
  `knowmore` text NOT NULL,
  `subtitle` text NOT NULL,
  `text` text NOT NULL,
  `date` text NOT NULL,
  `orderx` double NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
