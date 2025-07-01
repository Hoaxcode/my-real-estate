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

//* routing
app.get("/", (req, res) => {
  res.send("Hello Node-Express");
});

app.listen(port, () =>
  console.log(`Server starting on port :${port} in ${node_env} mode.\n${url}`)
);
