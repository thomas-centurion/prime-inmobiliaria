import usersDao from "../dao/users.dao.js";

const createUser = async (userData) => {
  return await usersDao.create(userData);
};

const getUserById = async (id) => {
  return await usersDao.findById(id);
};

const getUserByUsername = async (username) => {
  return await usersDao.findByUsername(username);
};

const getAllUsers = async () => {
  return await usersDao.findAll();
};

const updateUser = async (id, userData) => {
  return await usersDao.updateById(id, userData);
};

const deleteUser = async (id) => {
  return await usersDao.deleteById(id);
};

export default {
  createUser,
  getUserById,
  getUserByUsername,
  getAllUsers,
  updateUser,
  deleteUser,
};