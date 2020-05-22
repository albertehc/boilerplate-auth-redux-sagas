const { check } = require("express-validator");

module.exports = () => {
  return [
    check("username", "username is required").not().isEmpty(),
    check("email", "Email not valid").isEmail(),
    check("password", "Password too short (min 8)").isLength({
      min: 8,
      max: 24,
    }),
  ];
};
