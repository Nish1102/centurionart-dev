const mongoose = require("mongoose");

const MediumSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  { 
    timestamps: true,
    collection: "mediums"
  }
);

const Medium = mongoose.model("Medium", MediumSchema);

module.exports = Medium;
