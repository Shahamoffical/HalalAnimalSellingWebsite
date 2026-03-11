const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    orderItems: [{
        product: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Product', 
            required: true 
        },
        name: String,
        image: String,
        price: Number, // Price at time of purchase
        quantity: { type: Number, default: 1 }
    }],
    shippingAddress: {
        street: String,
        city: String,
        postalCode: String
    },
    paymentMethod: { type: String, required: true }, // 'Credit Card', 'Bank Transfer', 'Cash'
    totalPrice: { type: Number, required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    status: { 
        type: String, 
        enum: ['Pending', 'Approved', 'Processing', 'Delivered'], 
        default: 'Pending' 
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);