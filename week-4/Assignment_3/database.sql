CREATE DATABASE assignment;
USE assignment;
CREATE TABLE users ( 
	id int AUTO_INCREMENT,
	username TEXT,
	email TEXT,
	password varchar(128),
	PRIMARY KEY (id)
);
