const Todo = require("../models/todo.model");

// Controller function to create a new todo
exports.create = async (req, res) => {
  try {
    // Create a new todo model based on request body
    const todoModel = new Todo({
      todo_id: req.body.todo_id,
      todo_name: req.body.todo_name,
      todo_description: req.body.todo_description,
      user_id: req.body.user_id,
    });

    // Save the todo to the database
    const saveTodo = await todoModel.save();

    // Send success response with saved todo data
    res.status(200).send(saveTodo);
  } catch (error) {
    // Handle errors and send error response
    console.error(error);
    res.status(500).send("Some error occurred while creating the todo.");
  }
};

// Controller function to retrieve all todos for a specific user
exports.findAll = (req, res) => {
  // Extract user_id from request parameters
  const user_id = req.params.user_id;

  // Find all todos for the specified user
  Todo.find({ user_id: user_id })
    .then((todos) => {
      // Send the todos as response
      res.send(todos);
    })
    .catch((error) => {
      // Handle errors and send error response
      console.log(error);
      res.status(500).send({
        message: "An error occurred while retrieving todos",
      });
    });
};

// Controller function to update a todo by its ID
exports.updateById = async (req, res) => {
  try {
    // Extract todo_id from request parameters
    const todo_id = req.params.todo_id;

    // Define the new data to update
    const update = {
      todo_id: req.body.todo_id,
      todo_name: req.body.todo_name,
      todo_description: req.body.todo_description,
    };

    // Find and update the todo by its ID
    const updatedTodo = await Todo.findOneAndUpdate(
      { todo_id: todo_id },
      update,
      { new: true }
    );

    // Send success response with updated todo data
    if (updatedTodo) {
      res.status(200).send(updatedTodo);
    } else {
      res.status(404).send({ message: "Todo not found" });
    }
  } catch (error) {
    // Handle errors and send error response
    console.error("Something went wrong when updating data.", error);
    res.status(500).send({ message: "An error occurred while updating." });
  }
};

// Controller function to delete a todo by its ID
exports.deleteById = async (req, res) => {
  try {
    // Extract todo_id from request parameters
    const todo_id = req.params.todo_id;

    // Delete the todo from the database by its ID
    const deleteResult = await Todo.deleteOne({ todo_id: todo_id });

    // Send success response if todo was deleted
    if (deleteResult.deletedCount > 0) {
      res.send("Successfully deleted the todo.");
    } else {
      res.send("Todo not found...");
    }
  } catch (error) {
    // Handle errors and send error response
    console.error("An error occurred while removing the todo.", error);
    res
      .status(500)
      .send({ message: "An error occurred while removing the todo." });
  }
};
