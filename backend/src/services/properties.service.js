import propertiesRepository from "../repositories/properties.repository.js";

const createProperty = async (propertyData) => {
  return await propertiesRepository.createProperty(propertyData);
};

const getPropertyById = async (id) => {
  const property = await propertiesRepository.getPropertyById(id);

  if (!property) {
    throw new Error("Propiedad no encontrada");
  }

  return property;
};

const getAllProperties = async (query) => {
  const { type, operation, location, maxPrice, featured } = query;

  const filters = {};

  if (type) {
    filters.type = type;
  }

  if (operation) {
    filters.operation = operation;
  }

  if (location) {
    filters.location = {
      $regex: location,
      $options: "i",
    };
  }

  if (maxPrice) {
    filters.price = {
      $lte: Number(maxPrice),
    };
  }

  if (featured) {
    filters.featured = featured === "true";
  }

  return await propertiesRepository.getAllProperties(filters);
};

const updateProperty = async (id, propertyData) => {
  const property = await propertiesRepository.updateProperty(id, propertyData);

  if (!property) {
    throw new Error("Propiedad no encontrada");
  }

  return property;
};

const deleteProperty = async (id) => {
  const property = await propertiesRepository.deleteProperty(id);

  if (!property) {
    throw new Error("Propiedad no encontrada");
  }

  return property;
};

export default {
  createProperty,
  getPropertyById,
  getAllProperties,
  updateProperty,
  deleteProperty,
};