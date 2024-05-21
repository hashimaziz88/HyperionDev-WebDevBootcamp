import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./CarForm.css";

const CarForm = ({ onAdd }) => {
  const [car, setCar] = useState({
    make: "",
    model: "",
    registrationNumber: "",
    owner: "",
    year: "",
  });
  const [loading, setLoading] = useState(false); // State to track loading status

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // Prevent submitting while loading
    setLoading(true); // Set loading state to true during form submission
    try {
      const response = await axios.post("http://localhost:5000/api/cars", car);
      onAdd(response.data);
      setCar({
        make: "",
        model: "",
        registrationNumber: "",
        owner: "",
        year: "",
      });
      toast.success("Car added successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add car");
    } finally {
      setLoading(false); // Reset loading state after form submission completes
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
          required
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
          required
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
          required
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
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="year">Year: </label>
        <input
          className="form-input"
          name="year"
          type="number"
          value={car.year}
          onChange={handleChange}
          placeholder="Year"
          required
        />
      </div>
      <button className="form-submit" type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Car"}{" "}
        {/* Change button text during loading */}
      </button>
    </form>
  );
};

export default CarForm;
