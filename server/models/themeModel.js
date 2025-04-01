const mongoose = require("mongoose");

const themeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    id: {
        type: String,
        required: true,
        unique: true,
        uppercase: true, 
        trim: true,
    },
});

const Style = mongoose.model("Theme", themeSchema);

module.exports = Style;