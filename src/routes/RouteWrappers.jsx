import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("logintoken");
  return token ? children : <Navigate to="/" replace />;
};

export const GuestRoute = ({ children }) => {
  const token = localStorage.getItem("logintoken");
  return token ? <Navigate to="/dashboard" replace /> : children;
};

export const PublicRoute = ({ children }) => {
  return children;
};
