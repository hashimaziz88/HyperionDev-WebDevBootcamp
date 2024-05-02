import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleCompleted, editTodo } from "../redux/reducer";
import { Button, Form, Modal } from "react-bootstrap";
import { Formik } from "formik";
import "./TodoItem.css";

const TodoItem = ({ todo }) => {
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

  const handleEditTodo = (values, { setSubmitting }) => {
    if (!values.editedTodo.trim()) {
      setSubmitting(false);
      return; // Do not proceed if edited todo is empty
    }
    dispatch(
      editTodo({
        id: todo.id,
        content: values.editedTodo,
      })
    );
    handleEditModalClose();
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="d-flex align-items-center justify-content-between">
        <Form.Check
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleCompleted}
          className="me-3"
        />
        <div className="flex-grow-1">{todo.content}</div>
        {!todo.completed && (
          <div className="d-flex">
            <Button
              variant="info"
              onClick={handleEditModalOpen}
              className="me-2 custom-button"
            >
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={handleDeleteTodo}
              className="custom-button"
            >
              Delete
            </Button>
          </div>
        )}
      </div>

      <Modal show={showEditModal} onHide={handleEditModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{ editedTodo: editedTodo }}
            validate={(values) => {
              const errors = {};
              if (!values.editedTodo.trim()) {
                errors.editedTodo = "Please input something";
              }
              return errors;
            }}
            onSubmit={handleEditTodo}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEditedTodo">
                  <Form.Control
                    type="text"
                    placeholder="Edit todo..."
                    name="editedTodo"
                    value={values.editedTodo}
                    onChange={handleChange}
                    isInvalid={touched.editedTodo && !!errors.editedTodo}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.editedTodo}
                  </Form.Control.Feedback>
                </Form.Group>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={handleEditModalClose}
                    className="custom-button"
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                    className="custom-button"
                  >
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TodoItem;
