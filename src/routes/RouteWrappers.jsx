import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("logintoken");
  return token ? children : <Navigate to="/" replace />;
};
export const AdministratorRoute = ({ children }) => {
  const token = localStorage.getItem("administrator");
  return token === "akash@123" ? children : <Navigate to="/" replace />;
};

export const GuestRoute = ({ children }) => {
  const administrator = localStorage.getItem("administrator");
  const token = localStorage.getItem("logintoken");
  if (administrator === "akash@123") {
    return <Navigate to="/administrator" replace />;
  }
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

export const PublicRoute = ({ children }) => {
  return children;
};
