const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

const mysql = require("mysql");
require("dotenv").config();
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect();

app.use(cors());
app.get("/UserInfo", function (req, res) {
  db.query("Select * from UserInfo", function (error, results) {
    if (error) {
      console.log(error);
    } else {
      console.log(results);
      res.send(results);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
