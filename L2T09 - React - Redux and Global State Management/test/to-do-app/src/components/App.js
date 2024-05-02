// App.js

import React from "react";
import { useSelector } from "react-redux";
import Todos from "./Todos";
import TodoItem from "./TodoItem";
import CompletedTodos from "./CompletedTodos";
import InfoPopup from "./InfoPopup";
import { Container, Badge } from "react-bootstrap";
import "./App.css";

const App = () => {
  const todos = useSelector((state) => state.todos.list);
  const completedTodos = useSelector((state) => state.todos.completedList);

  return (
    <Container className="app">
      <h1 className="text-center">My Todo App</h1>
      <InfoPopup />
      <div className="counters">
        <Counter label="Total Todos" count={todos.length} variant="primary" />
        <Counter
          label="Completed Todos"
          count={completedTodos.length}
          variant="success"
        />
      </div>
      <Todos />
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      <CompletedTodos />
    </Container>
  );
};

const Counter = ({ label, count, variant }) => (
  <div className="counter">
    {label}:{" "}
    <Badge pill variant={variant}>
      {count}
    </Badge>
  </div>
);

export default App;
