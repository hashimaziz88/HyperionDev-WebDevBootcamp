// src/components/CarItem.js
import React, { useState } from "react";
import UpdateCarForm from "./UpdateCarForm"; // Import the form for updating a car
import axios from "axios"; // Import axios for making HTTP requests
import "./CarItem.css"; // Import CSS file for styling
import { toast } from "react-toastify"; // Import react-toastify for displaying notifications

const CarItem = ({ car, onDelete, onUpdate }) => {
  // State to manage whether the car item is in editing mode
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle deleting a car
  const handleDelete = async () => {
    try {
      // Send a DELETE request to the server to delete the car by its ID
      await axios.delete(`http://localhost:5000/api/cars/${car._id}`);
      // Call the onDelete function passed from the parent component to update the car list
      onDelete(car._id);
      // Display a success notification
      toast.success("Car Deleted successfully");
    } catch (error) {
      console.error(error);
      // Display an error notification if the request fails
      toast.error("Failed to Delete car");
    }
  };

  return (
    <li className="car-item">
      {/* Conditional rendering based on whether the car item is in editing mode */}
      {isEditing ? (
        // Render the update car form if in editing mode
        <UpdateCarForm
          car={car}
          onUpdate={onUpdate}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        // Render the car details and buttons if not in editing mode
        <>
          {/* Display car details */}
          <div className="car-details">
            {car.make} {car.model} - {car.registrationNumber} (Owner:{" "}
            {car.owner}) {car.year}
          </div>
          {/* Buttons for editing and deleting the car */}
          <div className="car-buttons">
            {/* Button to switch to editing mode */}
            <button
              className="car-button edit"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            {/* Button to delete the car */}
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
