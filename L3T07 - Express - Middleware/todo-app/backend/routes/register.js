const express = require("express");
// Importing Express Router to define routes
const router = express.Router();
// Importing the register controller function
const { register } = require("../controllers/userController");
// Middleware for checking email format
const { checkEmailMiddleware } = require("../middleware/checkEmailMiddleware");

// POST request to handle user registration
router.post("/register", checkEmailMiddleware, register);

module.exports = router;
