const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
require('dotenv').config();
const mysql = require("mysql");
const db = mysql.createConnection({
  host: process.env.DB_HOST,      
  port: process.env.DB_PORT,            
  user: process.env.DB_USER,               
  password: process.env.DB_PASSWORD,  
  database: process.env.DB_DATABASE,
});

db.connect();

app.get("/", function (req, res) {
  db.query("Select * from test1", function (error, results) {
    if (error) {
      console.log(error);
    } else {
      console.log(results);
      res.send(results);
    }
  });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));