import { Navigate } from 'react-router-dom';
import { useUser } from "../contexts/userContext";
import { useState, useEffect } from 'react';

export const AuthGuard = ({ children }) => {
  // State to track if we're checking authentication
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    // First check if user exists in context
    if (user) {
      setIsAuthenticated(true);
      setIsChecking(false);
      return;
    }

    // If not in context, check localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
      }
    }
    
    setIsChecking(false);
  }, [user]);

  // Show nothing while checking to prevent flash of redirect
  if (isChecking) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};

export const RoleGuard = ({ children, roles }) => {
  // State to track if we're checking roles
  const [isChecking, setIsChecking] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    const checkAccess = () => {
      // First check if user exists in context
      if (user) {
        // Check if user role is included in the required roles
        if (roles.includes(user.role)) {
          setHasAccess(true);
        }
        setIsChecking(false);
        return;
      }

      // If not in context, check localStorage
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);  
          // Check if user role is included in the required roles
          if (roles.includes(parsedUser.role)) {
            setHasAccess(true);
          }
        } catch (error) {
          console.error("Error parsing user from localStorage:", error);
        }
      }
      
      setIsChecking(false);
    };

    checkAccess();
  }, [user, roles]);

  // Show nothing while checking to prevent flash of redirect
  if (isChecking) {
    return null;
  }

  if (!hasAccess) {
    console.log("Access denied, redirecting to unauthorized");
    return <Navigate to="/unauthorized" />;
  }

  console.log("Access granted");
  return children;
};