// routes/car.routes.js
const express = require("express");
const router = express.Router();
const carController = require("../controllers/car.controller");

router.post("/cars", carController.createCar);
router.put("/cars/:id", carController.updateCar);
router.put("/cars", carController.updateMultipleCars);
router.delete("/cars/:id", carController.deleteCar);
router.get("/cars", carController.getAllCars);
router.get("/cars/olderThanFiveYears", carController.getCarsOlderThanFiveYears);

module.exports = router;
