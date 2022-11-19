const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const { createUserToken, requireToken } = require('../middleware/auth');

// INDEX: Get all users
// GET /api/users
router.get('/', async (req, res) => {
	try {
		const users = await User.find({});
		res.json(users);
	} catch (error) {
		console.log('Something went wrong...\n' + error);
		return res.sendStatus(400);
	}
});

// SHOW: Get user by id
// GET /api/users/:id
router.get('/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id).populate('username', [
			'username',
		]);
		res.json(user);
	} catch (error) {
		console.log('Something went wrong...\n' + error);
		return res.sendStatus(400);
	}
});

// CREATE: Register user
// POST /api/users/register
router.post('/register', async (req, res) => {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 10);
		const newUser = await User.create({
			...req.body,
			password: hashedPassword,
			confirmPassword: hashedPassword,
		});
		return res.status(201).json(newUser);
	} catch (error) {
		console.log('Something went wrong...\n' + error);
		return res.sendStatus(400);
	}
});

// Sign in user
// POST: /api/users/login
router.post('/login', async (req, res) => {
	try {
		const returningUser = await User.findOne({ username: req.body.username });
		const token = await createUserToken(req, returningUser);
		return await res.json(token);
	} catch (error) {
		console.log('Something went wrong...\n' + error);
		return res.sendStatus(400);
	}
});

// UPDATE: Update user by id
// PUT /api/users/:id
router.put('/:id', requireToken, async (req, res) => {
	try {
		const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);
		if (updatedUser) {
			const users = await User.find({});
			return res.json(users);
		}
	} catch (error) {
		console.log('Something went wrong...\n' + error);
		return res.sendStatus(400);
	}
});

// DELETE: Remove user by id
// DELETE /api/users/:id
router.delete('/:id', requireToken, async (req, res, next) => {
	try {
		const deletedUser = await User.findByIdAndDelete(req.params.id);
		if (deletedUser) {
			const users = await User.find({});
			return res.json(users);
		}
	} catch (error) {
		console.log('Something went wrong...\n' + error);
		return res.sendStatus(400);
	}
});

module.exports = router;
