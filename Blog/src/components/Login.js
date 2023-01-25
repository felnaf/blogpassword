import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginAction } from '../actions';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{ email: '', phoneNumber: '' }}
        validationSchema={Yup.object({
          email: Yup.string().required('Required'),
          phoneNumber: Yup.string().required('Required'),
        })}
        onSubmit={(values, { resetForm }) => {
          dispatch(loginAction(values, () => navigate('/')));
          resetForm();
        }}
      >
        <Form>
          <div className="mb-4">
            <div>
              <label htmlFor="email">Username</label>
            </div>

            <Field name="email" type="email" />
            <div className="text-danger">
              <ErrorMessage name="email" />
            </div>
          </div>

          <div className="mb-4">
            <div>
              <label htmlFor="phoneNumber">Password</label>
            </div>
            <Field name="phoneNumber" type="password" />
            <div className="text-danger">
              <ErrorMessage name="phoneNumber" />
            </div>
          </div>

         

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
