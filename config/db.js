const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
    if (isConnected) {
        return;
    }

    if (!process.env.MONGO_URI) {
        console.warn("⚠️ MONGO_URI environment variable is missing.");
        return;
    }

    try {
        console.log("⏳ Connecting to Cloud MongoDB Atlas...");
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
        });
        isConnected = conn.connections[0].readyState;
        console.log(`✅ MongoDB Atlas Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Connection Error: ${error.message}`);
        // Do NOT call process.exit(1) to avoid crashing Vercel Serverless Functions
    }
};

module.exports = connectDB;