const mongoose = require("mongoose");

const ArtWorkSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    medium: { type: String },
    size: { type: String },
    price: { type: Number },
    artUrls: [{ type: String }],
    artist: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    available: { type: Boolean, default: true },
    availableCount: { type: Number, min: 0 },
    isFramed: { type: Boolean, default: true },
    readyToHang: { type: Boolean, default: true },
    stories: [{ type: String }],
    saleStatus: { type: String, enum: ["available", "not-available", "sold"], }

}, { timestamps: true });

module.exports = mongoose.model("ArtWork", ArtWorkSchema);