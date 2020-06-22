DROP DATABASE IF EXISTS employee_DB;
CREATE database employee_DB;

USE employee_DB;

CREATE TABLE department (
    id INT NOT NULL,
    name VARCHAR(100) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL,
    title VARCHAR(100) NULL,
    salary DECIMAL(10,4) NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(100) NULL,
    last_name DECIMAL(10,4) NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id)
);


SELECT * FROM employee_DB;
