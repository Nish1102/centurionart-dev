const mongoose = require("mongoose");

const ArtWorkSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, 
        // required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        // required: true,
    },
    medium: {
        type: String,
        // required: true,
    },
    size: {
        type: String,
        // required: true,
    },
    price: {
        type: Number,
        // required: true,
    },
    artUrls: [{
        type: String,
    }],
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // required: true,
    },
    available: {
        type: Boolean,
        default: true,
    },
    availableCount: {
        type: Number,
        // required: true,
        min: 0
    },
    stories: [{ type: String }]

}, { timestamps: true });

module.exports = mongoose.model("ArtWork", ArtWorkSchema);