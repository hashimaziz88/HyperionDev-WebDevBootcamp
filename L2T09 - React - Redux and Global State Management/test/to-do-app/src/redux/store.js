// Importing necessary dependencies
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer"; // Importing the reducer

// Configuring the Redux store
const store = configureStore({
  reducer: {
    todos: todoReducer, // Adding the todoReducer under the "todos" slice
  },
});

export default store; // Exporting the configured Redux store
