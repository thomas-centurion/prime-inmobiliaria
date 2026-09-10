import { Router } from "express";

import inquiriesController from "../controllers/inquiries.controller.js";

import authenticate from "../middlewares/auth.middleware.js";
import authorizeAdmin from "../middlewares/admin.middleware.js";

const router = Router();

// Público: cualquier visitante puede enviar una consulta
router.post("/", inquiriesController.createInquiry);

// Administrador
router.get(
  "/",
  authenticate,
  authorizeAdmin,
  inquiriesController.getAllInquiries
);

router.get(
  "/:id",
  authenticate,
  authorizeAdmin,
  inquiriesController.getInquiryById
);

router.put(
  "/:id",
  authenticate,
  authorizeAdmin,
  inquiriesController.updateInquiry
);

router.delete(
  "/:id",
  authenticate,
  authorizeAdmin,
  inquiriesController.deleteInquiry
);

export default router;