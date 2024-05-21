import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify"; // Import the toast function
import "./UpdateCarForm.css"; // Import CSS file

const UpdateCarForm = ({ car, onUpdate, onCancel }) => {
  const [editedCar, setEditedCar] = useState({ ...car });
  const [loading, setLoading] = useState(false); // State to track loading status

  const handleChange = (e) => {
    setEditedCar({ ...editedCar, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault(); // Prevent form submission
    if (loading) return; // Prevent submitting while loading
    setLoading(true); // Set loading state to true during form submission
    try {
      const response = await axios.put(
        `http://localhost:5000/api/cars/${car._id}`,
        editedCar
      );
      onUpdate(response.data);
      onCancel();
      toast.success("Car updated successfully!"); // Display success message
    } catch (error) {
      console.error(error);
      toast.error("Failed to update car"); // Display error message
    } finally {
      setLoading(false); // Reset loading state after form submission completes
    }
  };

  return (
    <form className="update-car-form" onSubmit={handleUpdate}>
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
      <div className="form-group">
        <label htmlFor="year">Year: </label>
        <input
          className="update-car-input"
          name="year"
          type="number"
          value={editedCar.year}
          onChange={handleChange}
          placeholder="Year"
          required
        />
      </div>
      <div className="button-group">
        <button
          className="update-car-button save"
          type="submit"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save"}{" "}
          {/* Change button text during loading */}
        </button>
        <button
          className="update-car-button cancel"
          type="button"
          onClick={onCancel}
          disabled={loading} // Disable cancel button during loading
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UpdateCarForm;
