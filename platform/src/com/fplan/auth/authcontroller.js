const {
  hashPhrase,
  verifyPhrase,
} = require("../utility/security/encryptphrase");
const Joi = require("joi");
const express = require("express");
const router = express.Router();
const User = require("./authmodel");
const _ = require("lodash");
const url = require("url");
const jwt = require("jsonwebtoken");
const auth = require("../../fplan/utility/middleware/auth");
const emailProcess = require("../notifications/emailnotfication");

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});

function validateSignUpUser(user) {
  const schema = {
    fname: Joi.string().min(5).max(256).required(),
    lname: Joi.string().min(5).max(256).required(),
    email: Joi.string().min(5).max(256).required().email(),
    password: Joi.string().min(5).max(256).required(),
  };

  return Joi.validate(user, schema);
}

function validateSignInUser(user) {
  const schema = {
    email: Joi.string().min(5).max(256).required().email(),
    password: Joi.string().min(5).max(256).required(),
  };
  const { error } = Joi.validate(user, schema);
  return error ? error.details : [];
}

router.post("/", async (req, res) => {
  const { action } = url.parse(req.url, true).query;
  action === "signup"
    ? await signup(req, res)
    : action === "signin"
    ? await signin(req, res)
    : res.status(400).send("Invalid Action");
});

async function signin(req, res) {
  const [validationResults] = validateSignInUser(req.body);
  if (validationResults) res.status(400).send(validationResults.message);
  const existinguser = await User.findOne({ email: req.body.email });
  if (!existinguser) res.status(400).send("Invalid email or password");

  const isValid = verifyPhrase(req.body.password, existinguser.password);

  if (!isValid) {
    res.status(404).send("Invalid email or password");
  }

  //const token = User.generateAuthToken();
  const token = jwt.sign({ _id: existinguser._id }, "jwtPrivateKey");
  res.send(token);
}

async function signup(req, res) {
  const { error } = validateSignUpUser(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const existinguser = await User.findOne({ email: req.body.email });
  if (existinguser) {
    res.status(400).send("User exists with given email");
  }

  let user = new User(req.body);
  user.password = hashPhrase(req.body.password);
  const result = await user.save();
  //emailProcess();
  res.status(201).send(_.pick(result, ["_id", "fname", "lname", "email"]));
}

module.exports = router;
