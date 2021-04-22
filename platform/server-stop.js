const express = require("express");
const GracefulShutdownManager = require("@moebius/http-graceful-shutdown")
  .GracefulShutdownManager;

const app = express();

const server = app.listen(8080);

const shutdownManager = new GracefulShutdownManager(server);

process.on("SIGTERM", () => {
  shutdownManager.terminate(() => {
    console.log("Server is gracefully terminated");
  });
});
