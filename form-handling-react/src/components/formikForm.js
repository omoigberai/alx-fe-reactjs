import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const initialValues = { username: "", email: "", password: "" };

  const handleSubmit = (values) => {
    console.log(values);
    alert("Form submitted!");
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-4">
        <div>
          <Field name="username" type="text" placeholder="Username" className="border p-2 rounded w-full" />
          <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
        </div>

        <div>
          <Field name="email" type="email" placeholder="Email" className="border p-2 rounded w-full" />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
        </div>

        <div>
          <Field name="password" type="password" placeholder="Password" className="border p-2 rounded w-full" />
          <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Register
        </button>
      </Form>
    </Formik>
  );
}
