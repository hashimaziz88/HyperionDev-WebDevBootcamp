// src/components/CarItem.js
import React, { useState } from "react";
import UpdateCarForm from "./UpdateCarForm";
import axios from "axios";
import "./CarItem.css"; // Import CSS file
import { toast } from "react-toastify";

const CarItem = ({ car, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/cars/${car._id}`);
      onDelete(car._id);
      toast.success("Car Deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to Delete car");
    }
  };

  return (
    <li className="car-item">
      {isEditing ? (
        <UpdateCarForm
          car={car}
          onUpdate={onUpdate}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <div className="car-details">
            {car.make} {car.model} - {car.registrationNumber} (Owner:{" "}
            {car.owner}) {car.year}
          </div>
          <div className="car-buttons">
            <button
              className="car-button edit"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button className="car-button delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default CarItem;
