import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Project = () => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <Navigate to="/home" />;
  } else {
    return <Outlet />;
  }
};

export default Project;
