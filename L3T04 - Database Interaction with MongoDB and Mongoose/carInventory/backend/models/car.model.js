// models/car.model.js
const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  registrationNumber: { type: String, required: true },
  owner: { type: String, required: true },
  year: { type: Number, required: true },
});

module.exports = mongoose.model("Car", carSchema);
