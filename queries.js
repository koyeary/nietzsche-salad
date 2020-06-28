const mysql = require('mysql');
const express = require('express');

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
});


class Field {
  constructor(table, post, cols) {
    this.table = table;
    this.post = post;
    this.cols = cols;
  }

  view() {
    let query = `SELECT * FROM ${this.table}`;
    connection.query(query, function (err, res) {
      if (err) throw err;
      console.log(res);
    })

  }

  delete() {
    let sql = `DELETE FROM ${this.table} WHERE ${this.post};`;
    connection.query(sql, function (err, res) {
      if (err) throw err;
      console.log("deleted");
    });
  }

  new() {
    let sql = `INSERT INTO ${this.table} ${this.cols} VALUES (${this.post})`;
    connection.query(sql, function (err, res) {
      if (err) throw err;
      console.log("posted");
    });
  }
  update() {
    let sql = `UPDATE ${this.table} SET role="test" WHERE ${this.post}`;
    connection.query(sql, function (err, res) {
      if (err) throw err;
      console.log("posted");
    });
  }
}
module.exports = Field;



