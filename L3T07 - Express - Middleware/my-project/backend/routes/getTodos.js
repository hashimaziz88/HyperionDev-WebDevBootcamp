const express = require("express");
// Importing Express Router to define routes
const router = express.Router();
// Importing controller functions for todo operations
const todoController = require("../controllers/todos.controller");
// Middleware for checking JSON content type in request
const { jsonCheckMiddleware } = require("../middleware/jsonCheckMiddleware");
// Middleware for checking if todo payload is too large
const {
  todoTooLargeMiddleware,
} = require("../middleware/todoTooLargeMiddleware");
// Middleware for checking JWT token in request
const { tokenCheckMiddleware } = require("../middleware/tokenCheckMiddleware");

// GET request to retrieve all todos for a specific user
router.get("/getTodos/:user_id", tokenCheckMiddleware, todoController.findAll);

// POST request to add a new todo
router.post(
  "/add",
  [todoTooLargeMiddleware, jsonCheckMiddleware, tokenCheckMiddleware],
  todoController.create
);

// PUT request to update a todo by its ID
router.put(
  "/update-todo/:todo_id",
  [todoTooLargeMiddleware, jsonCheckMiddleware, tokenCheckMiddleware],
  todoController.updateById
);

// DELETE request to delete a todo by its ID
router.delete(
  "/delete-todo/:todo_id",
  tokenCheckMiddleware,
  todoController.deleteById
);

module.exports = router;
