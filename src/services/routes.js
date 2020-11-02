export const getRoutes = async () => {
  const res = await fetch(`/api/v1/routes`);
  const json = await res.json();

  if (!res.ok) throw 'Unable to fetch';

  return json.results.map(route => ({
    id: route.id,
    usersId: route.usersId,
    location: route.location
  }));
};

export const getRouteById = async (id) => {
  const res = await fetch(`/api/v1/routes/${id}`)
  const json = await res.json();

  if (!res.ok) throw 'Unable to fetch';

  return {
    id: json.id,
    usersId: json.usersId,
    location: json.location,
    name: json.name,
    rating: json.rating,
    notes: json.notes
  };
};
