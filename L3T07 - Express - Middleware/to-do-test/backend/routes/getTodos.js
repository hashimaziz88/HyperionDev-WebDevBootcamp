// backend/routes/getTodos.js

const express = require("express");
// Express Router used to interact with CRUD functions
const router = express.Router();
const todoController = require("../controllers/todos.controller");
const { jsonCheckMiddleware } = require("../middleware/jsonCheckMiddleware");
const {
  todoTooLargeMiddleware,
} = require("../middleware/todoTooLargeMiddleware");
const { tokenCheckMiddleware } = require("../middleware/tokenCheckMiddleware");

// GET (default secure path)
// http://localhost:8080/todos/secure/
// Can't send tokens in a GET request to be verified so the most I can do
// to stop users seeing todos is hide them at the the frontend
// if user lacks a jwt token (although they could fake one in their browser)
router.get("/getTodos", tokenCheckMiddleware, todoController.findAll);

// POST
router.post(
  "/add",
  [todoTooLargeMiddleware, jsonCheckMiddleware, tokenCheckMiddleware],
  todoController.create
);

// PUT
router.put(
  "/update-todo/:todo_id",
  [todoTooLargeMiddleware, jsonCheckMiddleware, tokenCheckMiddleware],
  todoController.updateById
);

// DELETE
router.delete(
  "/delete-todo/:todo_id",
  tokenCheckMiddleware,
  todoController.deleteById
);

module.exports = router;
