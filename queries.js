const mysql = require('mysql');
/* const express = require('express'); */

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
  constructor(post, table) {
    this.table = table;
    this.post = post;
    }
   
  addQuery() { 
    let sql = `INSERT INTO ${this.table} (first_name, last_name, role, manager_id) VALUES (${this.post})`;
    connection.query(sql, function (err, res)  {
      if (err) throw err;
    console.log("posted");
  }); 
}

}
module.exports = Field;



