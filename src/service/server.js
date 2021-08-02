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

app.get("/UserInfo", function (req, res) {
  db.query("Select * from UserInfo", function (error, results) {
    if (error) {
      console.log(error);
    } else {
      //console.log(results);
      res.send(results);
    }
  });
});
app.get("/UserPost", (req, res) => {
  const query = "select * from UserPost";
  db.query(query, function (error, results) {
    if (error) {
      console.log(error);
    } else {
      res.send(results);
    }
  });
});
app.get("/Comment", function (req, res) {
  const query = "select * from Comment";
  db.query(query, function (error, results) {
    if (error) {
      console.log(error);
    } else {
      res.send(results);
    }
  });
});
app.get("/Likes", function (req, res) {
  const query = "select * from Liked";
  db.query(query, function (error, results) {
    if (error) {
      console.log(error);
    } else {
      res.send(results);
    }
  });
});
app.post("/addUser", function (req, res) {
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
app.post("/updateUser", function (req, res) {
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

app.post("/uploadPost", function (req, res) {
  console.log(req.body);
  const userId = req.body.userId;
  const images = req.body.images.toString();
  const description = req.body.description;
  const gender = req.body.gender;
  const overcoat = req.body.overcoat;
  const top = req.body.top;
  const underwear = req.body.underwear;
  const suitablity = req.body.suitablity;
  const style = req.body.style;
  const type = req.body.constitution;
  const degree = req.body.degree ? req.body.degree : 0;
  const region = req.body.region ? req.body.region : "korea";
  const query = `insert into UserPost (userId,images,description,gender,overcoat,top,underwear,suitablity,style,type,degree,region) values ('${userId}','${images}','${description}','${gender}','${overcoat}','${top}',1,'${suitablity}','${style}','${type}',${degree},'${region}')`;
  db.query(query, function (error, results) {
    if (error) {
      console.log(error);
    } else {
      res.sendStatus(200);
    }
  });
});
app.post("/updatePost", function (req, res) {
  console.log(req.body);
  const postId = req.body.postId;
  const userId = req.body.userId;
  const message = req.body.message;
  const query = `update UserPost set description='${message}' where postId=${postId} and userId='${userId}'`;
  db.query(query, function (error, results) {
    if (error) {
      console.log(error);
    } else {
      res.sendStatus(200);
    }
  });
});
app.post("/deletePost", function (req, res) {
  console.log("delete", req.body);
  const postId = req.body.postId;
  const userId = req.body.userId;
  const query = `delete from UserPost where postId=${postId} and userId='${userId}'`;
  db.query(query, function (error, results) {
    if (error) {
      console.log(error);
    } else {
      res.sendStatus(200);
    }
  });
});
app.post("/uploadComment", function (req, res) {
  console.log(">", req.body);
  const postId = req.body.postId;
  const description = req.body.description;
  const writer = req.body.writer;
  const query = `insert into Comment (postId,writer,description,time) values ('${postId}','${writer}','${description}',(now()))`;
  db.query(query, function (error, results) {
    if (error) {
      console.log(error);
    } else {
      res.sendStatus(200);
    }
  });
});
app.post("/uploadLikes", function (req, res) {
  console.log(req.body);
  const postId = req.body.postId;
  const userId = req.body.userId;
  const query = `insert into Liked (userId,postId) values ('${userId}',${postId})`;
  db.query(query, function (error, results) {
    if (error) {
      console.log(error);
    } else {
      res.sendStatus(200);
    }
  });
});
app.post("/deleteLikes", function (req, res) {
  console.log(req.body);
  const postId = req.body.postId;
  const userId = req.body.userId;
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
