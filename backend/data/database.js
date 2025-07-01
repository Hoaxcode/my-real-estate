const dotenv = require("dotenv");
dotenv.config({ path: "../config/config.env" });

const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.DB_LOCAL)
    .then(() => {
      console.log("Connecting to database successsfly.\n ");
    })
    .catch((err) => {
      console.log(`Database connection error!\n ${err}`);
      process.exit(1);
    });
};

module.exports = connectDB;
