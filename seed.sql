DROP DATABASE IF EXISTS employee_DB;

CREATE DATABASE employee_DB;

USE employee_DB;

INSERT into department (name, department_id) VALUES ("Portfolio Management", 1);
INSERT into department (name, department_id) VALUES ("Risk Management", 2);
INSERT into department (name, department_id) VALUES ("Traders", 3);
INSERT into department (name, department_id) VALUES ("Marketing", 4);
INSERT into department (name, department_id) VALUES ("Administration", 5);

INSERT into role (title, salary, department_id) VALUES ("Research Analyst", 111560, 1); /* portfolio management */
INSERT into role (title, salary, department_id) VALUES ("Director of Research", 146883, 1); /* portfolio management */
INSERT into role (title, salary, department_id) VALUES ("Quant", 121664, 1); /* portfolio management */
INSERT into role (title, salary, department_id) VALUES ("Senior Portfolio Manager", 526000, 1); /* portfolio management */
INSERT into role (title, salary, department_id) VALUES ("Junior Analyst", 102031, 2); /* Risk Management */
INSERT into role (title, salary, department_id) VALUES ("Risk and Reporting Manager", 123646, 2); /* Risk Management */
INSERT into role (title, salary, department_id) VALUES ("Bonds & Equities", 74582, 3); /* traders */
INSERT into role (title, salary, department_id) VALUES ("Options", 83180, 3); /* traders */
INSERT into role (title, salary, department_id) VALUES ("Project Manager", 89000, 4); /* Marketing */
INSERT into role (title, salary, department_id) VALUES ("Copywriter", 56000, 4); /* Marketing */
INSERT into role (title, salary, department_id) VALUES ("Office Manager", 60000, 5); /* Administration */
INSERT into role (title, salary, department_id) VALUES ("Receptionist", 37525, 5); /* Administration */

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Richard", "Medley", 1.1, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Ross", "Cameron", 1.2, 10);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Sarah", "Weingarten", 1.3, 10);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Angela", "Rudolph", 1.4, 10);

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Adria", "Adamson", 2.1, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Marshall", "Hansen", 2.2, 20);

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Brad", "Kirkland", 3.1, 30);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Marcus", "Delletro", 3.2, null);

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Kira", "Reed", 4.1, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Cole", "Wyland", 4.2, 40);

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Candy", "Lawrence", 5.1, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("David", "Roman", 5.2, 50);

