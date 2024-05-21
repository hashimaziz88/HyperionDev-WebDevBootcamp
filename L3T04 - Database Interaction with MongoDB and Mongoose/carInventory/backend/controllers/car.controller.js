// controllers/car.controller.js
const Car = require('../models/car.model');

exports.createCar = async (req, res) => {
  try {
    const newCar = new Car(req.body);
    const savedCar = await newCar.save();
    res.status(201).json(savedCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateCar = async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateMultipleCars = async (req, res) => {
  try {
    const { filter, update } = req.body;
    const result = await Car.updateMany(filter, update);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCar = async (req, res) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.json({ message: 'Car deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getCarsOlderThanFiveYears = async (req, res) => {
  try {
    const cars = await Car.find({ year: { $lt: new Date().getFullYear() - 5 } }, 'model make registrationNumber owner');
    const cars2 = await Car.where(x => x.year > new Date().getFullYear() - 5);

    res.json(cars2);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
