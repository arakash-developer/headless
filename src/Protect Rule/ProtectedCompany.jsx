import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedCompany = ({ children }) => {
  const token = localStorage.getItem("com_auth_token","akash");

  // If user is not logged in, redirect to /login
  if (!token) {
    return <Navigate to="/companyregistration" replace />;
  }

  // ✅ If token exists, allow access and render the child component
  return children;
};

export default ProtectedCompany;
