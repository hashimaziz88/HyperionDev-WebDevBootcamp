const express = require("express");
// Importing Express Router to define routes
const router = express.Router();
// Importing the login controller function
const { login } = require("../controllers/userController");

// POST request to handle user login
// This route is publicly accessible
router.post("/login", login);

module.exports = router;
