const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
// const { createUserToken } = require('../middleware/auth');

// CREATE: Register user
// POST /api/register
router.post('/register', async (req, res) => {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 10);
		const newUser = await User.create({
			...req.body,
			password: hashedPassword,
		});
		return res.status(201).json(newUser);
	} catch (error) {
		console.log('Something went wrong...\n' + error);
		return res.sendStatus(400);
	}
});

// LOGIN: Sign in user
// POST: /api/signin
// router.post('/signin', async (req, res) => {
// 	try {
// 		const logIn = await User.findOne({ username: req.body.username })
// 			.then((user) => createUserToken(req, user))
// 			.then((token) => res.json({ token }))
// 			.catch(next);
// 	} catch (error) {
// 		console.log('Something went wrong...\n' + error);
// 		return res.sendStatus(400);
// 	}
// });

module.exports = router;
