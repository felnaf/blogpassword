import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changePassword } from '../actions';

const ChangePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{
          oldPassword: '',
          newPassword: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object({
          oldPassword: Yup.string().required('Required'),
          newPassword: Yup.string().required('Required'),
          confirmPassword: Yup.string().required('Required'),
        })}
        onSubmit={(values, { resetForm }) => {
          dispatch(changePassword(values, () => navigate('/')));
          resetForm();
        }}
      >
        <Form>
          <label htmlFor="oldPassword">Old Password</label>
          <Field name="oldPassword" type="text" />
          <ErrorMessage name="oldPassword" />

          <label htmlFor="newPassword">New Password</label>
          <Field name="newPassword" type="text" />
          <ErrorMessage name="newPassword" />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field name="confirmPassword" type="text" />
          <ErrorMessage name="confirmPassword" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ChangePassword;
