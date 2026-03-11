const mongoose = require('mongoose');

const healthRecordSchema = new mongoose.Schema({
    animal: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product', 
        required: true 
    },
    owner: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    }, 
    date: { type: Date, default: Date.now },
    weekNumber: { type: Number }, // e.g., 1, 2, 3...
    currentWeight: { type: Number, required: true },
    weightGain: { type: Number }, // Difference from last week
    healthStatus: { 
        type: String, 
        enum: ['Excellent', 'Good', 'Fair', 'Poor'], 
        default: 'Excellent' 
    },
    vaccinationStatus: { type: String, default: 'Up to Date' },
    feedIntake: { type: String, default: 'Normal' },
    veterinarianNotes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('HealthRecord', healthRecordSchema);