import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import { toast } from "react-toastify"; // Import toast for displaying notifications
import "./CarForm.css"; // Import CSS for styling the form

const CarForm = ({ onAdd }) => {
  // State to manage car form data
  const [car, setCar] = useState({
    make: "",
    model: "",
    registrationNumber: "",
    owner: "",
    year: "",
  });

  // State to track loading status during form submission
  const [loading, setLoading] = useState(false);

  // Handle input changes and update the car state
  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (loading) return; // Prevent submitting if already loading
    setLoading(true); // Set loading state to true
    try {
      // Make a POST request to add a new car
      const response = await axios.post("http://localhost:5000/api/cars", car);
      onAdd(response.data); // Call onAdd callback with the new car data
      // Reset the form fields
      setCar({
        make: "",
        model: "",
        registrationNumber: "",
        owner: "",
        year: "",
      });
      toast.success("Car added successfully"); // Show success notification
    } catch (error) {
      console.error(error); // Log any errors to the console
      toast.error("Failed to add car"); // Show error notification
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Add a Car: </h2>
      <div className="form-group">
        <label htmlFor="make">Make: </label>
        <input
          className="form-input"
          name="make"
          value={car.make}
          onChange={handleChange}
          placeholder="Make"
          required // Make field required
        />
      </div>
      <div className="form-group">
        <label htmlFor="model">Model: </label>
        <input
          className="form-input"
          name="model"
          value={car.model}
          onChange={handleChange}
          placeholder="Model"
          required // Make field required
        />
      </div>
      <div className="form-group">
        <label htmlFor="registrationNumber">Registration Number: </label>
        <input
          className="form-input"
          name="registrationNumber"
          value={car.registrationNumber}
          onChange={handleChange}
          placeholder="Registration Number"
          required // Make field required
        />
      </div>
      <div className="form-group">
        <label htmlFor="owner">Owner: </label>
        <input
          className="form-input"
          name="owner"
          value={car.owner}
          onChange={handleChange}
          placeholder="Owner"
          required // Make field required
        />
      </div>
      <div className="form-group">
        <label htmlFor="year">Year: </label>
        <input
          className="form-input"
          name="year"
          type="number" // Set input type to number
          value={car.year}
          onChange={handleChange}
          placeholder="Year"
          required // Make field required
        />
      </div>
      <button className="form-submit" type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Car"}{" "}
        {/* Change button text based on loading state */}
      </button>
    </form>
  );
};

export default CarForm;
