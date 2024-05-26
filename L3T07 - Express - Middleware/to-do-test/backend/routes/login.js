// backend/routes/login.js

const express = require("express");
// Express Router used to interact with CRUD functions
const router = express.Router();
const { login } = require("../controllers/userController");

// login & register are public facing routes
router.post("/login", login);

module.exports = router;
