CREATE TABLE users ( 
  id int AUTO_INCREMENT,
  username VARCHAR(25) UNIQUE,
  email VARCHAR(100) UNIQUE,
  password varchar(128),
  PRIMARY KEY (id)
  );