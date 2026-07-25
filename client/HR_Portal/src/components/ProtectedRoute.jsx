import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const email = localStorage.getItem("email");

  if (!email) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}

export default ProtectedRoute;
