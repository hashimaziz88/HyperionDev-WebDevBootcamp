require("dotenv").config();
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

// Register a new user
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    res.status(500).send("Error registering user");
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(user.password === password)) {
      return res.status(401).send("Invalid credentials");
    }
    // Generate JWT token for authenticated user
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    // Respond with token and user information
    res.json({
      token,
      user: { username: user.username, _id: user._id.valueOf() },
    });
  } catch (error) {
    res
      .status(500)
      .send("Error logging in, check username or password and try again");
  }
};
