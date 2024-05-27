const mongoose = require("mongoose");

// Define the schema for a todo item
const todoSchema = mongoose.Schema({
  todo_id: {
    type: String,
    required: true,
  },
  todo_name: {
    type: String,
    required: true,
  },
  todo_description: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
});

// Export the Todo model based on the schema
module.exports = mongoose.model("Todo", todoSchema);
