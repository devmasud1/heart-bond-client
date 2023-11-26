import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../hook/provider/AuthProvider";
import LoadingSpinner from "../pages/LoadingSoinner/LoadingSpinner";

const PrivateRoutes = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};
export default PrivateRoutes;
