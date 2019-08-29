import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react'
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import { registerUser } from '../actions/userActions';

const Register = props => {

 const { errors, touched, registerOpen, handleClose } = props

  return (
    <Modal 
      className="modal-container" 
      dimmer="true" 
      open={registerOpen} 
      onClose={handleClose} 
      size="small">
        <Modal.Header className="modal-header">Welcome to Wanderlust! You're only a few steps away from planning the trip of your dreams!</Modal.Header>
        <Modal.Content>
          <Form 
            className="login-form">

            <p className="field-description">First name</p>
            <Field 
              className="landing-input" 
              type="text" 
              name="firstName"
              placeholder="First name" />
              {touched.firstName && errors.firstName && (
                <p className="error">*{errors.firstName}</p>
              )}

            <p className="field-description">Last name</p>
            <Field 
              className="landing-input" 
              type="text" 
              name="lastName" 
              placeholder="Last name" />
              {touched.lastName && errors.lastName && (
                <p className="error">*{errors.lastName}</p>
              )}

            <p className="field-description">Email</p>
            <Field 
              className="landing-input" 
              type="text" 
              name="email" 
              placeholder="Email address" />
              {touched.email && errors.email && (
              <p className="error">*{errors.email}</p>
              )}

            <p className="field-description">Username</p>
            <Field 
              className="landing-input" 
              type="text" 
              name="username" 
              placeholder="Username" />
              {touched.username && errors.username && (
              <p className="error">*{errors.username}</p>
              )}

            <p className="field-description">Password</p>
            <Field 
              className="landing-input" 
              type="password" 
              name="password" 
              placeholder="Password" />
              {touched.password && errors.password && (
              <p className="error">*{errors.password}</p>
              )}

            <div className="modal-btn-wrapper"> 
              <Button 
                className="btn dashboard-btn" 
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
                >
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

  handleSubmit(values, {props}) {
    axios.post('localhost:3300/api/users/register', values)
      .then(res => {
        // localStorage.setItem('token', res.data.token);
        console.log(res.data)
      }) .catch(err =>{
        console.log(err)
      })
     console.log(values)
  }

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