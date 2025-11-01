const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
    if (!uri) {
        console.error('MONGODB_URI is not defined');
        process.exit(1);
    }

    try {
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};

module.exports = connectDB;