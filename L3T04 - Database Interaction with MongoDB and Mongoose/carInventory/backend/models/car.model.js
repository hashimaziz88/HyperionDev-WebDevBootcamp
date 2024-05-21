// models/car.model.js
const mongoose = require("mongoose");

// Define the schema for a car document
const carSchema = new mongoose.Schema({
  // The make of the car (e.g., Toyota, Ford), required field
  make: { type: String, required: true },
  // The model of the car (e.g., Camry, Mustang), required field
  model: { type: String, required: true },
  // The registration number of the car, required field
  registrationNumber: { type: String, required: true },
  // The owner of the car, required field
  owner: { type: String, required: true },
  // The year the car was manufactured, required field
  year: { type: Number, required: true },
});

// Export the Car model based on the carSchema
module.exports = mongoose.model("Car", carSchema);
