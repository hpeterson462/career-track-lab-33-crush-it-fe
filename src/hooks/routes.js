import { useEffect, useState } from 'react';
import { getRouteById, getRoutes } from '../services/routesApi';

export const useRoutes = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    getRoutes()
      .then(fetchedRoutes => setRoutes(fetchedRoutes));
  }, []);

  return {
    routes
  };
};

export const useRouteById = id => {
  const [route, setRoute] = useState(null);

  useEffect(() => {
    getRouteById(id)
      .then(fetchedRoute => setRoute(fetchedRoute))
  }, [id]);

  return {
    route
  };
};
