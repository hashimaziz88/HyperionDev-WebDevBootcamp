// backend/controllers/userController.js

const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

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

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username);
    const user = await User.findOne({ username });
    console.log(user);
    if (!user || !(user.password === password)) {
      console.log("here2");
      return res.status(401).send("Invalid credentials");
    }
    console.log("here");
    const token = jwt.sign({ userId: user._id }, "your_jwt_secret");
    res.json({ token });
  } catch (error) {
    res.status(500).send("Error logging in");
  }
};
