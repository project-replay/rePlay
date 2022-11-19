require('dotenv').config({ path: '.env' });
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
const listingController = require('./controllers/listingController');
app.use('/api/listings', listingController);

const userController = require('./controllers/userController');
app.use('/api/users', userController);

app.all('*', (req, res) => {
	res.redirect('/api/listings');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);
console.log(process.env.MONGO_URI)
const db = mongoose.connection;

db.on('error', (err) => console.log(err.message + '- Is MongoDB not running?'));
db.on('disconnected', () => console.log('MongoDB disconnected'));
db.on('open', () => {
	console.log('✅ MongoDB connection made!');
});

// Start server
const port = process.env.PORT || 3001;
app.listen(port, () => {
	console.log(`✅ Server started on Port ${port}`);
});
