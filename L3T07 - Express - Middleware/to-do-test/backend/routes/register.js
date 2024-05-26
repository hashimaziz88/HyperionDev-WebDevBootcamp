// backend/routes/login.js

const express = require("express");
const router = express.Router();
const { register } = require("../controllers/userController");
const { checkEmailMiddleware } = require("../middleware/checkEmailMiddleware");

router.post("/register", checkEmailMiddleware, register);

module.exports = router;
