import React from 'react';
import { useParams } from 'react-router-dom';
import { useRouteById } from '../../../hooks/routes';

const RouteDetail = () => {
  const { id } = useParams();
  const { route } = useRouteById(id);

  return (
    <>
      <p>{route.location}</p>
      <p>{route.name}</p>
      <p>{route.rating}</p>
      <p>{route.rating}</p>
      <p>{route.notes}</p>
    </>
  );
};

export default RouteDetail;
