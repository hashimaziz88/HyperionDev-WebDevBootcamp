// backend/models/todo.model.js

const mongoose = require("mongoose");

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

module.exports = mongoose.model("Todo", todoSchema);
