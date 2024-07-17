import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading, approvalStatus } = useContext(AuthContext)
  const location = useLocation()
  if (loading) {
    return <div>Loading</div>
  }

  if (user) {
    return children
  }
  if (approvalStatus) {
    return children
  }
  return <Navigate to='/Login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;