import User from "./models/user.model.js";

const create = async (userData) => {
  return await User.create(userData);
};

const findById = async (id) => {
  return await User.findById(id);
};

const findByUsername = async (username) => {
  return await User.findOne({ username });
};

const findAll = async () => {
  return await User.find();
};

const updateById = async (id, userData) => {
  return await User.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true,
  });
};

const deleteById = async (id) => {
  return await User.findByIdAndDelete(id);
};

export default {
  create,
  findById,
  findByUsername,
  findAll,
  updateById,
  deleteById,
};