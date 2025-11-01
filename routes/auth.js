const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.js");

router
  .get("/register", authController.getRegister)
  .post("/register", authController.postRegister);

router
  .get("/login", authController.getLogin)
  .post("/login", authController.postLogin);

router.get("/logout", authController.logout);

module.exports = router;
