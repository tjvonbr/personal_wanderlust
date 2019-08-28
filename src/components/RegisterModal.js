import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react'
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import { registerUser } from '../actions/userActions';

const Register = ({ registerUser, errors, touched, registerOpen, handleClose }) => {
  const [newUser, setNewUser] = useState({
      firstName: "", 
      lastName: "",
      email: "",
      username: "", 
      password: ""
  })

  const handleChanges = e => {
    setNewUser({...newUser, [e.target.name]: e.target.value})
    console.log(newUser);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("NEW USER", newUser);
    registerUser(newUser)

  }

  return (
    <Modal className="modal-container" 
            dimmer="true" 
            open={registerOpen} 
            onClose={handleClose} 
            size="tiny">
        <Modal.Header className="modal-header">Welcome to Wanderlust! You're only a few steps away from planning the trip of your dreams!</Modal.Header>
        <Modal.Content>
          <Form 
            className="login-form"
            onSubmit={handleSubmit}>
            <Field 
              className="landing-input" 
              type="text" 
              name="firstName"
              value={newUser.firstName}
              placeholder="First name" 
              onChange={handleChanges}/>
              <p className="field-description">First name</p>
              {touched.firstName && errors.firstName && (
                <p className="error">*{errors.firstName}</p>
              )}

            <Field 
              className="landing-input" 
              type="text" 
              name="lastName" 
              value={newUser.lastName}
              placeholder="Last name" 
              onChange={handleChanges} />
              <p className="field-description">Last name</p>
              {touched.lastName && errors.lastName && (
                <p className="error">*{errors.lastName}</p>
              )}

            <Field 
              className="landing-input" 
              type="text" 
              name="email" 
              value={newUser.email}
              placeholder="Email address" 
              onChange={handleChanges} />
              <p className="field-description">Email</p>
              {touched.email && errors.email && (
              <p className="error">*{errors.email}</p>
              )}

            <Field 
              className="landing-input" 
              type="text" 
              name="username" 
              value={newUser.username}
              placeholder="Username" 
              onChange={handleChanges} />
              <p className="field-description">Username</p>
              {touched.username && errors.username && (
              <p className="error">*{errors.username}</p>
              )}

            <Field 
              className="landing-input" 
              type="password" 
              name="password" 
              value={newUser.password}
              placeholder="Password" 
              onChange={handleChanges} />
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
              type="submit"
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

const mapStateToProps = state => {
  return {
    users: state.users
  }   
}

export default connect(
  mapStateToProps,
  { registerUser }
)(FormikRegister);