const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    fatherName: { type: String }, // Ensure this exists
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    cnic: { type: String },         // Ensure this exists
    address: { type: String },      // Ensure this exists
    city: { type: String },         // Ensure this exists
    postalCode: { type: String },   // Ensure this exists
    isAdmin: { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);