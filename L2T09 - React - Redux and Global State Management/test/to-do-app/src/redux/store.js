// store.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer";

const store = configureStore({
  reducer: {
    todos: todoReducer
  }
});

export default store;
