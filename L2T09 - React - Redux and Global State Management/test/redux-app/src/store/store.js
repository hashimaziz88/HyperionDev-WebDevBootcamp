import { configureStore } from "@reduxjs/toolkit";
import counterState from "./counterState";

const store = configureStore({
  reducer: {
    counter: counterState,
    // ...more reducers can be added here.
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
