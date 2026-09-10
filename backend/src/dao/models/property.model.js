import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 100,
    },

    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 20,
      maxlength: 1000,
    },

    type: {
      type: String,
      required: true,
      enum: ["departamento", "casa", "ph", "oficina", "local", "terreno"],
    },

    operation: {
      type: String,
      required: true,
      enum: ["venta", "alquiler"],
    },

    featured: {
      type: Boolean,
      default: false,
    },

    price: {
      type: Number,
      required: true,
      min: 1,
    },

    location: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    address: {
      type: String,
      required: true,
    },

    rooms: {
      type: Number,
      min: 0,
      default: 0,
    },

    bedrooms: {
      type: Number,
      min: 0,
      default: 0,
    },

    bathrooms: {
      type: Number,
      min: 0,
      default: 0,
    },

    area: {
      type: Number,
      required: true,
      min: 1,
    },

    images: {
      type: [String],
      required: true,
      validate: {
        validator: (images) => images.length > 0,
        message: "La propiedad debe tener al menos una imagen",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Property = mongoose.model("Property", propertySchema);

export default Property;