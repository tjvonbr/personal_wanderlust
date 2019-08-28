import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react'
import { Form, Field, withFormik } from 'formik';
import { BrowserRouter as Link } from 'react-router-dom';
import * as Yup from 'yup';

import RegisterModal from './RegisterModal';

const LoginModal = ({ loginOpen, handleClose, errors, touched }) => {
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <div>
      <Modal className="modal-container" dimmer="true" open={loginOpen} onClose={handleClose} size="tiny">
        <Modal.Header className="modal-header">Welcome back!  Please log in to view our new content!</Modal.Header>
        <Modal.Content>

        <Form className="login-form">
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
              content="Login"
              onClick={handleClose}>
            </Button>
          </div>   

          <Link to="/register">
            <p className="register-link"
                onClick = {() => setRegisterOpen(true)}>
              No account?  No problem!  Click here to register.</p>
            <RegisterModal
              key="registerModal"
              registerOpen={registerOpen}
              handleClose={() => setRegisterOpen(false)} />
          </Link>

        </Form>

        </Modal.Content>
      </Modal>
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

})(LoginModal)

export default FormikLogin;