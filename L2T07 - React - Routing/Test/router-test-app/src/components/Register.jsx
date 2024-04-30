import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Formik } from "formik";

const RegistrationForm = () => {
  return (
    <Container>
      {/* Display the registration form */}
      <h2>Registration</h2>
      <Formik
        // Set initial form values for first name, surname, email, password, and confirmPassword
        initialValues={{
          firstName: "",
          surname: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        // Define validation rules for the form fields
        validate={(values) => {
          const errors = {};
          // Validate first name field
          if (!values.firstName) {
            errors.firstName = "Required";
          } else if (values.firstName.length > 15) {
            errors.firstName = "Must not exceed 15 characters";
          }
          // Validate surname field
          if (!values.surname) {
            errors.surname = "Required";
          } else if (values.surname.length > 20) {
            errors.surname = "Must not exceed 20 characters";
          }
          // Validate email field
          if (!values.email) {
            errors.email = "Required";
          } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
            errors.email = "Invalid email address";
          }
          // Validate password field
          if (!values.password) {
            errors.password = "Required";
          } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
              values.password
            )
          ) {
            errors.password =
              "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character";
          }
          // Validate confirmPassword field
          if (!values.confirmPassword) {
            errors.confirmPassword = "Required";
          } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Passwords do not match";
          }
          return errors;
        }}
        // Handle form submission
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // Display form values in an alert (for demonstration)
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          // Use Formik's render prop pattern to render the form
          <Form onSubmit={formik.handleSubmit}>
            {/* First Name field */}
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                {...formik.getFieldProps("firstName")}
                isInvalid={formik.touched.firstName && formik.errors.firstName}
              />
              {/* Display error message if first name field is invalid */}
              <Form.Control.Feedback type="invalid">
                {formik.errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Surname field */}
            <Form.Group controlId="surname">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter surname"
                {...formik.getFieldProps("surname")}
                isInvalid={formik.touched.surname && formik.errors.surname}
              />
              {/* Display error message if surname field is invalid */}
              <Form.Control.Feedback type="invalid">
                {formik.errors.surname}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Email field */}
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...formik.getFieldProps("email")}
                isInvalid={formik.touched.email && formik.errors.email}
              />
              {/* Display error message if email field is invalid */}
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Password field */}
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...formik.getFieldProps("password")}
                isInvalid={formik.touched.password && formik.errors.password}
              />
              {/* Display error message if password field is invalid */}
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Confirm Password field */}
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                {...formik.getFieldProps("confirmPassword")}
                isInvalid={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
              />
              {/* Display error message if confirm password field is invalid */}
              <Form.Control.Feedback type="invalid">
                {formik.errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Submit button */}
            <Button
              variant="primary"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default RegistrationForm;
