const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const authSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 256,
  },
  lname: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 256,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    minlength: 5,
    maxlength: 256,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
});

const User = mongoose.model("User", authSchema);

authSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, "jwtPrivateKey");
  return token;
};

module.exports = User;
