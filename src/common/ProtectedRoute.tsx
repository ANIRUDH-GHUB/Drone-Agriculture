import { Navigate } from "react-router-dom";

const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const token = localStorage.getItem("token");
  if (token) {
    return children;
  }
  return <Navigate to="/login" replace />;
};
export default ProtectedRoute;
