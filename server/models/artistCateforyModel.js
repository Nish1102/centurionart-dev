import mongoose from "mongoose";

const artistCategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const ArtistCategory = mongoose.model("ArtistCategory", artistCategorySchema);

export default ArtistCategory;
