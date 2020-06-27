const mysql = require('mysql');
const express = require('express');

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
}); 

 
class Field {
  constructor(post) {
    this.post = post;
/* 
     if (!post) {
      console.error("Your entry is missing essential data."); */
    }
   

  addQuery() { 
    let sql = `INSERT INTO employee (first_name, last_name, role, manager_id) VALUES (${this.post})`;
    connection.query(sql, function (err, res)  {
      if (err) throw err;
    console.log("posted");
  }); 
}
    /* connection.query(query, function (err) {
      if (err) throw err;
      console.log("Your new entry has been saved!"); */
 /*    }); 
  }
}
 */
}
module.exports = Field;



