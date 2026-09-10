import { Router } from "express";

import inquiriesController from "../controllers/inquiries.controller.js";

import authenticate from "../middlewares/auth.middleware.js";
import authorizeAdmin from "../middlewares/admin.middleware.js";
import authorizeReadOnly from "../middlewares/demo.middleware.js";

const router = Router();

// Público: cualquier visitante puede enviar una consulta
router.post("/", inquiriesController.createInquiry);

// Lectura: admin y demo
router.get(
  "/",
  authenticate,
  authorizeReadOnly,
  inquiriesController.getAllInquiries
);

router.get(
  "/:id",
  authenticate,
  authorizeReadOnly,
  inquiriesController.getInquiryById
);

// Modificación: solamente admin real
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