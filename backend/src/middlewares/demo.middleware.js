const authorizeReadOnly = (req, res, next) => {
  if (
    !req.user ||
    (req.user.role !== "admin" && req.user.role !== "demo")
  ) {
    return res.status(403).json({
      status: "error",
      message: "No tenés permisos para acceder a este recurso.",
    });
  }

  next();
};

export default authorizeReadOnly;