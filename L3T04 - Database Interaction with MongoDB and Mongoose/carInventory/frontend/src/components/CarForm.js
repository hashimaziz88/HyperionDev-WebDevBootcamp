// src/components/CarForm.js
import React, { useState } from "react";
import axios from "axios";

const CarForm = ({ onAdd }) => {
  const [car, setCar] = useState({
    make: "",
    model: "",
    registrationNumber: "",
    owner: "",
    year: "",
  });

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/cars", car);
      onAdd(response.data); // Update the car list after adding a new car
      setCar({
        make: "",
        model: "",
        registrationNumber: "",
        owner: "",
        year: "",
      });
      alert("Car added successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to add car");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="make"
        value={car.make}
        onChange={handleChange}
        placeholder="Make"
        required
      />
      <input
        name="model"
        value={car.model}
        onChange={handleChange}
        placeholder="Model"
        required
      />
      <input
        name="registrationNumber"
        value={car.registrationNumber}
        onChange={handleChange}
        placeholder="Registration Number"
        required
      />
      <input
        name="owner"
        value={car.owner}
        onChange={handleChange}
        placeholder="Owner"
        required
      />
      <input
        name="year"
        type="number"
        value={car.year}
        onChange={handleChange}
        placeholder="Year"
        required
      />
      <button type="submit">Add Car</button>
    </form>
  );
};

export default CarForm;
