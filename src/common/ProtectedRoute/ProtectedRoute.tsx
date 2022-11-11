import { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute: FC<{ children: ReactElement }> = ({ children }) => {
  const isLoggedin = true;
  if (isLoggedin) {
    return children;
  }

  return <Navigate to="/login" replace />;
};
export default ProtectedRoute;
