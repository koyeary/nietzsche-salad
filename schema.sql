DROP DATABASE IF EXISTS employee_DB;
CREATE database employee_DB;

USE employee_DB;

CREATE TABLE department (
    department_id INT NOT NULL,
    name VARCHAR(100) NULL
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NULL,
    salary INT (100) NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(100) NULL,
    last_name VARCHAR (100) NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id) 
);