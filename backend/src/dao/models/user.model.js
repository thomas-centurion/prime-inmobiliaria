import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },

    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 100,
    },

    phone: {
      type: String,
      trim: true,
      match: /^[0-9+\-()\s]{7,20}$/,
    },

    role: {
      type: String,
      enum: ["user", "admin", "demo"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;