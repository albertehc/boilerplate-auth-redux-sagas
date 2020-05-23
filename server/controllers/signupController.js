const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const User = require("./../models/repositories/UserRepository");
const sendCookie = require("./../helpers/sendCookie");
const payload = require("./../helpers/payload");

exports.signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ msg: errors.array()[0].msg });
  }
  const { email, password } = req.body;

  try {
    let user = await User.getUserByEmail(email);
    if (user) {
      return res.status(400).json({ msg: "Email already exist" });
    }
    const salt = await bcryptjs.genSalt(10);
    req.body.password = await bcryptjs.hash(password, salt);
    const userDB = await User.signupUser({
      ...req.body,
      role: "user",
      created_at: Date.now(),
      updated_at: Date.now(),
    });
    const { _id } = userDB.ops[0];
    sendCookie(res, payload({ ...req.body, id: _id }));
  } catch (e) {
    console.error(e);
    res.status(500).send("An error ocurred");
  }
};
