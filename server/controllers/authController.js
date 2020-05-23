const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const User = require("./../models/repositories/UserRepository");
const sendCookie = require("./../helpers/sendCookie");
const payload = require("./../helpers/payload");

exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ msg: errors.array()[0].msg });
  }
  const { email, password } = req.body;

  try {
    let user = await User.getUserByEmail(email);
    if (!user)
      return res.status(401).json({ msg: "Email or password not valid" });

    const checkPassword = await bcryptjs.compare(password, user.password);
    if (!checkPassword)
      return res.status(401).json({ msg: "Email or password not valid" });

    sendCookie(res, payload(user));
  } catch (e) {
    console.error(e);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.me = async (req, res) => {
  const { id } = req.body.token;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ msg: errors.array()[0].msg });
  }

  try {
    const user = await User.getUserById(id);
    sendCookie(res, payload(user));
  } catch (e) {
    console.error(e);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.edit = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ msg: errors.array()[0].msg });
  }
  const { username, email, oldPassword, password, language, theme } = req.body;
  const { id } = req.body.token;

  try {
    if (email !== req.body.token.email) {
      const checkEmail = await User.getUserByEmail(email);
      if (checkEmail)
        return res.status(401).json({ msg: "Email already in use" });
    }
    const userData = await User.getUserById(id);
    const checkPassword = await bcryptjs.compare(
      oldPassword,
      userData.password
    );
    if (!checkPassword)
      return res.status(401).json({ msg: "Password incorrect" });
    let hashPassword = userData.password;
    if (password !== oldPassword) {
      const salt = await bcryptjs.genSalt(10);
      hashPassword = await bcryptjs.hash(password, salt);
    }
    await User.updateUserById(id, {
      username,
      email,
      password: hashPassword,
      theme,
      language,
      updated_at: Date.now(),
    });
    sendCookie(res, payload({ ...req.body, id }));
  } catch (e) {
    console.error(e);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.body.token;
  const { password } = req.body;
  try {
    const userData = await User.getUserById(id);
    if (!password) return res.status(400).json({ msg: "Password empty" });
    const checkPassword = await bcryptjs.compare(password, userData.password);
    if (!checkPassword)
      return res.status(401).json({ msg: "Password incorrect" });
    await User.removeUserById(id);
    res.clearCookie(process.env.WEBSITENAME);
    res.status(200).json({ msg: "User deleted" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.logout = async ({ res }) => {
  try {
    res.clearCookie(process.env.WEBSITENAME);
    res.status(200).json({ msg: "Log out sucesfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ msg: "Server error" });
  }
};
