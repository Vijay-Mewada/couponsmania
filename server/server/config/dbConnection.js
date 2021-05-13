var mysql = require("mysql");

const dbConnection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "couponsmania",
  
});

dbConnection.connect(function (err) {
  // if(err){
  //   console.log(err);
  // }
});
module.exports = dbConnection;
