// Todos.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducer";
import { Form, Button } from "react-bootstrap";

const Todos = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    if (todo.trim() !== "") {
      dispatch(
        addTodo({
          id: Date.now(),
          content: todo,
          completed: false,
        })
      );
      setTodo("");
    }
  };

  return (
    <div className="todos">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTodo();
        }}
      >
        <Form.Group controlId="formTodo">
          <Form.Control
            type="text"
            placeholder="Add a todo..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleAddTodo}>
          Add
        </Button>
      </Form>
    </div>
  );
};

export default Todos;
