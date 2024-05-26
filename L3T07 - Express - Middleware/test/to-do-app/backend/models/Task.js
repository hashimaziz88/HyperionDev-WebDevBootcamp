const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // This refers to the User model
    required: true,
  },
  task: { type: String, required: true, maxlength: 140 },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", taskSchema);
