const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
} = require("../controllers/userController");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/logout", logoutUser);

router.get("/current", currentUser);

module.exports = router;
