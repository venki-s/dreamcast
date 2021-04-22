const folio = require("../../portfolio/portfoliocontroller");
const log = require("../middleware/accesslogging");
const database = require("../middleware/database");
const users = require("../../auth/authcontroller");
const express = require("express");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  app.use(log());
  app.use(express.json());
  app.use(express.static("public"));
  app.use("/api/folios", folio);
  app.use("/api/users", users);
  database();
};
