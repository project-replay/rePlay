const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

// ExtractJwt extracts the token from each client request
const { Strategy, ExtractJwt } = require('passport-jwt');

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: secret,
};

const User = require('../models/User');

// jwt_payload data that is passed will include the user's id
const strategy = new Strategy(opts, function (jwt_payload, done) {
	// Find user in the DB
	User.findById(jwt_payload.id)
		// Add the user to the request object as request.user
		.then((user) => done(null, user))
		.catch((error) => done(error));
});

passport.use(strategy);

// Initialize the passport middleware based on the above configuration
passport.initialize();

const requireToken = passport.authenticate('jwt', { session: false });

// Create a token to send back to the user
const createUserToken = (req, user) => {
	if (
		!user ||
		!req.body.password ||
		!bcrypt.compareSync(req.body.password, user.password)
	) {
		const error = new Error('The provided username or password is incorrect');
		error.statusCode = 422;
		throw error;
	}

	// Token expires in 2 days
	return jwt.sign({ id: user._id }, secret, { expiresIn: 172800 });
};

module.exports = {
	requireToken,
	createUserToken,
};
