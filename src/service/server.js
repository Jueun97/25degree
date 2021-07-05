const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

const mysql = require("mysql");
const db = mysql.createConnection({
  host: "132.226.23.77",
  port: "3306",
  user: "grace",
  password: "1234",
  database: "25degree",
});

db.connect();

app.use(cors());
app.get("/", function (req, res) {
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
