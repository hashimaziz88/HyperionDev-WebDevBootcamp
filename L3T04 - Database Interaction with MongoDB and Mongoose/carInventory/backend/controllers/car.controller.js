// controllers/car.controller.js
const Car = require("../models/car.model");

// Function to create a new car entry in the database
exports.createCar = async (req, res) => {
  try {
    // Create a new Car instance with the request body data
    const newCar = new Car(req.body);
    // Save the new car instance to the database
    const savedCar = await newCar.save();
    // Respond with status 201 (Created) and the saved car data
    res.status(201).json(savedCar);
  } catch (error) {
    // If there's an error, respond with status 400 (Bad Request) and the error message
    res.status(400).json({ message: error.message });
  }
};

// Function to update a car entry by its ID
exports.updateCar = async (req, res) => {
  try {
    // Find the car by ID and update it with the request body data
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
    });
    // Respond with the updated car data
    res.json(updatedCar);
  } catch (error) {
    // If there's an error, respond with status 400 (Bad Request) and the error message
    res.status(400).json({ message: error.message });
  }
};

// Function to update multiple car entries based on a filter
exports.updateMultipleCars = async (req, res) => {
  try {
    // Destructure the filter and update objects from the request body
    const { filter, update } = req.body;
    // Update multiple cars that match the filter with the update data
    const result = await Car.updateMany(filter, update);
    // Respond with the result of the update operation
    res.json(result);
  } catch (error) {
    // If there's an error, respond with status 400 (Bad Request) and the error message
    res.status(400).json({ message: error.message });
  }
};

// Function to delete a car entry by its ID
exports.deleteCar = async (req, res) => {
  try {
    // Find the car by ID and delete it
    await Car.findByIdAndDelete(req.params.id);
    // Respond with a success message
    res.json({ message: "Car deleted" });
  } catch (error) {
    // If there's an error, respond with status 400 (Bad Request) and the error message
    res.status(400).json({ message: error.message });
  }
};

// Function to retrieve all car entries from the database
exports.getAllCars = async (req, res) => {
  try {
    // Find and retrieve all cars
    const cars = await Car.find();
    // Respond with the list of cars
    res.json(cars);
  } catch (error) {
    // If there's an error, respond with status 400 (Bad Request) and the error message
    res.status(400).json({ message: error.message });
  }
};

// Function to retrieve cars older than five years
exports.getCarsOlderThanFiveYears = async (req, res) => {
  try {
    // Find cars where the year is less than the current year minus 5
    const cars = await Car.find(
      { year: { $lt: new Date().getFullYear() - 5 } },
      "model make registrationNumber owner" // Select specific fields to return
    );
    // Respond with the list of older cars
    res.json(cars);
  } catch (error) {
    // If there's an error, respond with status 400 (Bad Request) and the error message
    res.status(400).json({ message: error.message });
  }
};
