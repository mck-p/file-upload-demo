const express = require("express");
const functions = require("./functions");
const pages = require("./pages");
const env = require("./env");
const app = express();

app.set("view engine", "ejs");

app
  .use("/functions", functions)
  .use(pages)
  .use(express.static(`${env.fsRoot}/public`))
  .listen(env.port, () => {
    console.log("Listening at http://localhost:%d", env.port);
  });
