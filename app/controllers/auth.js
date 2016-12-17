"use strict";

let express = require("express")
    , app = express();

app.get("/", (req, res)=>{
  res.json("cool get");
});

app.post("/", (req, res)=>{
  let user = req.body;

  let data = {
    "msg" : "User received"
    , "success" : true
  };

  res.json(data);
});

module.exports = app;
