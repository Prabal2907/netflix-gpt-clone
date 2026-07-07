import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Browse from "../components/Browse";


const ProtectedRoute = () => {
  const userData = useSelector((state) => state.user.userData);
  return userData ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;

export const PublicOnlyRoute = () => {
  const userData = useSelector((state) => state.user.userData);
  return userData ? <Navigate to="/browse" replace /> : <Outlet />;
}; 