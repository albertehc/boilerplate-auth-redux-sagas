const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  if (!req.cookies[process.env.WEBSITENAME]) {
    return res.json({ msg: "Unauthorized" });
  }
  if (!req.body.password) req.body.password = req.body.oldPassword;
  const token = req.cookies[process.env.WEBSITENAME];
  try {
    const signature = jwt.verify(token, process.env.SECRETKEY);
    req.body.token = signature;
    next();
  } catch (e) {
    console.error(e);
    res.status(401).json({ msg: "No valid Token" });
  }
};
