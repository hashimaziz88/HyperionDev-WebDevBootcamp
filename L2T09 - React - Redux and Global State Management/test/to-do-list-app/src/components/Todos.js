// Importing necessary dependencies and components
import React from "react";
import { useDispatch } from "react-redux"; // Importing useDispatch hook from react-redux for dispatching actions to the Redux store
import { addTodo } from "../redux/reducer"; // Importing action creator for adding a new todo
import { Form, Button } from "react-bootstrap"; // Importing Form and Button components from react-bootstrap
import { Formik } from "formik"; // Importing Formik for form management

// Defining the Todos functional component
const Todos = () => {
  const dispatch = useDispatch(); // Initializing useDispatch hook to dispatch actions

  // Function to handle adding a new todo
  const handleAddTodo = (todo) => {
    dispatch(
      addTodo({
        id: Date.now(), // Generating a unique id for the new todo
        content: todo.trim(), // Trimming the todo content
        completed: false, // Setting completed status to false for a new todo
      })
    );
  };

  // Rendering the Todos component
  return (
    <div className="todos">
      {/* Formik form for adding a new todo */}
      <Formik
        initialValues={{ todo: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.todo.trim()) {
            errors.todo = "Please input something";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleAddTodo(values.todo); // Calling handleAddTodo function to add the new todo
          resetForm(); // Resetting the form after submitting
          setSubmitting(false); // Resetting submitting state
        }}
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
            <Form.Group controlId="formTodo">
              <Form.Control
                type="text"
                placeholder="Add a todo..."
                name="todo"
                value={values.todo}
                onChange={handleChange}
                isInvalid={touched.todo && !!errors.todo}
              />
              {/* Error message for empty todo */}
              <Form.Control.Feedback type="invalid">
                {errors.todo}
              </Form.Control.Feedback>
            </Form.Group>
            {/* Button to submit the new todo */}
            <Button
              variant="primary"
              type="submit"
              disabled={isSubmitting}
              style={{ margin: "20px" }}
            >
              Add
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Todos; // Exporting the Todos component
