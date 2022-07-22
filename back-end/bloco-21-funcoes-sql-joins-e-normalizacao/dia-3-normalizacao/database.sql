CREATE DATABASE IF NOT EXISTS ZOO;

CREATE TABLE Location (
	id INT PRIMARY KEY AUTO_INCREMENT,
  	name VARCHAR(20) NOT NULL
);

CREATE TABLE Manager (
	id INT PRIMARY KEY AUTO_INCREMENT,
  	name VARCHAR(50) NOT NULL
);

CREATE TABLE Caregiver (
	id INT PRIMARY KEY AUTO_INCREMENT,
  	name VARCHAR(50) NOT NULL,
  	manager_id INT NOT NULL,
  	FOREIGN KEY (manager_id) REFERENCES Manager(id)
);

CREATE TABLE Animal (
	id INT PRIMARY KEY AUTO_INCREMENT,
 	name VARCHAR(25) NOT NULL,
  	specie VARCHAR(25) NOT NULL,
  	sex CHAR(1),
  	age INT,
  	location_id INT NOT NULL,
  	caregiver_id INT NOT NULL,
  	FOREIGN KEY (location_id) REFERENCES Location(id),
  	FOREIGN KEY (caregiver_id) REFERENCES Caregiver(id)
);

CREATE TABLE Caregiver_animal (
	id INT PRIMARY KEY AUTO_INCREMENT,
  	animal_id INT NOT NULL,
  	caregiver_id INT NOT NULL,
  	FOREIGN KEY (animal_id) REFERENCES Animal(id),
  	FOREIGN KEY (caregiver_id) REFERENCES Caregiver(id)
);
