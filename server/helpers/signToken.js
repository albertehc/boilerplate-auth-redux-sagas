const jwt = require("jsonwebtoken");

module.exports = ({ id, email }) =>
  jwt.sign({ id, email }, process.env.SECRETKEY, {
    expiresIn: process.env.TOKENEXPIRATION,
  });
