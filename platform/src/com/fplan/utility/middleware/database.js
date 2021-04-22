const mongoose = require("mongoose");

var database = ()  => {

    mongoose.connect("mongodb://localhost/fplan")
      .then(() => console.log("connected to mongodb"))
      .catch((err) => console.log("could not connect mongodb"));
      
};

module.exports = database;
