require('dotenv').config();
const mongoose = require('mongoose');

const db = mongoose.connection;

mongoose.connect(process.env.MONGODB_URI);

db.on('disconnected', () => console.log('MongoDB disconnected'));
db.on('connected', () => console.log('✅ MongoDB successfully connected'));

module.exports = mongoose;
