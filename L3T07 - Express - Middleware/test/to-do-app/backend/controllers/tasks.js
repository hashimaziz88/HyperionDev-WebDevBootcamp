const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id }); // Find tasks where user field matches the _id of the logged-in user
    res.json(tasks);
  } catch (error) {
    res.status(500).send("Error fetching tasks");
  }
};

exports.addTask = async (req, res) => {
  try {
    const task = new Task({ ...req.body, user: req.user._id }); // Set user field to the _id of the logged-in user
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).send("Error adding task");
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id }, // Changed from userId to user
      req.body,
      { new: true }
    );
    res.json(task);
  } catch (error) {
    res.status(500).send("Error updating task");
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id, // Changed from userId to user
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).send("Error deleting task");
  }
};