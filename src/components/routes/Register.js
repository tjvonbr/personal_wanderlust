import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const Register = ({ errors, touched }) => {
  return (
    <div className="landing-wrapper">
      <h3 className="landing-header">Welcome to Wanderlust! You're only a few steps away from planning the trip of your dreams!</h3>
      <Form className="register-form">
        <Field className="landing-input" type="text" name="firstName" placeholder="First name" />
          <p className="field-description">First name</p>
          {touched.firstName && errors.firstName && (
            <p className="error">*{errors.firstName}</p>
          )}
        <Field className="landing-input" type="text" name="lastName" placeholder="Last name" />
          <p className="field-description">Last name</p>
          {touched.lastName && errors.lastName && (
            <p className="error">*{errors.lastName}</p>
          )}
        <Field className="landing-input" type="text" name="email" placeholder="Email address" />
          <p className="field-description">Email</p>
          {touched.email && errors.email && (
          <p className="error">*{errors.email}</p>
          )}
        <Field className="landing-input" type="text" name="username" placeholder="Username" />
          <p className="field-description">Username</p>
          {touched.username && errors.username && (
          <p className="error">*{errors.username}</p>
          )}
        <Field className="landing-input" type="password" name="password" placeholder="Password" />
          <p className="field-description">Password</p>
          {touched.password && errors.password && (
          <p className="error">*{errors.password}</p>
          )}
        <button className="btn landing-btn" type="submit">Register</button>
      </Form>
    </div>
  );
};

const FormikRegister = withFormik({
  mapPropsToValues({ firstName, lastName, email, username, password }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .required("First name is a required field."),
    lastName: Yup.string()
      .required("Last name is a required field."),
    email: Yup.string()
      .required("Email is a required field."),
    username: Yup.string()
      .required("Username is a required field."),
    password: Yup.string()
      .required("Password is a required field.")
  }),
  handleSubmit(values, props) {
    console.log("submit", values);
	console.log("props", props);
  }
})(Register)

export default FormikRegister;