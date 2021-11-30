const mysql = require("mysql");

const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "cowList",
});

dbConnection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to MySQL!");
  }
});

// Your Database Queries Here!!

// Don't forget to export your functions!
module.exports = dbConnection;
