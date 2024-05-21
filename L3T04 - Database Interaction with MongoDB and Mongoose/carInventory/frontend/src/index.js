import React from "react";
import { createRoot } from "react-dom"; // Import createRoot instead of ReactDOM
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <ToastContainer /> {/* Place ToastContainer inside createRoot */}
  </>
);

reportWebVitals();
