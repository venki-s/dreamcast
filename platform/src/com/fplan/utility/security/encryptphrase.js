const crypto = require("crypto");

const hashPhrase = (phrase) => {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(phrase, salt, 2048, 32, "sha512")
    .toString("hex");
  return [salt, hash].join("$");
};

const verifyPhrase = (phrase, original) => {
  const [salt, originalHash] = original.split("$");
  const hash = crypto
    .pbkdf2Sync(phrase, salt, 2048, 32, "sha512")
    .toString("hex");

  return hash === originalHash;
};

module.exports = {
  hashPhrase,
  verifyPhrase
}