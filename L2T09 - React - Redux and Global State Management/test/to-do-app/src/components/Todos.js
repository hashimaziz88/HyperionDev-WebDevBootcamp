import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducer";
import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";

const Todos = () => {
  const dispatch = useDispatch();

  const handleAddTodo = (todo) => {
    dispatch(
      addTodo({
        id: Date.now(),
        content: todo.trim(),
        completed: false,
      })
    );
  };

  return (
    <div className="todos">
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
          handleAddTodo(values.todo);
          resetForm();
          setSubmitting(false);
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
              <Form.Control.Feedback type="invalid">
                {errors.todo}
              </Form.Control.Feedback>
            </Form.Group>
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

export default Todos;
