import React from 'react';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
 const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component /> ;
};

export default PrivateRoute;
