const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    planName: { 
        type: String, 
        enum: ['Basic', 'Standard', 'Premium'], 
        required: true 
    },
    price: { type: Number, required: true },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, required: true }, // Calculated based on duration
    isActive: { type: Boolean, default: true },
    bonusDaysAdded: { type: Number, default: 0 }
}, { 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// Virtual: Calculate days remaining
subscriptionSchema.virtual('daysRemaining').get(function() {
    const today = new Date();
    const end = new Date(this.endDate);
    const diffTime = end - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays > 0 ? diffDays : 0;
});

module.exports = mongoose.model('Subscription', subscriptionSchema);