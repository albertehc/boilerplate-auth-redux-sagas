const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const User = require("./../models/User");
const sendCookie = require("./../helpers/sendCookie");

exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ msg: errors.array()[0].msg });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ msg: "Email or password not valid" });

    const checkPassword = await bcryptjs.compare(password, user.password);
    if (!checkPassword)
      return res.status(401).json({ msg: "Email or password not valid" });
    const payload = {
      id: user._id,
      username: user.username,
      email,
      theme: user.theme,
      language: user.language,
    };

    sendCookie(res, payload);
  } catch (e) {
    console.error(e);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.me = async (req, res) => {
  const { email } = req.body.token;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ msg: errors.array()[0].msg });
  }

  try {
    const user = await User.findOne({ email }).select("-password");
    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
      theme: user.theme,
      language: user.language,
    };
    sendCookie(res, payload);
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
  const { username, email, password, theme, language } = req.body;
  let { oldPassword } = req.body;
  const { id } = req.body.token;
  try {
    if (email !== req.body.token.email) {
      const checkEmail = await User.findOne({ email });
      if (checkEmail) return res.status(401).json({ msg: "Email not valid" });
    }
    const userData = await User.findById(id);
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
    await User.findByIdAndUpdate(id, {
      username,
      email,
      password: hashPassword,
      theme,
      language,
      updated_at: Date.now(),
    });
    const payload = { id, username, email, theme, language };
    sendCookie(res, payload);
  } catch (e) {
    console.error(e);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.body.token;
  const { password } = req.body;
  try {
    const userData = await User.findById(id);
    if (!password) return res.status(400).json({ msg: "Password empty" });
    const checkPassword = await bcryptjs.compare(password, userData.password);
    if (!checkPassword)
      return res.status(401).json({ msg: "Password incorrect" });
    await User.findByIdAndRemove(id);
    res.clearCookie(process.env.WEBSITENAME);
    res.status(200).json({ msg: "User deleted" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie(process.env.WEBSITENAME);
    res.status(200).json({ msg: "Log out sucesfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ msg: "Server error" });
  }
};
