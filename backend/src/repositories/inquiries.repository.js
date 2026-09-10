import inquiriesDao from "../dao/inquiries.dao.js";

const createInquiry = async (inquiryData) => {
  return await inquiriesDao.create(inquiryData);
};

const getInquiryById = async (id) => {
  return await inquiriesDao.findById(id);
};

const getAllInquiries = async () => {
  return await inquiriesDao.findAll();
};

const updateInquiry = async (id, inquiryData) => {
  return await inquiriesDao.updateById(id, inquiryData);
};

const deleteInquiry = async (id) => {
  return await inquiriesDao.deleteById(id);
};

export default {
  createInquiry,
  getInquiryById,
  getAllInquiries,
  updateInquiry,
  deleteInquiry,
};