const inquirer = require('inquirer');
const Query = require('./queries');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "katyeary",
  /*    user: "root",  */
  password: "newPass",
  database: "employee_DB"
});

connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  console.log("Employee Database Manager");
  inquirer
    .prompt(
      {
        name: "select",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all employees",
          "Add employee",
          "Remove employee",
          "Update employee role",
          "View all roles",
          "Add role",
          "Remove role",
          "View all departments",
          "Add department",
          "Remove department",
          "Exit"
        ]
      })
    .then(function (answer) {
      switch (answer.select) {
        case "View all employees":
          employeeAll();
          break;

        case "Add employee":
          addEmployee();
          break;

        case "Remove employee":
          removeEmployee();
          break;

        case "Update employee role":
          roleUpdate();
          break;


        case "View all roles":
          roleAll();
          break;

        case "Add role":
          addRole();
          break;

        case "Remove role":
          removeRole();
          break;

        case "View all departments":
          departmentAll();
          break;

        case "Add department":
          addDepartment();
          break;

        case "Remove department":
          removeDepartment();
          break;

        case "Exit":
          console.log("Bye");
          connection.end();
          break;
      }
    });
}

function employeeAll() {
  let table = "employee";
  let employee = new Query(table);
  employee.view();
  runSearch();
}

function departmentAll() {
  let table = "department";
  let department = new Query(table);
  department.view();
  runSearch();
}

function roleAll() {
  let table = "role";
  let role = new Query(table);
  role.view();
  runSearch();
}

function addEmployee() {
  inquirer
    .prompt([{
      name: "firstName",
      type: "input",
      message: "What is the employee's first name?"
    },
    {
      name: "lastName",
      type: "input",
      message: "What is the employee's last name?"
    },
    {
      name: "role",
      type: "input",
      message: "Role ID #?"
    },
    {
      name: "managerId",
      type: "input",
      message: "Manager ID?"
    }]
    ).then(function (answer) {
      let cols = "(first_name, last_name, role_id, manager_id)";
      let field = `"${answer.firstName}", "${answer.lastName}", "${answer.role}", ${answer.managerId}`;
      let table = "employee";
      let selection = new Query(table, field, cols);
      selection.add();
      runSearch();
    });
    
}

function addRole() {
  inquirer
    .prompt([{
      name: "title",
      type: "input",
      message: "What role what you like to add?"
    },
    {
      name: "salary",
      type: "input",
      message: "Assign the role a salary (using only integers, no punctuation):"
    },
    {
      name: "department",
      type: "input",
      message: "Input the new role's department id:"
    }]
    ).then(function (answer) {
      let cols = "(title, salary, department_id)";
      let field = `"${answer.title}", "${answer.salary}", "${answer.department}"`;
      let table = "role";
      let selection = new Query(table, field, cols);
      selection.add();
    });
}
function addDepartment() {
  inquirer
    .prompt([{
      name: "name",
      type: "input",
      message: "What is the name department would you like to add?"
    },
    {
      name: "department_id",
      type: "input",
      message: "Enter a whole number to set the department ID:"
    }]
    ).then(function (answer) {
      let cols = "(name, department_id)";
      let field = `"${answer.name}", "${answer.department_id}"`;
      let table = "department";
      let selection = new Query(table, field, cols);
      selection.add();
    });
}

function roleUpdate() {
  inquirer
    .prompt({
      name: "last_name",
      type: "input",
      message: "What is the last name of the employee whose role you would like to change?"
    },
      {
        name: "role",
        type: "input",
        message: "Enter new role: "
      }
    ).then(function (answer) {
      let field = `last_name="${answer.last_name}"`;
      let table = "employee";
      let cols = answer.role;
      let selection = new Query(table, field, cols);
      selection.update();
    })
}

function removeEmployee() {
  inquirer
    .prompt({
      name: "last_name",
      type: "input",
      message: "What is the last name of the employee you would like to remove?"

    }
    ).then(function (answer) {
      let field = `last_name="${answer.last_name}"`;
      let table = "employee";
      let selection = new Query(table, field);
      selection.delete();
    });
}

function removeRole() {
  inquirer
    .prompt({
      name: "role",
      type: "input",
      message: "What role would you like to remove?"
    }
    ).then(function (answer) {
      let field = answer.role;
      let table = "role";
      let selection = new Query(table, field);
      selection.delete();
    });
}


function removeDepartment() {
  inquirer
    .prompt({
      name: "department",
      type: "input",
      message: "Enter the name of the department you would like to remove:"
    }
    ).then(function (answer) {
      let field = answer.department;
      let table = "department";
      let selection = new Query(table, field);
      selection.delete();
    })
}

