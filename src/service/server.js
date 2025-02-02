const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;

const mysql = require("mysql");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect();

app.get("/users", function (req, res) {
  db.query("Select * from UserInfo", function (error, results) {
    if (error) {
      console.log(error);
    } else {
      //console.log(results);
      res.send(results);
    }
  });
});
app.get("/posts", (req, res) => {
  const query = "select * from UserPost";
  db.query(query, function (error, results) {
    if (error) {
      console.log(error);
    } else {
      res.send(results);
    }
  });
});
app.get("/comments", function (req, res) {
  const query = "select * from Comment";
  db.query(query, function (error, results) {
    if (error) {
      console.log(error);
    } else {
      res.send(results);
    }
  });
});
app.get("/likes", function (req, res) {
  const query = "select * from Liked";
  db.query(query, function (error, results) {
    if (error) {
      console.log(error);
    } else {
      res.send(results);
    }
  });
});
app.post("/user", function (req, res) {
  console.log(req.body);
  const userId = req.body.userId;
  const name = req.body.name;
  const gender = req.body.gender;
  const password = req.body.password;
  const email = req.body.email;
  const profile = req.body.profile;
  const query = `insert into UserInfo (userId,name,gender,password,email,profile) values ('${userId}','${name}','${gender}','${password}','${email}','${profile}')`;
  db.query(query, function (error, results) {
    if (error) {
      console.log(error);
    } else {
      res.sendStatus(200);
    }
  });
});
app.put("/user", function (req, res) {
  console.log(req.body);
  const defaultUserId = req.body.defaultUserId;
  const userId = req.body.userId;
  const name = req.body.name;
  const gender = req.body.gender;
  const password = req.body.password;
  const email = req.body.email;
  const profile = req.body.profile;
  let query = ''
  if (profile === null)
    query = `update UserInfo set userId='${userId}',name='${name}',gender='${gender}',password='${password}',email='${email}' where userId='${defaultUserId}'`;
  else
  query = `update UserInfo set userId='${userId}',name='${name}',gender='${gender}',password='${password}',email='${email}',profile='${profile}' where userId='${defaultUserId}'`;
  db.query(query, function (error, results) {
    if (error) {
      console.log(error);
    } else {
      res.sendStatus(200);
    }
  });
});

app.post("/post", function (req, res) {
  console.log(req.body);
  const userId = req.body.userId;
  const images = req.body.imagesUrl.toString();
  const description = req.body.message;
  const gender = req.body.gender;
  const overcoat = req.body.overcoat;
  const top = req.body.top;
  const underwear = req.body.underwear;
  const suitablity = req.body.suitablity;
  const style = req.body.style;
  const type = req.body.type;
  const degree = req.body.degree ? req.body.degree : 0;
  const region = req.body.region ? req.body.region : "korea";
  const query = `insert into UserPost (userId,images,description,gender,overcoat,top,underwear,suitablity,style,type,degree,region) values ('${userId}','${images}','${description}','${gender}','${overcoat}','${top}','${underwear}','${suitablity}','${style}','${type}',${degree},'${region}')`;
  db.query(query, function (error, results) {
    if (error) {
      console.log(error);
    } else {
      res.sendStatus(200);
    }
  });
});
app.put("/post", function (req, res) {
  console.log(req.body, req.query);
  const postId = req.query.postId;
  const userId = req.query.userId;
  const message = req.body.message;
  console.log(postId, userId, message);
  const query = `update UserPost set description='${message}' where postId=${postId} and userId='${userId}'`;
  db.query(query, function (error, results) {
    if (error) {
      console.log(error);
    } else {
      res.sendStatus(200);
    }
  });
});
app.delete("/post", function (req, res) {
  console.log("delete", req.query);
  const postId = req.query.postId;
  const userId = req.query.userId;
  const query = `delete from UserPost where postId=${postId} and userId='${userId}'`;
  db.query(query, function (error) {
    if (error) {
      console.log(error);
    } else {
      res.sendStatus(200);
    }
  });
});
app.put("/comment", function (req, res) {
  console.log(">", req.body);
  const postId = req.query.postId;
  const description = req.body.description;
  const writer = req.query.writer;
  const query = `insert into Comment (postId,writer,description,time) values ('${postId}','${writer}','${description}',(now()))`;
  db.query(query, function (error, results) {
    if (error) {
      console.log(error);
    } else {
      res.sendStatus(200);
    }
  });
});
app.post("/like", function (req, res) {
  console.log("push",req.query);
  const postId = req.query.postId;
  const userId = req.query.userId;
  const query = `insert into Liked (userId,postId) values ('${userId}',${postId})`;
  db.query(query, function (error, results) {
    if (error) {
      console.log(error);
    } else {
      res.sendStatus(200);
    }
  });
});
app.delete("/like", function (req, res) {
  console.log("pop",req.query);
  const postId = req.query.postId;
  const userId = req.query.userId;
  const query = `delete from Liked where postId=${postId} and userId = '${userId}'`;
  db.query(query, function (error, results) {
    if (error) {
      console.log(error);
    } else {
      res.sendStatus(200);
    }
  });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
