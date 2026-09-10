import Inquiry from "./models/inquiry.model.js";

const create = async (inquiryData) => {
  return await Inquiry.create(inquiryData);
};

const findById = async (id) => {
  return await Inquiry.findById(id).populate("property");
};

const findAll = async () => {
  return await Inquiry.find().populate("property");
};

const updateById = async (id, inquiryData) => {
  return await Inquiry.findByIdAndUpdate(id, inquiryData, {
    new: true,
    runValidators: true,
  }).populate("property");
};

const deleteById = async (id) => {
  return await Inquiry.findByIdAndDelete(id);
};

export default {
  create,
  findById,
  findAll,
  updateById,
  deleteById,
};