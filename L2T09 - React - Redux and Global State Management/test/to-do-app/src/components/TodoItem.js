// Importing necessary dependencies and components
import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Importing useDispatch hook from react-redux for dispatching actions to the Redux store
import { deleteTodo, toggleCompleted, editTodo } from "../redux/reducer"; // Importing action creators from Redux reducer
import { Button, Form, Modal } from "react-bootstrap"; // Importing Button, Form, and Modal components from react-bootstrap
import { Formik } from "formik"; // Importing Formik for form management
import "./TodoItem.css"; // Import CSS file for custom styling

// Defining the TodoItem functional component
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch(); // Initializing useDispatch hook to dispatch actions
  const [showEditModal, setShowEditModal] = useState(false); // State to manage the visibility of the edit modal
  const [editedTodo, setEditedTodo] = useState(todo.content); // State to store the edited todo content

  // Function to handle deletion of todo
  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id)); // Dispatching deleteTodo action with the todo id
  };

  // Function to handle toggling completion status of todo
  const handleToggleCompleted = () => {
    dispatch(toggleCompleted(todo.id)); // Dispatching toggleCompleted action with the todo id
  };

  // Function to open the edit modal
  const handleEditModalOpen = () => {
    setShowEditModal(true);
  };

  // Function to close the edit modal
  const handleEditModalClose = () => {
    setShowEditModal(false);
  };

  // Function to handle editing of todo
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
    ); // Dispatching editTodo action with the todo id and edited content
    handleEditModalClose(); // Closing the edit modal
  };

  // Rendering the TodoItem component
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-content">
        {/* Checkbox for toggling completion status */}
        <Button
          variant="light"
          onClick={handleToggleCompleted}
          className="complete-button"
        >
          <Form.Check
            type="checkbox"
            id={`checkbox-${todo.id}`}
            checked={todo.completed}
            onChange={handleToggleCompleted}
            style={{ marginRight: "5px", display: "inline-block" }}
          />
          <Form.Check.Label
            htmlFor={`checkbox-${todo.id}`}
            style={{ marginLeft: "5px" }}
          >
            Complete
          </Form.Check.Label>
        </Button>
        {/* Displaying todo content */}
        <div style={{ marginLeft: "5px" }}>{todo.content}</div>
      </div>
      <div className="action-buttons">
        {/* Buttons for editing and deleting todo */}
        {!todo.completed && (
          <>
            <Button variant="info" onClick={handleEditModalOpen}>
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={handleDeleteTodo}
              style={{ margin: "10px" }}
            >
              Delete
            </Button>
          </>
        )}
      </div>

      {/* Edit modal */}
      <Modal show={showEditModal} onHide={handleEditModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Formik form for editing todo */}
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
                  {/* Error message for empty edited todo */}
                  <Form.Control.Feedback type="invalid">
                    {errors.editedTodo}
                  </Form.Control.Feedback>
                </Form.Group>
                {/* Modal footer with cancel and save buttons */}
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleEditModalClose}>
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
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

export default TodoItem; // Exporting the TodoItem component
