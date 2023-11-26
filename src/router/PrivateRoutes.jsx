import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../hook/provider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <p>loading</p>;
  }

  if (user) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace />;
};
export default PrivateRoutes;
