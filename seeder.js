const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Import your Schemas
const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');
const Subscription = require('./models/Subscription');
const HealthRecord = require('./models/HealthRecord');

const connectDB = require('./config/db');

// Load Config
dotenv.config();
connectDB();

// 1. Sample Data - Users
const users = [
    {
        name: 'Admin User',
        fatherName: 'System Admin',
        email: 'admin@hasc.com',
        password: 'password123', // In a real app, hash this!
        phone: '03000000000',
        cnic: '00000-0000000-0',
        address: 'HASC Head Office',
        city: 'Bahawalpur',
        postalCode: '63100',
        isAdmin: true,
        bankDetails: {
            bankName: 'HBL',
            cardNumber: '4242424242424242',
            expiryMonth: '12',
            expiryYear: '2028',
            cvv: '123'
        }
    },
    {
        name: 'Ali Hassan',
        fatherName: 'Muhammad Hassan',
        email: 'customer@gmail.com',
        password: 'password123',
        phone: '03211234567',
        cnic: '42101-1234567-3',
        address: 'House 42, Street 7, Sector F-10/3',
        city: 'Islamabad',
        postalCode: '44000',
        isAdmin: false,
        bankDetails: {
             bankName: 'Meezan Bank',
             cardNumber: '5555555555555555',
             expiryMonth: '09',
             expiryYear: '2026',
             cvv: '456'
        }
    }
];

// 2. Sample Data - Products (Animals)
const products = [
    {
        tagId: 'BK-402',
        name: 'White Sahiwal Bull',
        category: 'Bull',
        price_pkr: 185000,
        weight: 450,
        age: 2,
        gender: 'Male',
        image_url: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=400',
        description: 'Healthy Sahiwal bull, fully vaccinated and ready for farming.',
        status: 'In Stock',
        is_subscription_eligible: true
    },
    {
        tagId: 'BK-202',
        name: 'Beetal Goat',
        category: 'Goat',
        price_pkr: 45000,
        weight: 65,
        age: 2,
        gender: 'Male',
        image_url: 'https://images.unsplash.com/photo-1560709401-4b13ee35d944?q=80&w=400',
        description: 'High quality Beetal goat raised on organic feed.',
        status: 'In Stock',
        is_subscription_eligible: true
    },
    {
        tagId: 'BK-156',
        name: 'Kamori Goat',
        category: 'Goat',
        price_pkr: 58000,
        weight: 58,
        age: 1.5,
        gender: 'Female',
        image_url: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?q=80&w=400',
        description: 'Premium Kamori breed known for milk production.',
        status: 'In Stock',
        is_subscription_eligible: true
    },
    {
        tagId: 'CK-890',
        name: 'Cholistani Camel',
        category: 'Camel',
        price_pkr: 295000,
        weight: 520,
        age: 3,
        gender: 'Male',
        image_url: 'https://images.unsplash.com/photo-1598089901460-e74c87893a90?q=80&w=400',
        description: 'Strong desert camel, perfect for Qurbani.',
        status: 'In Stock',
        is_subscription_eligible: false
    }
];

// 3. Import Function
const importData = async () => {
    try {
        // Clear existing data
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        await Subscription.deleteMany();
        await HealthRecord.deleteMany();

        console.log('Data Destroyed...'.red ? 'Data Destroyed...'.red : 'Data Destroyed...');

        // Insert Users
        const createdUsers = await User.insertMany(users);
        const customerUser = createdUsers[1]._id; // Use 'Ali Hassan' for orders

        // Insert Products
        const createdProducts = await Product.insertMany(products);

        // Insert Sample Subscription
        await Subscription.create({
            user: customerUser,
            planName: 'Standard',
            price: 799,
            startDate: new Date(),
            endDate: new Date(new Date().setDate(new Date().getDate() + 30)), // +30 days
            isActive: true,
            bonusDaysAdded: 0
        });

        // Insert Sample Order
        await Order.create({
            user: customerUser,
            orderItems: [
                {
                    product: createdProducts[0]._id,
                    name: createdProducts[0].name,
                    image: createdProducts[0].image_url,
                    price: createdProducts[0].price_pkr,
                    quantity: 1
                }
            ],
            shippingAddress: {
                street: 'House 42, Street 7',
                city: 'Islamabad',
                postalCode: '44000'
            },
            paymentMethod: 'Bank Transfer',
            totalPrice: 185000,
            isPaid: true,
            paidAt: new Date(),
            status: 'Approved'
        });

        // Insert Health Record for the Bull
        await HealthRecord.create({
            animal: createdProducts[0]._id,
            owner: customerUser,
            date: new Date(),
            weekNumber: 1,
            currentWeight: 455, // Gained 5kg from initial 450
            weightGain: 5,
            healthStatus: 'Excellent',
            vaccinationStatus: 'Up to Date',
            feedIntake: 'Normal',
            veterinarianNotes: 'Animal is adapting well to the new feed plan.'
        });

        console.log('Data Imported Successfully!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

// 4. Destroy Data Function
const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        await Subscription.deleteMany();
        await HealthRecord.deleteMany();

        console.log('Data Destroyed!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

// Command Line Argument Handling
if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
