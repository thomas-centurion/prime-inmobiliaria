import bcrypt from "bcrypt";
import usersRepository from "../repositories/users.repository.js";
import jwt from "jsonwebtoken";

const createUser = async (userData) => {
  const {
    username,
    password,
    name,
    phone,
  } = userData;

  const existingUser = await usersRepository.getUserByUsername(username);

  if (existingUser) {
    throw new Error("El usuario ya está registrado");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await usersRepository.createUser({
    username,
    password: hashedPassword,
    name,
    phone,
    role: "user",
  });

  const userResponse = user.toObject();

  delete userResponse.password;

  return userResponse;
};

const loginUser = async (username, password) => {
  const user = await usersRepository.getUserByUsername(username);

  if (!user) {
    throw new Error("Credenciales inválidas");
  }

  const isPasswordValid = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordValid) {
    throw new Error("Credenciales inválidas");
  }

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  const userResponse = user.toObject();

  delete userResponse.password;

  return {
    user: userResponse,
    token,
  };
};

const getCurrentUser = async (id) => {
  const user = await usersRepository.getUserById(id);

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  const userResponse = user.toObject();

  delete userResponse.password;

  return userResponse;
};

const getUserById = async (id) => {
  const user = await usersRepository.getUserById(id);

  if (!user) {
    return null;
  }

  const userResponse = user.toObject();
  delete userResponse.password;

  return userResponse;
};

const getUserByUsername = async (username) => {
  return await usersRepository.getUserByUsername(username);
};

const getAllUsers = async () => {
  const users = await usersRepository.getAllUsers();

  return users.map((user) => {
    const userResponse = user.toObject();
    delete userResponse.password;

    return userResponse;
  });
};

const updateUser = async (id, userData) => {
  return await usersRepository.updateUser(id, userData);
};

const deleteUser = async (id) => {
  return await usersRepository.deleteUser(id);
};

export default {
  createUser,
  loginUser,
  getCurrentUser,
  getUserById,
  getUserByUsername,
  getAllUsers,
  updateUser,
  deleteUser,
};