

import { Navigate, useLocation } from "react-router-dom";

import LoadingSpinner from "../pages/LoadingSoinner/LoadingSpinner";
import useAuth from "../hook/useAuth";
import useAdmin from "../hook/useAdmin";

const AdminRoutes = ({ children }) => {
  const { loading, user } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <LoadingSpinner />;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};
export default AdminRoutes;
