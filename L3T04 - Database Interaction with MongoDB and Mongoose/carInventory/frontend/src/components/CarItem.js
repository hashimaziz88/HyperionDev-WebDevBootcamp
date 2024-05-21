// src/components/CarItem.js
import React, { useState } from "react";
import UpdateCarForm from "./UpdateCarForm";
import axios from "axios";

const CarItem = ({ car, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/cars/${car._id}`);
      onDelete(car._id);
    } catch (error) {
      console.error(error);
      alert("Failed to delete car");
    }
  };

  return (
    <li>
      {isEditing ? (
        <UpdateCarForm
          car={car}
          onUpdate={onUpdate}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          {car.make} {car.model} - {car.registrationNumber} (Owner: {car.owner})
          {car.year}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
};

export default CarItem;
