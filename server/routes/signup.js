const express = require("express");
const router = express.Router();
const signupController = require("./../controllers/signupController");
const checkError = require("./../helpers/checkUser");

// /api/signup/

router.post("/", checkError(), signupController.signup);

module.exports = router;
