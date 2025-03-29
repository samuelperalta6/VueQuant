import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // No token found, redirect to login
    return <Navigate to="/" replace />;
  }

  // Token exists, render the protected component
  return children;
};

export default ProtectedRoute;
