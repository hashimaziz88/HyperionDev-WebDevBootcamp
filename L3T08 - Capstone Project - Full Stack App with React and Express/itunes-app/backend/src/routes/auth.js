const express = require("express");
const jwt = require("jwt-simple");
const jwtConfig = require("../config/jwtConfig");

const router = express.Router();

// Endpoint to generate JWT token
router.post("/token", (req, res) => {
  const payload = { user: "testuser" }; // Define the payload
  const token = jwt.encode(payload, jwtConfig.secret); // Generate JWT token using secret key
  res.json({ token }); // Send the token in response
});

module.exports = router;
