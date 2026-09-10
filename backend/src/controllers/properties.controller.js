import propertiesService from "../services/properties.service.js";

const createProperty = async (req, res, next) => {
  try {
    const property = await propertiesService.createProperty(req.body);

    res.status(201).json({
      status: "success",
      payload: property,
    });
  } catch (error) {
    next(error);
  }
};

const getPropertyById = async (req, res, next) => {
  try {
    const property = await propertiesService.getPropertyById(req.params.id);

    res.json({
      status: "success",
      payload: property,
    });
  } catch (error) {
    next(error);
  }
};

const getAllProperties = async (req, res, next) => {
  try {
    const properties = await propertiesService.getAllProperties(req.query);

    res.json({
      status: "success",
      payload: properties,
    });
  } catch (error) {
    next(error);
  }
};

const updateProperty = async (req, res, next) => {
  try {
    const property = await propertiesService.updateProperty(
      req.params.id,
      req.body
    );

    res.json({
      status: "success",
      payload: property,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProperty = async (req, res, next) => {
  try {
    const property = await propertiesService.deleteProperty(req.params.id);

    res.json({
      status: "success",
      message: "Propiedad eliminada correctamente",
      payload: property,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  createProperty,
  getPropertyById,
  getAllProperties,
  updateProperty,
  deleteProperty,
};