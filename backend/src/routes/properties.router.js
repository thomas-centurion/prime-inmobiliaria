import { Router } from "express";
import propertiesController from "../controllers/properties.controller.js";
import authenticate from "../middlewares/auth.middleware.js";
import authorizeAdmin from "../middlewares/admin.middleware.js";
const router = Router();

// solo admin
router.post(
  "/",
  authenticate,
  authorizeAdmin,
  propertiesController.createProperty
);

// público
router.get(
  "/",
  propertiesController.getAllProperties
);

// público
router.get(
  "/:id",
  propertiesController.getPropertyById
);

// solo admin
router.put(
  "/:id",
  authenticate,
  authorizeAdmin,
  propertiesController.updateProperty
);

// solo admin
router.delete(
  "/:id",
  authenticate,
  authorizeAdmin,
  propertiesController.deleteProperty
);

export default router;