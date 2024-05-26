// backend/controllers/todosController.js

const Todo = require("../models/todo.model");

exports.create = async (req, res) => {
  try {
    const todoModel = new Todo({
      todo_id: req.body.todo_id,
      todo_name: req.body.todo_name,
      todo_description: req.body.todo_description,
      user_id: req.body.user_id,
    });

    const saveTodo = await todoModel.save();

    // Success res
    console.log(saveTodo);
    res.status(200).send(saveTodo);
  } catch (error) {
    // Error res
    console.error(error);
    res.status(500).send({
      message: "Some error occurred while creating the todo.",
    });
  }
};

exports.findAll = (req, res) => {
  const user_id = req.params.user_id;

  Todo.find({ user_id: user_id }) // Filter todos by user_id
    .then((todos) => {
      res.send(todos);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({
        message: "An error occurred while retrieving todos",
      });
    });
};

exports.updateById = async (req, res) => {
  try {
    // Grab todo to update by id
    const todo_id = req.params.todo_id;

    // Define the new data to update
    const update = {
      todo_id: req.body.todo_id,
      todo_name: req.body.todo_name,
      todo_description: req.body.todo_description,
    };

    const updatedTodo = await Todo.findOneAndUpdate(
      { todo_id: todo_id },
      update,
      { new: true }
    );

    if (updatedTodo) {
      res.status(200).send(updatedTodo);
    } else {
      res.status(404).send({ message: "Todo not found" });
    }
  } catch (error) {
    console.error("Something went wrong when updating data.", error);
    res.status(500).send({ message: "An error occurred while updating." });
  }
};

exports.deleteById = async (req, res) => {
  try {
    const todo_id = req.params.todo_id;
    const deleteResult = await Todo.deleteOne({ todo_id: todo_id });

    if (deleteResult.deletedCount > 0) {
      res.send("Successfully deleted the todo.");
    } else {
      res.send("Todo not found...");
    }
  } catch (error) {
    console.error("An error occurred while removing the todo.", error);
    res
      .status(500)
      .send({ message: "An error occurred while removing the todo." });
  }
};
