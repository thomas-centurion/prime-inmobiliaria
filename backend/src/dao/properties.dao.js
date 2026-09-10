import Property from "./models/property.model.js";

const create = async (propertyData) => {
  return await Property.create(propertyData);
};

const findById = async (id) => {
  return await Property.findById(id);
};

const findAll = async (filters = {}) => {
  return await Property.find(filters);
};

const updateById = async (id, propertyData) => {
  return await Property.findByIdAndUpdate(id, propertyData, {
    new: true,
    runValidators: true,
  });
};

const deleteById = async (id) => {
  return await Property.findByIdAndDelete(id);
};

export default {
  create,
  findById,
  findAll,
  updateById,
  deleteById,
};