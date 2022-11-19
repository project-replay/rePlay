const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
const listingController = require('./controllers/listingController');
app.use('/api/listings', listingController);

const userController = require('./controllers/userController');
app.use('/api/users', userController);

// const authController = require('./controllers/authController');
// app.use('/api/auth', authController);

// Redirect any requests to the homepage to listings API
app.get('/', (req, res) => {
	res.redirect('/api/listings');
});

app.all('*', (req, res) => {
	res.redirect('/');
});

// Start server
const port = process.env.PORT || 3001;
app.listen(port, () => {
	console.log(`✅ Server started on port ${port}`);
});
