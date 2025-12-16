const express = require("express");
const { signup, login, getProfile } = require("../Controllers/authController");
const { authMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/signup", signup);
router.post("/login",  login);
router.get("/getprofile",authMiddleware,  getProfile);


module.exports = router;
