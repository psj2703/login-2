"use strict";

//모듈
const express = require('express');
const home = require('./src/routes/home');
const bodyParser = require("body-parser");

const app = express();

//앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//라우팅
app.use("/", home);


module.exports = app;