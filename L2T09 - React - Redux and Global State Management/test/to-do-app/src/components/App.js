// App.js
import React from "react";
import { useSelector } from "react-redux";
import Todos from "./Todos";
import TodoItem from "./TodoItem";
import InfoPopup from "./InfoPopup";
import { Container, Row, Col, Badge } from "react-bootstrap";
import "./App.css";

const App = () => {
  const todos = useSelector((state) => state.todos.list);

  return (
    <Container className="app">
      <h1 className="text-center">My Todo App</h1>
      <Row className="justify-content-center mb-3">
        <Col xs="auto">
          <InfoPopup />
        </Col>
      </Row>
      <Row className="justify-content-center mb-3">
        <Col xs="auto">
          <div>
            Total Todos:{" "}
            <Badge pill variant="primary">
              {todos.length}
            </Badge>
          </div>
        </Col>
      </Row>
      <Todos />
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </Container>
  );
};

export default App;
