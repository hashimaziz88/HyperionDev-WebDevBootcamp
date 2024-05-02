// CompletedTodos.js

import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { Container } from "react-bootstrap";

const CompletedTodos = () => {
  const completedTodos = useSelector((state) => state.todos.completedList);

  return (
    <Container>
      <h2>Completed Todos</h2>
      <div className="todo-list">
        {completedTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </Container>
  );
};

export default CompletedTodos;
