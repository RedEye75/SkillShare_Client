import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      // <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-rose-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-rose-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-rose-800"></div>
      </div>
    );
  }
  if (!user) {
    return (
      <Navigate to="/signIn" state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
