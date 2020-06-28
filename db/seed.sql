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

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Richard", "Medley", 40, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Ross", "Cameron", 20, 1);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Sarah", "Weingarten", 30, 1);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Angela", "Rudolph", 10, 1);

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Adria", "Adamson", 60, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Marshall", "Hansen", 50, 2);

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Brad", "Kirkland", 80, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Marcus", "Delletro", 70, 3);

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Kira", "Reed", 90, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Cole", "Wyland", 100, 4);

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Candy", "Lawrence", 110, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("David", "Roman", 120, 5);

