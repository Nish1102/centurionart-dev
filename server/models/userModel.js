const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        first: { type: String },
        middle: { type: String },
        last: { type: String }
    },
    googleId: { type: String },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    profilePicUrl: { type: String },
    phone: { type: String },
    secondaryPhone: { type: String },
    address: { type: String },
    city: { type: String },
    country: { type: String },
    zip: { type: String },
    isvendor: { type: Boolean },
    userType: { type: String, enum: ["artist", "collector"], }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
module.exports = User;
