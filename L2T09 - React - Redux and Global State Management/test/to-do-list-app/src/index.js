// Importing necessary dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Importing CSS file for global styles
import App from "./components/App"; // Importing the main App component
import reportWebVitals from "./reportWebVitals"; // Importing reportWebVitals for performance monitoring
import { Provider } from "react-redux"; // Importing Provider from react-redux for providing the Redux store
import store from "./redux/store"; // Importing the Redux store

// Creating a root for ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the app component wrapped with Provider to provide the Redux store
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Reporting web vitals for performance monitoring
reportWebVitals();
