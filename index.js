const mysql = require('mysql');
const inquirer = require('inquirer');
const Query = require('./queries');


//const app = express();

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,
  user: "katyeary",
  /* user: "root", */
  password: "newPass",
  database: "employee_DB"
});

connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "select",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        //  "View all employees by department",
        "View all employees by manager",
        "Add employee",
        "Remove employee",
        "Update employee role",
        //   "Update employee manager",
        "View all roles",
        "Add role",
        "Remove role",
        "View all departments",
        "Add department",
        "Remove department",
        // "View the utilized budget of a department",
        "exit"
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

        case "exit":
          connection.end();
          break;
      }
    });
}

function employeeAll() {
  let table = "employee";
  const employee = new Query(table);
  employee.view();
}

function departmentAll() {
  let table = "department";
  const department = new Query(table);
  department.view();
}

function roleAll() {
  let table = "role";
  const role = new Query(table);
  role.view();
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
      message: "Role?"
    },
    {
      name: "managerId",
      type: "input",
      message: "Manager ID?"
    }]
    ).then(function (answer) {
      let cols = "(first_name, last_name, role, manager_id)";
      let field = `"${answer.firstName}", "${answer.lastName}", "${answer.role}", ${answer.managerId}`;
      let table = "employee";
      const add = new Query(table, field, cols);
      selection.add();

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
      const selection = new Query(table, field, cols);
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
      const add = new Query(table, field, cols);
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
      const selection = new Query(table, field, cols);
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
      const field = `last_name="${answer.last_name}"`;
      const table = "employee";
      const selection = new Query(table, field);
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