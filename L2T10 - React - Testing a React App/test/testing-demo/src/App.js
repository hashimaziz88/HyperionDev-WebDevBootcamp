// App.js

// Import React and useState hook
import React, { useState } from "react";

// Define the App functional component
function App() {
  // Define state variable 'count' and its setter function 'setCount' using the useState hook
  const [count, setCount] = useState(0);

  // Define the button style object
  const buttonStyle = {
    backgroundColor: "lightblue",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
  };

  // Return JSX representing the component's UI
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Simple Counter App</h1>
      <p>Count: {count}</p>
      {/* Increment button with onClick event handler */}
      <button
        style={{ ...buttonStyle, marginRight: "10px" }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      {/* Decrement button with onClick event handler */}
      <button style={buttonStyle} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

// Export the App component as the default export
export default App;
