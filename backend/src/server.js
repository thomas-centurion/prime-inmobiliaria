import "dotenv/config";
import app from "./app.js";
import connectDB from "./config/database.config.js";
import User from "./dao/models/user.model.js";
import bcrypt from "bcrypt";

const PORT = process.env.PORT || 3000;

const createAdminUser = async () => {
  try {
    const existingAdmin = await User.findOne({
      username: "admin",
    });

    if (existingAdmin) {
      console.log("Usuario admin ya existe");
      return;
    }

    const hashedPassword = await bcrypt.hash("admin", 10);

    await User.create({
      name: "Administrador",
      username: "admin",
      password: hashedPassword,
      role: "admin",
    });

    console.log("Usuario admin creado correctamente");
  } catch (error) {
    console.error("Error al crear usuario admin:", error.message);
  }
};

const startServer = async () => {
  await connectDB();

  await createAdminUser();

  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
};

startServer();