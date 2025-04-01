const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      uppercase: true, 
      trim: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Middleware to set 'id' automatically based on 'name' in uppercase
categorySchema.pre("save", function (next) {
  if (this.name) {
    this.id = this.name.toUpperCase();
  }
  next();
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
