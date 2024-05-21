// routes/car.routes.js
const express = require("express");
// Create a new router object
const router = express.Router();
// Import the car controller to handle requests
const carController = require("../controllers/car.controller");

// Route to create a new car
router.post("/cars", carController.createCar);
// Route to update an existing car by its ID
router.put("/cars/:id", carController.updateCar);
// Route to update multiple cars based on a filter
router.put("/cars", carController.updateMultipleCars);
// Route to delete a car by its ID
router.delete("/cars/:id", carController.deleteCar);
// Route to get all cars
router.get("/cars", carController.getAllCars);
// Route to get cars older than five years
router.get("/cars/olderThanFiveYears", carController.getCarsOlderThanFiveYears);

// Export the router to be used in other parts of the application
module.exports = router;
