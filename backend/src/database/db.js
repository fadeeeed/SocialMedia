var mysql = require('mysql');

var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "Social_Media",
  connectionLimit:100
});

module.exports = pool;