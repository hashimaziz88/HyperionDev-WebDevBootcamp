// Importing necessary dependencies and components
import React from "react";
import { useSelector } from "react-redux"; // Importing useSelector hook from react-redux for accessing the Redux store
import TodoItem from "./TodoItem"; // Importing the TodoItem component
import { Container } from "react-bootstrap"; // Importing Container component from react-bootstrap

// Defining the CompletedTodos functional component
const CompletedTodos = () => {
  // Accessing the completed todos from the Redux store using useSelector hook
  const completedTodos = useSelector((state) => state.todos.completedList);

  // Rendering the CompletedTodos component
  return (
    <Container>
      <h2 className="text-center">Completed Todos</h2>
      {/* Mapping through the completedTodos array and rendering TodoItem component for each todo */}
      <div className="todo-list">
        {completedTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </Container>
  );
};

export default CompletedTodos; // Exporting the CompletedTodos component
