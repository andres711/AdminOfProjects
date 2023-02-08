import { useContext, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import AuthContext from "../../Context/Auth/context.js";

const RequiredAuth = () => {
  const location = useLocation()
  const authContext = useContext(AuthContext);
  const {authUser, auth} = authContext;

  useEffect(()=>{
    authUser()
  },[]);

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequiredAuth;
