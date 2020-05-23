const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const websiteName = process.env.WEBSITENAME || "Test";
  const hasCookie = req.cookies[websiteName];
  if (!hasCookie) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  const userPassword = req.body.password
    ? req.body.password
    : req.body.oldPassword;
  req.body.password = userPassword;
  const token = req.cookies[websiteName];
  const secretKey = process.env.SECRETKEY || "SOMESUPERSECRETKEY";

  try {
    const signature = jwt.verify(token, secretKey);
    req.body.token = signature;
    next();
  } catch (e) {
    console.error(e);
    res.status(401).json({ msg: "No valid Token" });
  }
};
