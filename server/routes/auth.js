const express = require("express");
const router = express.Router();
const authController = require("./../controllers/authController");
const auth = require("./../middleware/auth");
const checkError = require("./../helpers/checkUser");

// /api/auth/
router.post("/", authController.login);

// Private
router.get("/", auth, authController.me);

router.put("/", auth, checkError(), authController.edit);

router.delete("/", auth, authController.delete);

router.post("/logout", auth, authController.logout);

module.exports = router;
