import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postContactData } from '../actions';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactUs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="container">
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '' }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}
        onSubmit={(values, { resetForm }) => {
          dispatch(postContactData(values));
          navigate('/');
          resetForm();
        }}
      >
        <Form>
          <div className="mb-4">
            <div>
              <label htmlFor="firstName">First Name</label>
            </div>
            <Field name="firstName" type="text" />
            <div className="text-danger">
              <ErrorMessage name="firstName" />
            </div>
          </div>

          <div className="mb-4">
            <div>
              <label htmlFor="lastName">Last Name</label>
            </div>
            <Field name="lastName" type="text" />
            <div>
              <ErrorMessage name="lastName" />
            </div>
          </div>

          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactUs;
