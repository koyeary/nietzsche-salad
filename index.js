const mysql = require('mysql');
const inquirer = require('inquirer');
const express = require('express');
const Employee = require('./employeeModule');
const cTable = require('console.table');

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

  connection.connect(function(err) {
    if (err) throw err;
    runSearch();
  });

  function runSearch() {
    inquirer
      .prompt({
        name: "action",
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
      .then(function(answer) {
        switch (answer.action) {
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
/*
        case "Remove employee":
            employeeSearch();
            break;
    */
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
                employeeSearch();
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
    connection.query(query, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.(
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
    connection.query(query, function(err, res) {
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
    connection.query(query, function(err, res) {
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

app.listen('3000', () => {
  console.log('Server started on port 3000');
});