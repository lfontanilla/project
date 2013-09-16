
-- phpMyAdmin SQL Dump
-- version 2.11.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 16, 2013 at 10:01 AM
-- Server version: 5.1.57
-- PHP Version: 5.2.17

SET FOREIGN_KEY_CHECKS=0;

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `a4187511_company`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  `pict` varchar(45) NOT NULL,
  `catchphrase` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COMMENT='yoloswagg' AUTO_INCREMENT=11 ;

--
-- Dumping data for table `products`
--

INSERT INTO `products` VALUES(1, 'product1', 'nice description that says a lot about the prroduct and other reaaly cool stuff that will change the world', '2013-09-16 09:00:00', '2013-09-16 09:00:00', 'pict1.jpg', 'some more cool stuff about the product but oneliner');
INSERT INTO `products` VALUES(2, 'product2', 'nice description that says a lot about the prroduct and other reaaly cool stuff that will change the world', '2013-09-16 09:00:00', '2013-09-16 09:00:00', 'pict2.jpg', 'some more cool stuff about the product but oneliner');
INSERT INTO `products` VALUES(3, 'product3', 'nice description that says a lot about the prroduct and other reaaly cool stuff that will change the world', '2013-09-16 09:00:00', '2013-09-16 09:00:00', 'pict3.jpg', 'some more cool stuff about the product but oneliner');
INSERT INTO `products` VALUES(4, 'product4', 'nice description that says a lot about the prroduct and other reaaly cool stuff that will change the world', '2013-09-16 09:00:00', '2013-09-16 09:00:00', 'pict4.jpg', 'some more cool stuff about the product but oneliner');
INSERT INTO `products` VALUES(5, 'product5', 'nice description that says a lot about the prroduct and other reaaly cool stuff that will change the world', '2013-09-16 09:00:00', '2013-09-16 09:00:00', 'pict5.jpg', 'some more cool stuff about the product but oneliner');
INSERT INTO `products` VALUES(6, 'product6', 'nice description that says a lot about the prroduct and other reaaly cool stuff that will change the world', '2013-09-16 09:00:00', '2013-09-16 09:00:00', 'pict6.jpg', 'some more cool stuff about the product but oneliner');
INSERT INTO `products` VALUES(7, 'product7', 'nice description that says a lot about the prroduct and other reaaly cool stuff that will change the world', '2013-09-16 09:00:00', '2013-09-16 09:00:00', 'pict7.jpg', 'some more cool stuff about the product but oneliner');
INSERT INTO `products` VALUES(8, 'product8', 'nice description that says a lot about the prroduct and other reaaly cool stuff that will change the world', '2013-09-16 09:00:00', '2013-09-16 09:00:00', 'pict8.jpg', 'some more cool stuff about the product but oneliner');
INSERT INTO `products` VALUES(9, 'product9', 'nice description that says a lot about the prroduct and other reaaly cool stuff that will change the world', '2013-09-16 09:00:00', '2013-09-16 09:00:00', 'pict9.jpg', 'some more cool stuff about the product but oneliner');
INSERT INTO `products` VALUES(10, 'product10', 'nice description that says a lot about the prroduct and other reaaly cool stuff that will change the world', '2013-09-16 09:00:00', '2013-09-16 09:00:00', 'pict10.jpg', 'some more cool stuff about the product but oneliner');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COMMENT='users yoloswagg' AUTO_INCREMENT=2 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` VALUES(1, 'admin', 'admin');

SET FOREIGN_KEY_CHECKS=1;
