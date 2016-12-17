"use strict";

let express = require("express")
    , app = express();

app.get("/", (req, res)=>{
  res.json("cool get");
});

app.post("/", (req, res)=>{
  let username = req.body.username;

  let data = {
    "msg" : "OK"
    , "success" : true
  };

  // res.json(data);
  res.send(username);
});

module.exports = app;
