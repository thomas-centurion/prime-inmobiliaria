const API_URL = import.meta.env.VITE_API_URL;

export const getProperties = async (params = {}) => {
  const queryParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      queryParams.append(key, value);
    }
  });

  const response = await fetch(
    `${API_URL}/properties?${queryParams.toString()}`
  );

  if (!response.ok) {
    throw new Error("Error al obtener las propiedades");
  }

  const data = await response.json();

  return data.payload;
};

export const getPropertyById = async (id) => {
  const response = await fetch(
    `${API_URL}/properties/${id}`
  );

  if (!response.ok) {
    throw new Error("Error al obtener la propiedad");
  }

  const data = await response.json();

  return data.payload;
};