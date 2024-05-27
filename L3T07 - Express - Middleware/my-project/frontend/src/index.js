import React from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM for rendering
import "./index.css"; // Import CSS file
import App from "./App"; // Import main App component
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing
import reportWebVitals from "./reportWebVitals"; // Import reportWebVitals for performance measurement

// Create a root for ReactDOM rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render the App component wrapped in BrowserRouter for routing
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Measure performance using reportWebVitals
reportWebVitals();
