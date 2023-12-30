// es6

// import express from "express";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import morgan from "morgan";

// import { bootstrap } from "./src/bootstrap.mjs";
// import dbConnection from "./databases/dbConnection.mjs";

// const app = express();

// dotenv.config();
// // Middlewares setup
// app.use(cookieParser());
// app.use(morgan("dev"));
// app.use(cors());
// app.use(express.json());

// const port = process.env.PORT || "3000";

// bootstrap(app);
// dbConnection();

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

//------------------------------------------
// es 5

var express = require("express");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var dotenv = require("dotenv");
var morgan = require("morgan");

var bootstrap = require("./src/bootstrap");
var dbConnection = require("./databases/dbConnection");


var app = express();

dotenv.config();
// Middlewares setup
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

var port = process.env.PORT || "3000";

bootstrap(app);
dbConnection();

app.listen(port, function() {
  console.log("Listening on port " + port);
});
