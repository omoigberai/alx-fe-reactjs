import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema
const RegistrationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username too short")
    .max(20, "Username too long")
    .required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password too short")
    .required("Password is required"),
});

export default function FormikForm() {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form data:", values);
    alert("Form submitted! Check console for data.");
    resetForm();
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={RegistrationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Username:</label>
              <Field type="text" name="username" placeholder="Username" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>

            <div>
              <label>Email:</label>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <label>Password:</label>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
