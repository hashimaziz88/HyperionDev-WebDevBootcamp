// Importing necessary dependencies and components
import React from "react";
import { useSelector } from "react-redux"; // Importing useSelector hook from react-redux for accessing the Redux store
import Todos from "./Todos"; // Importing the Todos component
import TodoItem from "./TodoItem"; // Importing the TodoItem component
import CompletedTodos from "./CompletedTodos"; // Importing the CompletedTodos component
import InfoPopup from "./InfoPopup"; // Importing the InfoPopup component
import { Container, Badge } from "react-bootstrap"; // Importing Container and Badge components from react-bootstrap
import "./App.css"; // Importing CSS file for styling

// Defining the App functional component
const App = () => {
  // Accessing the todos and completedTodos from the Redux store using useSelector hook
  const todos = useSelector((state) => state.todos.list);
  const completedTodos = useSelector((state) => state.todos.completedList);

  // Rendering the App component
  return (
    <Container className="app">
      {/* Title */}
      <h1 className="text-center">My Todo App</h1>
      {/* InfoPopup component for displaying additional information */}
      <InfoPopup />
      {/* Counters for displaying total todos and completed todos */}
      <div className="counters">
        <Counter label="Total Todos" count={todos.length} variant="primary" />
        <Counter
          label="Completed Todos"
          count={completedTodos.length}
          variant="success"
        />
      </div>
      {/* Todos component for managing todos */}
      <Todos />
      {/* Rendering todo items */}
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      {/* Rendering completed todos */}
      <CompletedTodos />
    </Container>
  );
};

// Counter component for displaying counts with labels
const Counter = ({ label, count, variant }) => (
  <div className="counter">
    {label}: {/* Badge component from react-bootstrap for styling count */}
    <Badge pill variant={variant}>
      {count}
    </Badge>
  </div>
);

export default App; // Exporting the App component
