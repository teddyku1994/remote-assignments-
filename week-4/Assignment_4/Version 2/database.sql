CREATE TABLE users ( 
  id int AUTO_INCREMENT,
  username VARCHAR(25),
  email VARCHAR(100),
  password varchar(128),
  PRIMARY KEY (id),
  UNIQUE (username, email)
  );