import { Router } from "express";

import usersController from "../controllers/users.controller.js";

import authenticate from "../middlewares/auth.middleware.js";
import authorizeAdmin from "../middlewares/admin.middleware.js";

const router = Router();

router.post("/", usersController.createUser);
router.post("/login", usersController.loginUser);

router.get("/me", authenticate, usersController.getCurrentUser);
router.get("/", authenticate, authorizeAdmin, usersController.getAllUsers);

router.get(
  "/:id",
  authenticate,
  authorizeAdmin,
  usersController.getUserById
);

router.put(
  "/:id",
  authenticate,
  authorizeAdmin,
  usersController.updateUser
);

router.delete(
  "/:id",
  authenticate,
  authorizeAdmin,
  usersController.deleteUser
);

export default router;