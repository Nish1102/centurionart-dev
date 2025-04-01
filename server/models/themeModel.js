const mongoose = require("mongoose");

const themeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }
});

const Style = mongoose.model("Theme", themeSchema);

module.exports = Style;