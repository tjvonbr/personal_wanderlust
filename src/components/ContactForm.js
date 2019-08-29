import React from 'react';
import { connect } from 'react-redux';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = props => {

  const { errors, touched } = props

  return (
    <>
      <h3 className="contact-title">Have an issue?  Concern?  Feedback?  Let us know by filling out our contact form.  Someone from our team will get back to you within a few days!</h3>
      <Form 
        className="contact-form">
          <p className="field-description">First Name</p>
          <Field
            className="contact-input"
            type="text"
            name="firstName"
            placeholder="First Name" />
            {touched.firstName && errors.firstName && (
              <p className="error">*{errors.firstName}</p>
            )}
    
          <p className="field-description">Last Name</p>
          <Field
            className="contact-input"
            type="text"
            name="lastName" 
            placeholder="Last Name" />
            {touched.lastName && errors.lastName && (
              <p className="error">*{errors.lastName}</p>
            )}

          <p className="field-description">Email</p>
          <Field
            className="contact-input"
            type="email"
            name="email" 
            placeholder="Email Address" />
            {touched.email && errors.email && (
              <p className="error">*{errors.email}</p>
            )}

          <p className="field-description">Phone</p>
          <Field
            className="contact-input"
            type="tel" 
            name="phone" 
            placeholder="Phone Number" />
            {touched.phone && errors.phone && (
              <p className="error">*{errors.phone}</p>
            )}

          <p className="field-description">Issue or Inquiry</p>
          <input
            className="contact-input"
            type="text" 
            name="help" 
            placeholder="Please describe your issue or feedback." />
            {touched.help && errors.help && (
              <p className="error">*{errors.help}</p>
            )}
      </Form>
    </>
  );
};


const FormikContact = withFormik({
  mapPropsToValues({ firstName, lastName, email, phone, help }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      phone: phone || "",
      help: help || "",
    };
  },


  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .required("First name is a required field."),
    lastName: Yup.string()
      .required("Last name is a required field."),
    email: Yup.string()
      .required("Email is a required field."),
    phone: Yup.string()
      .required("Phone number is a required field."),
    password: Yup.string()
      .required("Password is a required field.")
  }),

  handleSubmit(values, {props}) {
    console.log("SUBMIT FIRE")
    console.log("VALUES", values)
  }
})(ContactForm)

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps,
)(FormikContact);