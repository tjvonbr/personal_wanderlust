import React from 'react';
import Register from './Register';
import { Form, Field, withFormik } from 'formik';
import { BrowserRouter as Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Icon } from 'semantic-ui-react';

const Login = ({ errors, touched }) => {
  return (
    <div className="landing-wrapper">
      <h3 className="landing-header">Welcome back!  Please log in to view our new content!</h3>
      <Form>
        <Field className="landing-input" type="text" name="username" placeholder="Please enter your username" />
          <p className="field-description">Username</p>
          {touched.username && errors.username && (
            <p className="error">*{errors.username}</p>
            )}
        <Field className="landing-input" type="password" name="password" placeholder="Please enter your password" />
          <p className="field-description">Password</p>
          {touched.password && errors.password && (
            <p className="error">*{errors.password}</p>
            )}
        <button className="btn landing-btn" type="submit">Login</button>

        <Link to="/register">
          <p className="register-link">No account?  No problem!  Click here to register.</p>
        </Link>

      </Form>
    </div>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required("Username is a required field."),
    password: Yup.string()
      .required("Password is a required field.")
  }),

})(Login)

export default FormikLogin;