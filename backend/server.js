const express = require("express");
const app = express();

//* setting config file
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const port = process.env.PORT || 3000;
const node_env = process.env.NODE_ENV;
const url = process.env.URL;

//* setting morgan logger
const morgan = require("morgan");
if (process.env.NODE_ENV === "DEVELOPMENT") app.use(morgan("dev"));

//* connecting to MongoDB with mongoose
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_LOCAL)
  .then(() => {
    console.log("Connected to database successfully");
  })
  .catch((error) => {
    console.log(`Database connection error:\n{error}`);
    process.exit(1);
  });

//* routing
app.get("/", (req, res) => {
  res.send("Hello Node-Express");
});

//* Strating express server
app.listen(port, () =>
  console.log(`Server starting on port :${port} in ${node_env} mode.\n${url}`)
);
