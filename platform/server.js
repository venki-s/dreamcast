const express = require("express");
const app = express();
require("express-async-errors");
const logger = require("../platform/src/com/fplan/utility/middleware/logging");
require("../platform/src/com/fplan/utility/common/routes")(app);

process.on("unhandledRejection", (ex) => {
  logger.error(ex.message, ex);
  process.exit(1);
});

app.get("/api/welcome", (req, res) => {
  let currentDate = new Date();
  res.send("Welcome to Financial Planner on " + currentDate);
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
