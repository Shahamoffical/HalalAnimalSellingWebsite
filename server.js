const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

const app = express();

// Middleware to ensure DB connection on serverless calls
app.use(async (req, res, next) => {
    await connectDB();
    next();
});

// Middleware
app.use(cors()); 
app.use(express.json()); 

// Serve static files (HTML, CSS, JS, Images) from the root directory
app.use(express.static(path.join(__dirname)));

// API Routes
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

const fs = require('fs');

// Serve index.html as the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Dynamic route for HTML pages (case-insensitive & extension-agnostic)
app.get('/:page', (req, res, next) => {
    if (req.params.page.startsWith('api')) return next();

    let pageName = req.params.page;
    if (!pageName.endsWith('.html')) {
        pageName += '.html';
    }

    try {
        const files = fs.readdirSync(__dirname);
        const match = files.find(f => f.toLowerCase() === pageName.toLowerCase());
        if (match) {
            return res.sendFile(path.join(__dirname, match));
        }
    } catch (err) {
        console.error('File route error:', err);
    }
    next();
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production' && require.main === module) {
    app.listen(PORT, () => {
        console.log(`HASC Server running on port ${PORT}`);
    });
}

module.exports = app;