import express from "express";
import cors from "cors";
import usersRouter from "./routes/users.router.js";
import propertiesRouter from "./routes/properties.router.js";
import inquiriesRouter from "./routes/inquiries.router.js";


const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", usersRouter);
app.use("/api/properties", propertiesRouter);
app.use("/api/inquiries", inquiriesRouter);

app.use((error, req, res, next) => {
  console.error(error);

  // ID de MongoDB inválido
  if (error.name === "CastError") {
    return res.status(400).json({
      status: "error",
      message: "ID inválido",
    });
  }

  // Error de validación de Mongoose
  if (error.name === "ValidationError") {
    return res.status(400).json({
      status: "error",
      message: "Datos inválidos",
      errors: error.errors,
    });
  }

  // Cualquier otro error inesperado
  res.status(500).json({
    status: "error",
    message: error.message || "Error interno del servidor",
  });
});

export default app;