"use strict";

let express = require("express"),
    app = express.Router();

// routes
app.use("/authenticate", require("./auth"));

module.exports = app;
