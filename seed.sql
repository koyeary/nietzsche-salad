DROP DATABASE IF EXISTS employee_DB;

CREATE DATABASE employee_DB;

USE employee_DB;

INSERT into department (name, department_id) VALUES ("Portfolio Management", 1);
INSERT into department (name, department_id) VALUES ("Risk Management", 2);
INSERT into department (name, department_id) VALUES ("Traders", 3);
INSERT into department (name, department_id) VALUES ("Marketing", 4);
INSERT into department (name, department_id) VALUES ("Administration", 5);

INSERT into role (title, salary, department_id) VALUES ("Research Analyst", 111560, 1);
INSERT into role (title, salary, department_id) VALUES ("Director of Research", 146883, 1); 
INSERT into role (title, salary, department_id) VALUES ("Quant", 121664, 1); 
INSERT into role (title, salary, department_id) VALUES ("Senior Portfolio Manager", 526000, 1); 
INSERT into role (title, salary, department_id) VALUES ("Junior Analyst", 102031, 2); 
INSERT into role (title, salary, department_id) VALUES ("Risk and Reporting Manager", 123646, 2); 
INSERT into role (title, salary, department_id) VALUES ("Bonds & Equities", 74582, 3); 
INSERT into role (title, salary, department_id) VALUES ("Options", 83180, 3); 
INSERT into role (title, salary, department_id) VALUES ("Project Manager", 89000, 4); 
INSERT into role (title, salary, department_id) VALUES ("Copywriter", 56000, 4); 
INSERT into role (title, salary, department_id) VALUES ("Office Manager", 60000, 5); 
INSERT into role (title, salary, department_id) VALUES ("Receptionist", 37525, 5); 

INSERT into employee (first_name, last_name, role, manager_id) VALUES ("Richard", "Medley", "Senior Portfolio Manager", null);
INSERT into employee (first_name, last_name, role, manager_id) VALUES ("Ross", "Cameron", "Director of Research", 1);
INSERT into employee (first_name, last_name, role, manager_id) VALUES ("Sarah", "Weingarten", "Quant", 1);
INSERT into employee (first_name, last_name, role, manager_id) VALUES ("Angela", "Rudolph", "Research Analyst", 1);

INSERT into employee (first_name, last_name, role, manager_id) VALUES ("Adria", "Adamson", "Risk and Reporting Manager", null);
INSERT into employee (first_name, last_name, role, manager_id) VALUES ("Marshall", "Hansen", "Junior Analyst", 2);

INSERT into employee (first_name, last_name, role, manager_id) VALUES ("Brad", "Kirkland", "Options", null);
INSERT into employee (first_name, last_name, role, manager_id) VALUES ("Marcus", "Delletro", "Bonds & Equities", 3);

INSERT into employee (first_name, last_name, role, manager_id) VALUES ("Kira", "Reed", "Project Manager", null);
INSERT into employee (first_name, last_name, role, manager_id) VALUES ("Cole", "Wyland", "Copywriter", 4);

INSERT into employee (first_name, last_name, role, manager_id) VALUES ("Candy", "Lawrence", "Office Manager", null);
INSERT into employee (first_name, last_name, role, manager_id) VALUES ("David", "Roman", "Receptionist", 5);

