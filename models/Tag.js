import mongoose from "mongoose";

const tagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

const TAG = mongoose.model("TAG", tagSchema);

export default TAG;
