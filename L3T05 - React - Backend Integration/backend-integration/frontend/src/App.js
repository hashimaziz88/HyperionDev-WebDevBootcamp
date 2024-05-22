import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({}); // State to store fetched data
  const [customMessage, setCustomMessage] = useState(""); // State to store custom message

  useEffect(() => {
    fetchData(); // Fetch data each time the component loads
    fetchCustomMessage(); // Fetch custom message each time the component loads
  }, []);

  // Function to fetch data from the server
  const fetchData = async () => {
    try {
      // Sends a GET request to 'http://localhost:5000/api/data' (backend server)
      const response = await axios.get("/api/data");
      setData(response.data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to fetch custom message from the server
  const fetchCustomMessage = async () => {
    try {
      // Sends a GET request to 'http://localhost:5000/api/message' (backend server)
      const response = await axios.get("/api/message");
      setCustomMessage(response.data.message); // Update state with fetched custom message
    } catch (error) {
      console.error("Error fetching custom message:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Display the messages */}
        <h1>{data.message || "Loading..."}</h1>
        <h2>{customMessage || "Loading custom message..."}</h2>
      </header>
    </div>
  );
}

export default App;
