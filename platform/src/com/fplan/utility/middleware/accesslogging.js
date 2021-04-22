const morgan = require("morgan");
var fs = require("fs");
var path = require("path");
var propertiesReader = require("properties-reader");

function log() {
  var accessLogStream = fs.createWriteStream(
    path.join(__dirname, "../../../../../logs/access.log"),
    { flags: "a" }
  );

  var commonProperties = propertiesReader("./properties/common.prop");
  var loggingProperties = propertiesReader("./properties/logging.prop");

  if ("dev" === commonProperties.get("environment")) {
    const config = loggingProperties.get("dev.log.config");
    if (config && config.length) {
       return morgan(config, { stream: accessLogStream });
    } else {
      return morgan("dev", { stream: accessLogStream });
    }
  } else {
    return morgan("tiny", { stream: accessLogStream });
  }

};

module.exports = log;
