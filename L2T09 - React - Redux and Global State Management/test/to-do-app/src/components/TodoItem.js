// TodoItem.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleCompleted, editTodo } from "../redux/reducer";
import { Button, Form, Modal } from "react-bootstrap";

const TodoItem = ({ todo, tab }) => {
  const dispatch = useDispatch();
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.content);

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleToggleCompleted = () => {
    dispatch(toggleCompleted(todo.id));
  };

  const handleEditModalOpen = () => {
    setShowEditModal(true);
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
  };

  const handleEditTodo = () => {
    dispatch(
      editTodo({
        id: todo.id,
        content: editedTodo,
      })
    );
    handleEditModalClose();
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <Form.Check
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleCompleted}
        label={todo.content}
        disabled={todo.completed}
      />
      <Button variant="info" onClick={handleEditModalOpen}>
        Edit
      </Button>
      <Button variant="danger" onClick={handleDeleteTodo}>
        Delete
      </Button>

      <Modal show={showEditModal} onHide={handleEditModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditModalClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEditTodo}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TodoItem;
