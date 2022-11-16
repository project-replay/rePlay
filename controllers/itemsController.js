const Item = require('../models/Item')
const express = require('express');
const router = express.Router();
// For filepond uploading images which type we are going to take from the server
const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']

// INDEX: Get all items
// GET /api/items
router.get('/', async (req, res) => {
    try {
        // Add username to items using .populate
        const items = await Item.find({}).populate("username", ["username"]);
        res.json(items);
    } catch (err) {
        req.flash('error', 'Our system is overloaded. Please try again. If the issue persists, log out and log back in.');
        res.redirect('/users/home');
    }
})

// SHOW: Get item by id
// GET /api/items/:id
router.get('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id).populate("username", ["username"]);
        res.json(item);
    } catch (err) {
        req.flash('error', 'Our system is overloaded. Please try again. If the issue persists, log out and log back in.'); res.redirect('/instruments')
        res.redirect('/items')
    }
})

module.exports = router;