import propertiesDao from "../dao/properties.dao.js";

const createProperty = async (propertyData) => {
  return await propertiesDao.create(propertyData);
};

const getPropertyById = async (id) => {
  return await propertiesDao.findById(id);
};

const getAllProperties = async (filters = {}) => {
  return await propertiesDao.findAll(filters);
};

const updateProperty = async (id, propertyData) => {
  return await propertiesDao.updateById(id, propertyData);
};

const deleteProperty = async (id) => {
  return await propertiesDao.deleteById(id);
};

export default {
  createProperty,
  getPropertyById,
  getAllProperties,
  updateProperty,
  deleteProperty,
};