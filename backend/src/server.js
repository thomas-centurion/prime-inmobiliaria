import "dotenv/config";
import app from "./app.js";
import connectDB from "./config/database.config.js";
import User from "./dao/models/user.model.js";
import bcrypt from "bcrypt";

const PORT = process.env.PORT || 3000;

const createAdminUser = async () => {
  try {
    const existingAdmin = await User.findOne({
      username: process.env.DEMO_USERNAME,
    });

    if (existingAdmin) {
      if (existingAdmin.role !== "demo") {
        existingAdmin.role = "demo";
        await existingAdmin.save();
        }
        
      return;
    }

    const hashedPassword = await bcrypt.hash(
      process.env.DEMO_PASSWORD,
      10
    );

    await User.create({
      name: "Administrador Demo",
      username: process.env.DEMO_USERNAME,
      password: hashedPassword,
      role: "demo",
    });

    console.log("Usuario demo creado correctamente");
  } catch (error) {
    console.error("Error al crear usuario demo:", error.message);
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