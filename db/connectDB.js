const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://ahmadumar312:dbmianapass@cluster0.ozjgl.mongodb.net/miana-library?retryWrites=true&w=majority&appName=Cluster0", {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB;