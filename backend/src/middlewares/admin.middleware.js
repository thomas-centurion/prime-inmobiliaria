const authorizeAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({
      status: "error",
      message: "Acceso restringido a administradores",
    });
  }

  next();
};

export default authorizeAdmin;