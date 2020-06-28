const mysql = require('mysql');
const cTable = require('console.table');

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
}); 

class Query {
  constructor(table, field, cols) {
    this.table = table;
    this.field = field;
    this.cols = cols;
  }

  view() {
    let query = `SELECT * FROM ${this.table}`;
    connection.query(query, function (err, res) {
      if (err) throw err;
      console.table(res);
    })
  }

  delete() {
    let sql = `DELETE FROM ${this.table} WHERE ${this.field};`;
    connection.query(sql, function (err, res) {
      if (err) throw err;
      console.log("Row deleted");
    });
  }

  add() {
    let sql = `INSERT INTO ${this.table} ${this.cols} VALUES (${this.field})`;
    connection.query(sql, function (err, res) {
      if (err) throw err;
      console.log("Row added");
    });
  }
  update() {
    let sql = `UPDATE ${this.table} SET role_id="3" WHERE ${this.field}`;
    connection.query(sql, function (err, res) {
      if (err) throw err;
      console.log("Field updated");
    });
  }

}
module.exports = Query;



