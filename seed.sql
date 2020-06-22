DROP DATABASE IF EXISTS employee_DB;

CREATE DATABASE employee_DB;

USE employee_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  flavor VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("administration");

INSERT INTO role (title, salary)
VALUES ("manager", 79000);

INSERT INTO employee (first_name, last_name)
VALUES ("Tara", "Mintle");
