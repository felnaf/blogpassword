import React from 'react';
import { useSelector } from 'react-redux';
import {  Outlet, useNavigate } from 'react-router-dom';

const PrivateRoute = () => {
  const navigate = useNavigate();
  const { userLoggeIn } = useSelector((state) => state.postReducer);
  return userLoggeIn ? <Outlet /> : navigate('/');
};

export default PrivateRoute;
