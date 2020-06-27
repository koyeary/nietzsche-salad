const mysql = require('mysql');
const inquirer = require('inquirer');
const express = require('express');
const Field = require('./queries');
//const cTable = require('console.table');

const app = express();

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "katyeary",
  /* user: "root", */

  // Your password
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
        "View all employees by department",
        "View all employees by manager",
        "Add employee",
        "Remove employee",
        "Update employee role",
        "Update employee manager",
        "View all roles",
        "Add role",
        "Remove role",
        "View all departments",
        "Add department",
        "Remove department",
        "View the utilized budget of a department",
        "exit"
      ]
    })
    .then(function (answer) {
      switch (answer.select) {
        case "View all employees":
          employeeAll();
          break;

        /* case "View all employees by department":
          multiSearch();
          break;
  
        case "View all employees by manager":
          mgmtRoleSearch();
          break;
  */
        case "Add employee":
          addEmployee();
          break;

        case "Remove employee":
          removeData();
          break;

        case "Update employee role":
          updateField();
          break;
        /*
            case "Update employee manager":
                mgmtRoleSearch();
                break; */

        case "View all roles":
          roleSearch();
          break;

        /*   case "Add role":
                  mgmtRoleSearch();
              break;
          
          case "Remove role":
                  deleteEmployee();
                  break; */

        case "View all departments":
          departmentSearch();
          break;

        /*    case "Add department":
                     multiSearch();
                     break;
             
           case "Remove department":
                     mgmtRoleSearch();
                     break;
             
           case "View the utilized budget of a department":
                     budgetSearch();
                     break;     */
        case "exit":
          connection.end();
          break;
      }
    });
}

function employeeAll() {
  const query = "SELECT * FROM employee";
  connection.query(query, function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(
        "First Name: " +
        res[i].first_name +
        " || Last Name: " +
        res[i].last_name +
        " || Role: " +
        res[i].role +
        " || Manager ID: " +
        res[i].manager_id

      );
    }

  });
  runSearch();
}

function departmentSearch() {
  const query = "SELECT * FROM department";
  connection.query(query, function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(
        "Name: " +
        res[i].name +
        " || Department ID: " +
        res[i].department_id

      );
    }
  });

}

function roleSearch() {
  const query = "SELECT * FROM role";
  connection.query(query, function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(
        "Title: " +
        res[i].title +
        " || Salary: " +
        res[i].salary +
        " || Department ID: " +
        res[i].department_id

      );
    }
  });

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
      const post = `"${answer.firstName}", "${answer.lastName}", "${answer.role}", ${answer.managerId}`;
      const table = "employee";
      const add = new Field(post, table);
      add.addQuery();

      // let f = new Field();
      // f.addQuery(post);
    });

}

function removeData() {
  inquirer
    .prompt({
      name: "last_name",
      type: "input",
      message: "Enter the last name of the employee you'd like to remove."

    }
    ).then(function (answer) {
      const post = `last_name="${answer.last_name}"`;
      const table = "employee";
      const remove = new Field(post, table);
      remove.delete();


    });
}