const mongoose = require("mongoose");

// Define the schema for a user
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Export the User model based on the schema
module.exports = mongoose.model("User", userSchema);
