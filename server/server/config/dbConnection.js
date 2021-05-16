var mysql = require("mysql");

// const dbConnection = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   password: "",
//   database: "couponsmania",
  
// });

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "couponsmania",
});

module.exports = pool;
