import { createContext, useContext, useState, useEffect } from 'react';
import { UserProvider, useUser } from './userContext';
import { useNavigate, useLocation } from 'react-router-dom';

const RouteContext = createContext(undefined);

export const RouteProvider = ({ children, routes }) => {
  const { user } = useUser();

  const [currentRoute, setCurrentRoute] = useState(routes[0]?.path || '/');
  const location = useLocation();

  useEffect(() => {
    const matchedRoute = routes.find(route => route.path === location.pathname);
    if (matchedRoute) {
      setCurrentRoute(matchedRoute.path);
    }
  }, [location, routes]);

  const isRouteAccessible = (routePath) => {
    const route = routes.find(r => r.path === routePath);
    if (!route) return false;
    
    if (!route.roles || route.roles.length === 0) return true;
    
    return user && route.roles.includes(user.role);
  };

  const getAccessibleRoutes = () => {
    // const { user } = useUser();
    if (!user) return routes.filter(route => !route.roles || route.roles.length === 0);
    
    return routes.filter(route => 
      !route.roles || route.roles.length === 0 || route.roles.includes(user.role)
    );
  };

  const navigateToRoute = (routePath) => {
    if (isRouteAccessible(routePath)) {
      setCurrentRoute(routePath);
      return true;
    }
    return false;
  };

  return (
    <RouteContext.Provider 
      value={{ 
        routes, 
        currentRoute, 
        setCurrentRoute,
        isRouteAccessible,
        getAccessibleRoutes,
        navigateToRoute
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};

export const AppProvider = ({ children, routes }) => {
  return (
    <UserProvider>
      <RouteProviderWithRouter routes={routes}>
        {children}
      </RouteProviderWithRouter>
    </UserProvider>
  );
};

const RouteProviderWithRouter = ({ children, routes }) => {
  return (
    <RouteProvider routes={routes}>
      {children}
    </RouteProvider>
  );
};

export const useRoute = () => {
  const context = useContext(RouteContext);
  if (!context) {
    throw new Error('useRoute must be used within a RouteProvider');
  }
  return context;
};

export const useAuthenticatedRoute = () => {
  const userContext = useUser();
  const routeContext = useRoute();
  const navigate = useNavigate();

  const redirectToRoleBasedRoute = () => {
    const { user } = userContext;
    const { routes } = routeContext;
    
    if (!user) {
      navigate('/');
      return;
    }
    
    const roleRoute = routes.find(route => 
      route.roles && route.roles.includes(user.role)
    );
    
    if (roleRoute) {
      navigate(roleRoute.path);
    } else {
      navigate('/');
    }
  };

  return {
    ...userContext,
    ...routeContext,
    redirectToRoleBasedRoute
  };
};