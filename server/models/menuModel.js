const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  title: { type: String, required: true },
  icon: { type: String },
  parent_id: { type: mongoose.Schema.Types.ObjectId, ref: "Menu", default: null },
  filters: { type: [Object], default: null }  
});

const Menu = mongoose.model("Menu", MenuSchema);

module.exports = Menu;
