import React from "react";
// Import the Child components
import Welcome from "./Welcome";
import NameInput from "./NameInput";
// Import useState
import { useState } from "react";
export default function DisplayName() {
  // Create the name state variable
  const [userName, setUserName] = useState("");
  // Create a function to handle the state change
  function handleChange(userInput) {
    setUserName(userInput);
  }
  return (
    <div>
      {/* The userName state is passed to the Welcome component as a prop */}
      <Welcome name={userName} />
      {/* The userName state is passed to the NameInput component as a prop
The handleChange function is passed to the component as a prop */}
      <NameInput name={userName} handleChange={handleChange} />
    </div>
  );
}
