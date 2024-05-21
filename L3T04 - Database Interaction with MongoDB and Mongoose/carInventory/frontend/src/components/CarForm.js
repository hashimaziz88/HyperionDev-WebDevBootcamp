import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import { toast } from "react-toastify"; // Import react-toastify for displaying notifications
import "./CarForm.css"; // Import CSS styles for the form

const CarForm = ({ onAdd }) => {
  // State to manage form input values and loading status
  const [car, setCar] = useState({
    make: "",
    model: "",
    registrationNumber: "",
    owner: "",
    year: "",
  });
  const [loading, setLoading] = useState(false); // State to track loading status

  // Function to handle input changes
  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (loading) return; // Prevent submitting while loading
    setLoading(true); // Set loading state to true during form submission
    try {
      // Send a POST request to the server to add the car
      const response = await axios.post("http://localhost:5000/api/cars", car);
      // Call the onAdd function passed from the parent component with the new car data
      onAdd(response.data);
      // Clear the form fields after successful submission
      setCar({
        make: "",
        model: "",
        registrationNumber: "",
        owner: "",
        year: "",
      });
      // Display a success notification
      toast.success("Car added successfully");
    } catch (error) {
      console.error(error);
      // Display an error notification if the request fails
      toast.error("Failed to add car");
    } finally {
      setLoading(false); // Reset loading state after form submission completes
    }
  };

  return (
    // Form element with event handler for form submission
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Add a Car: </h2>
      {/* Input fields for car details */}
      <div className="form-group">
        <label htmlFor="make">Make: </label>
        <input
          className="form-input"
          name="make"
          value={car.make}
          onChange={handleChange}
          placeholder="Make"
          required
        />
      </div>
      {/* Additional input fields for model, registration number, owner, and year */}
      {/* Similar structure for other input fields */}
      {/* Submit button with dynamic text based on loading state */}
      <button className="form-submit" type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Car"}{" "}
        {/* Change button text during loading */}
      </button>
    </form>
  );
};

export default CarForm;
