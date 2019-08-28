import React from 'react';
import { Button, Modal } from 'semantic-ui-react'
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const Register = ({ errors, touched, registerOpen, handleClose }) => {
  return (
    <Modal className="modal-container" 
            dimmer="true" 
            open={registerOpen} 
            onClose={handleClose} 
            size="tiny">
        <Modal.Header className="modal-header">Welcome to Wanderlust! You're only a few steps away from planning the trip of your dreams!</Modal.Header>
        <Modal.Content>
          <Form className="login-form">
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
          <div className="modal-btn-wrapper"> 
            <Button 
              className="btn dashboard-btn" 
              type="submit"
              icon="x"
              labelPosition="right"
              content="Home"
              onClick={handleClose}>
            </Button>
            
            <Button 
              className="btn login-btn" 
              icon="checkmark"
              labelPosition="right"
              content="Register"
              onClick={handleClose}>
            </Button>
          </div>  
          </Form>
 
      </Modal.Content>
    </Modal>
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

})(Register)

export default FormikRegister;