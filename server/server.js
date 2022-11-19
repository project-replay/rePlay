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

// Redirect any requests to the homepage to listings API
app.get('/', (req, res) => {
	res.redirect('/api/listings');
});

app.all('*', (req, res) => {
	res.redirect('/');
});

// Connect to Mongo
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

mongoose.connect(mongoURI);

db.on('error', (err) => console.log(err.message + '- Is MongoDB not running?'));
db.on('disconnected', () => console.log('MongoDB disconnected'));
db.on('open', () => {
	console.log('✅ Mongo connection made!');
});

// Start server
const port = process.env.PORT || 3001;
app.listen(port, () => {
	console.log(`✅ Server started on port ${port}`);
});
