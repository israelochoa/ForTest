CREATE TABLE IF NOT EXISTS `booksreviews` (
  `idbooks` int(11) NOT NULL AUTO_INCREMENT,
  `bookname` varchar(50) NOT NULL,
  `bookreviews` varchar(145) NOT NULL,
  PRIMARY KEY (`idbooks`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;