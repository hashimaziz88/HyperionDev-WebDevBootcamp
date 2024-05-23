import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import { toast } from "react-toastify"; // Import the toast function from react-toastify
import "./UpdateCarForm.css"; // Import CSS file for styling

const UpdateCarForm = ({ car, onUpdate, onCancel }) => {
  // State to manage edited car data and loading status
  const [editedCar, setEditedCar] = useState({ ...car });
  const [loading, setLoading] = useState(false); // State to track loading status

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    setEditedCar({ ...editedCar, [e.target.name]: e.target.value });
  };

  // Function to handle form submission for updating car
  const handleUpdate = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (loading) return; // Prevent submitting if already loading
    setLoading(true); // Set loading state to true
    try {
      // Send a PUT request to update the car data on the server
      const response = await axios.put(
        `http://localhost:5000/api/cars/${car._id}`,
        editedCar
      );
      // Call the onUpdate function passed from the parent component with the updated car data
      onUpdate(response.data);
      // Call the onCancel function passed from the parent component to exit editing mode
      onCancel();
      // Display a success message
      toast.success("Car updated successfully!");
    } catch (error) {
      console.error(error); // Log any errors to the console
      // Display an error message if the request fails
      toast.error("Failed to update car");
    } finally {
      setLoading(false); // Reset loading state after form submission completes
    }
  };

  return (
    // Form for updating car details
    <form className="update-car-form" onSubmit={handleUpdate}>
      {/* Input field for updating car make */}
      <div className="form-group">
        <label htmlFor="make">Make: </label>
        <input
          className="update-car-input"
          name="make"
          value={editedCar.make}
          onChange={handleChange}
          placeholder="Make"
          required
        />
      </div>
      {/* Input field for updating car model */}
      <div className="form-group">
        <label htmlFor="model">Model: </label>
        <input
          className="update-car-input"
          name="model"
          value={editedCar.model}
          onChange={handleChange}
          placeholder="Model"
          required
        />
      </div>
      {/* Input field for updating car registration number */}
      <div className="form-group">
        <label htmlFor="registrationNumber">Registration Number: </label>
        <input
          className="update-car-input"
          name="registrationNumber"
          value={editedCar.registrationNumber}
          onChange={handleChange}
          placeholder="Registration Number"
          required
        />
      </div>
      {/* Input field for updating car owner */}
      <div className="form-group">
        <label htmlFor="owner">Owner: </label>
        <input
          className="update-car-input"
          name="owner"
          value={editedCar.owner}
          onChange={handleChange}
          placeholder="Owner"
          required
        />
      </div>
      {/* Input field for updating car year */}
      <div className="form-group">
        <label htmlFor="year">Year: </label>
        <input
          className="update-car-input"
          name="year"
          type="number" // Set input type to number
          value={editedCar.year}
          onChange={handleChange}
          placeholder="Year"
          required
        />
      </div>
      {/* Buttons for saving changes and canceling */}
      <div className="button-group">
        {/* Button to save changes */}
        <button
          className="update-car-button save"
          type="submit"
          disabled={loading} // Disable button during loading
        >
          {loading ? "Saving..." : "Save"}{" "}
          {/* Change button text based on loading state */}
        </button>
        {/* Button to cancel editing */}
        <button
          className="update-car-button cancel"
          type="button"
          onClick={onCancel} // Call onCancel function to exit editing mode
          disabled={loading} // Disable button during loading
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UpdateCarForm;