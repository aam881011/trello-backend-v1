// import mongoose from "mongoose";

// const dbConnection = () => {
//   mongoose
//     .connect(process.env.DB_CONNECTION)
//     .then(() => console.log(`Connected to MongoDB${process.env.DB_CONNECTION}`))
//     .catch((error) => console.log("Connection failed:", error));
// };

// export default dbConnection;

var mongoose = require("mongoose");

var dbConnection = function() {
  mongoose
    .connect(process.env.DB_CONNECTION)
    .then(function() {
      console.log("Connected to MongoDB" + process.env.DB_CONNECTION);
    })
    .catch(function(error) {
      console.log("Connection failed:", error);
    });
};

module.exports = dbConnection;

