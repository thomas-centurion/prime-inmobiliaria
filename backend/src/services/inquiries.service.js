import inquiriesRepository from "../repositories/inquiries.repository.js";
import propertiesRepository from "../repositories/properties.repository.js";

const createInquiry = async (inquiryData) => {
  if (inquiryData.property) {
    const property = await propertiesRepository.getPropertyById(
      inquiryData.property
    );

    if (!property) {
      throw new Error("La propiedad no existe");
    }
  }

  return await inquiriesRepository.createInquiry(inquiryData);
};

const getInquiryById = async (id) => {
  const inquiry = await inquiriesRepository.getInquiryById(id);

  if (!inquiry) {
    throw new Error("Consulta no encontrada");
  }

  return inquiry;
};

const getAllInquiries = async () => {
  return await inquiriesRepository.getAllInquiries();
};

const updateInquiry = async (id, inquiryData) => {
  const inquiry = await inquiriesRepository.updateInquiry(id, inquiryData);

  if (!inquiry) {
    throw new Error("Consulta no encontrada");
  }

  return inquiry;
};

const deleteInquiry = async (id) => {
  const inquiry = await inquiriesRepository.deleteInquiry(id);

  if (!inquiry) {
    throw new Error("Consulta no encontrada");
  }

  return inquiry;
};

export default {
  createInquiry,
  getInquiryById,
  getAllInquiries,
  updateInquiry,
  deleteInquiry,
};