import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      console.log("Submitted email:", values.email); // Log the submitted email
      // Submit handling code goes here
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {" "}
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
