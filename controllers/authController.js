const asyncHandler = require('express-async-handler');
const User = require('../models/User');

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    // 1. Destructure ALL the new fields from the frontend request
    const { 
        name, 
        fatherName, 
        email, 
        password, 
        phone, 
        cnic, 
        address, 
        city, 
        postalCode 
    } = req.body;

    // 2. Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    // 3. Create the user with ALL fields
    const user = await User.create({
        name,
        fatherName,
        email,
        password, // Note: Use bcrypt to hash this in a real production app
        phone,
        cnic,
        address,
        city,
        postalCode
        // Note: Bank details are currently not being sent by your frontend fetch call. 
        // We can add those later if needed.
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (user.password === password)) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            // You can return more data here if needed for the dashboard
            phone: user.phone,
            address: user.address
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

module.exports = {
    registerUser,
    authUser,
};