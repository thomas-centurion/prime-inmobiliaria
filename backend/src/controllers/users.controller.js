import usersService from "../services/users.service.js";

const createUser = async (req, res, next) => {
  try {
    const user = await usersService.createUser(req.body);

    res.status(201).json({
      status: "success",
      payload: user,
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const result = await usersService.loginUser(username, password);

    res.json({
      status: "success",
      payload: result,
    });
  } catch (error) {
    next(error);
  }
};


const getCurrentUser = async (req, res, next) => {
  try {
    const user = await usersService.getCurrentUser(req.user.id);

    res.json({
      status: "success",
      payload: user,
    });
  } catch (error) {
    next(error);
  }
};


const getUserById = async (req, res, next) => {
  try {
    const user = await usersService.getUserById(req.params.id);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "Usuario no encontrado",
      });
    }

    res.json({
      status: "success",
      payload: user,
    });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await usersService.getAllUsers();

    res.json({
      status: "success",
      payload: users,
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const user = await usersService.updateUser(req.params.id, req.body);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "Usuario no encontrado",
      });
    }

    res.json({
      status: "success",
      payload: user,
    });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const user = await usersService.deleteUser(req.params.id);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "Usuario no encontrado",
      });
    }

    res.json({
      status: "success",
      message: "Usuario eliminado correctamente",
      payload: user,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  createUser,
  loginUser,
  getCurrentUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
};