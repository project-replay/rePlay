require('dotenv').config();

const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('✅ MongoDB successfully connected'))
	.catch((error) => console.log(error));

db.on('disconnected', () => console.log('MongoDB disconnected'));

module.exports = mongoose;
