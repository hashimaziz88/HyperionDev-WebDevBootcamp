// src/components/UpdateCarForm.js
import React, { useState } from "react";
import axios from "axios";

const UpdateCarForm = ({ car, onUpdate, onCancel }) => {
  const [editedCar, setEditedCar] = useState({ ...car });

  const handleChange = (e) => {
    setEditedCar({ ...editedCar, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/cars/${car._id}`,
        editedCar
      );
      onUpdate(response.data);
      onCancel();
    } catch (error) {
      console.error(error);
      alert("Failed to update car");
    }
  };

  return (
    <>
      <input
        name="make"
        value={editedCar.make}
        onChange={handleChange}
        placeholder="Make"
        required
      />
      <input
        name="model"
        value={editedCar.model}
        onChange={handleChange}
        placeholder="Model"
        required
      />
      <input
        name="registrationNumber"
        value={editedCar.registrationNumber}
        onChange={handleChange}
        placeholder="Registration Number"
        required
      />
      <input
        name="owner"
        value={editedCar.owner}
        onChange={handleChange}
        placeholder="Owner"
        required
      />
      <input
        name="year"
        type="number"
        value={editedCar.year}
        onChange={handleChange}
        placeholder="Year"
        required
      />
      <button onClick={handleUpdate}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </>
  );
};

export default UpdateCarForm;
