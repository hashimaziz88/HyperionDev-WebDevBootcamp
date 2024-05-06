// Importing necessary dependencies
import { createSlice } from "@reduxjs/toolkit";

// Initial state for the todos slice
const initialState = {
  list: [
    { id: 1, content: "Content1", completed: false }, // Sample todo 1
    { id: 2, content: "Content2", completed: false }, // Sample todo 2
  ],
  completedList: [], // List to store completed todos
};

// Creating a todoReducer slice using createSlice from Redux Toolkit
const todoReducer = createSlice({
  name: "todos", // Slice name
  initialState, // Initial state
  reducers: {
    // Reducer function to add a new todo
    addTodo: (state, action) => {
      state.list.push(action.payload); // Pushing the new todo into the list
    },
    // Reducer function to delete a todo
    deleteTodo: (state, action) => {
      // Filtering out the todo to be deleted
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    // Reducer function to edit a todo
    editTodo: (state, action) => {
      // Finding the index of the todo to be edited
      const index = state.list.findIndex(
        (todo) => todo.id === action.payload.id
      );
      // If todo found, update its content
      if (index !== -1) {
        state.list[index].content = action.payload.content;
      }
    },
    // Reducer function to toggle completion status of a todo
    toggleCompleted: (state, action) => {
      // Finding the index of the todo to be toggled
      const index = state.list.findIndex((todo) => todo.id === action.payload);
      // If todo found, toggle its completion status
      if (index !== -1) {
        state.list[index].completed = !state.list[index].completed;
        // If the todo is completed, move it to the completedList
        if (state.list[index].completed) {
          const completedTodo = state.list.splice(index, 1)[0];
          state.completedList.push(completedTodo);
        }
      }
    },
  },
});

// Extracting action creators and reducer from the todoReducer slice
export const { addTodo, deleteTodo, editTodo, toggleCompleted } =
  todoReducer.actions;
export default todoReducer.reducer; // Exporting the reducer function
