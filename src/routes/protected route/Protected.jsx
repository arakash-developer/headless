import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const token = localStorage.getItem("logintoken", "akash@123");

  // If user is not logged in, redirect to /login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // ✅ If token exists, allow access and render the child component
  return children;
};

export default Protected;
