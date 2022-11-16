const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            minlength: 3,
        },
        password: {
            type: String,
            required: true,
            minlength: 5,
        },
        name: {
            type: String,
            required: true,
            minlength: 2,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        city: {
            type: String,
            required: true,
            minlength: 2,
        },
        state: {
            type: String,
            required: true,
            minlength: 2,
        },
        profilePicture: {
            type: String,
        },
    }, 
    { 
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;