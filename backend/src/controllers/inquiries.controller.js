import inquiriesService from "../services/inquiries.service.js";

const createInquiry = async (req, res, next) => {
  try {
    const inquiry = await inquiriesService.createInquiry(req.body);

    res.status(201).json({
      status: "success",
      payload: inquiry,
    });
  } catch (error) {
    next(error);
  }
};

const getInquiryById = async (req, res, next) => {
  try {
    const inquiry = await inquiriesService.getInquiryById(req.params.id);

    res.json({
      status: "success",
      payload: inquiry,
    });
  } catch (error) {
    next(error);
  }
};

const getAllInquiries = async (req, res, next) => {
  try {
    const inquiries = await inquiriesService.getAllInquiries();

    res.json({
      status: "success",
      payload: inquiries,
    });
  } catch (error) {
    next(error);
  }
};

const updateInquiry = async (req, res, next) => {
  try {
    const inquiry = await inquiriesService.updateInquiry(
      req.params.id,
      req.body
    );

    res.json({
      status: "success",
      payload: inquiry,
    });
  } catch (error) {
    next(error);
  }
};

const deleteInquiry = async (req, res, next) => {
  try {
    const inquiry = await inquiriesService.deleteInquiry(req.params.id);

    res.json({
      status: "success",
      message: "Consulta eliminada correctamente",
      payload: inquiry,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  createInquiry,
  getInquiryById,
  getAllInquiries,
  updateInquiry,
  deleteInquiry,
};