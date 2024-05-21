import React from "react";
import { createRoot } from "react-dom"; // Import createRoot instead of ReactDOM for concurrent rendering
import { ToastContainer } from "react-toastify"; // Import ToastContainer for displaying notifications
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS for styling notifications
import "./index.css"; // Import CSS file for styling
import App from "./App"; // Import the App component
import reportWebVitals from "./reportWebVitals";

// Create the root React element using createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById("root"));
// Render the main App component inside React.StrictMode to enable additional checks and warnings
root.render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    {/* Render ToastContainer to display notifications */}
    <ToastContainer />
  </>
);

reportWebVitals();
