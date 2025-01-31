
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  console.log(token)
  if (token) return children;
  return <Navigate to="/admin" replace />;
};

export default AdminRoute;
