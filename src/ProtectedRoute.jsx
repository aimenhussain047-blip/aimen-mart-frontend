import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // 1. Get raw data from local storage
  const userData = localStorage.getItem('aimenUser');

  // 2. If no data exists, redirect to login immediately
  if (!userData) {
    return <Navigate to="/login" />;
  }

  try {
    // 3. Parse data safely
    const user = JSON.parse(userData);

    // 4. Check if user is an Admin (strictly checking for true)
    if (!user || user.isAdmin !== true) {
      alert("Access Denied: You do not have administrator privileges.");
      return <Navigate to="/" />;
    }

    // 5. If everything is fine, show the Admin Page
    return children;
    
  } catch (error) {
    // If JSON is corrupted, clear it and go to login
    console.error("Auth Error:", error);
    localStorage.removeItem('aimenUser');
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;