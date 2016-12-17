/**
 * @description
 * Server module on port 3000
 */

 "use strict";

 let express = require("express"),
     app = express(),
     bodyParser = require("body-parser"),
     port = 3000;

app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

// controllers
app.use(require('./app/controllers'));

app.listen(port, ()=>{
  console.log("Server running on port 3000");
});
