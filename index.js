const mysql = require('mysql');
const inquirer = require('inquirer');
const express = require('express');

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "katyeary",
  
    // Your password
    password: "newPass",
    database: "top_songsDB"
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
            console.log("view all employees");
          /* employeeSearch(); */
          break;
  
        case "View all employees by department":
          multiSearch();
          break;
  
        case "View all employees by manager":
          mgmtRoleSearch();
          break;
  
        case "Add employee":
          employeeSearch();
          break;

        case "Remove employee":
            employeeSearch();
            break;
    
        case "Update employee role":
            multiSearch();
            break;
    
        case "Update employee manager":
            mgmtRoleSearch();
            break;
    
        case "View all roles":
            employeeSearch();
            break;
  
        case "Add role":
                mgmtRoleSearch();
            break;
        
        case "Remove role":
                employeeSearch();
                break;
      
        case "View all departments":
                  employeeSearch();
                  break;
          
        case "Add department":
                  multiSearch();
                  break;
          
        case "Remove department":
                  mgmtRoleSearch();
                  break;
          
        case "View the utilized budget of a department":
                  budgetSearch();
                  break;    
        case "exit":
          connection.end();
          break;
        }
      });
  }