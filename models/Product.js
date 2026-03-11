const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true }, 
    price_pkr: { type: Number, required: true },
    description: { type: String },
    image_url: { type: String },
    is_subscription_eligible: { type: Boolean, default: false } 
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);