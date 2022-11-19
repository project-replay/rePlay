const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');
const { requireToken } = require('../middleware/auth');

// INDEX: Get all listings
// GET /api/listings
router.get('/', async (req, res) => {
	try {
		// Add username to listings using .populate
		const listings = await Listing.find({}).populate('username', ['username']);
		res.json(listings);
	} catch (error) {
		console.log('Something went wrong...\n' + error);
		return res.sendStatus(400);
	}
});

// SHOW: Get listing by id
// GET /api/listings/:id
router.get('/:id', async (req, res) => {
	try {
		const listing = await Listing.findById(req.params.id).populate('username', [
			'username',
		]);
		res.json(listing);
	} catch (error) {
		console.log('Something went wrong...\n' + error);
		return res.sendStatus(400);
	}
});

// CREATE: Add new listing
// POST /api/listings
// ** Only allowed for registered users
router.post('/', requireToken, async (req, res) => {
	try {
		const newListing = await Listing.create(req.body);
		if (newListing) {
			const listings = await Listing.find({});
			// Send status code 201 Created
			return res.status(201).json(listings);
		}
	} catch (error) {
		console.log('Something went wrong...\n' + error);
		res.sendStatus(400);
	}
});

// UPDATE: Update listing by id
// PUT /api/listings/:id
// ** Only allowed for registered users
router.put('/:id', requireToken, async (req, res) => {
	try {
		const updatedListing = await Listing.findByIdAndUpdate(
			req.params.id,
			req.body
		);
		if (updatedListing) {
			const listings = await Listing.find({});
			return res.json(listings);
		}
	} catch (error) {
		console.log('Something went wrong...\n' + error);
		return res.sendStatus(400);
	}
});

// DELETE: Remove listing by id
// DELETE /api/listings/:id
// ** Only allowed for registered users
router.delete('/:id', requireToken, async (req, res, next) => {
	try {
		const deletedListing = await Listing.findByIdAndDelete(req.params.id);
		if (deletedListing) {
			const listings = await Listing.find({});
			return res.json(listings);
		}
	} catch (error) {
		console.log('Something went wrong...\n' + error);
		return res.sendStatus(400);
	}
});

module.exports = router;
