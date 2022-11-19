const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
			minlength: 2,
		},
		lastName: {
			type: String,
			required: true,
			minlength: 2,
		},
		username: {
			type: String,
			required: true,
			unique: true,
			minlength: 2,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 5,
		},
		confirmPassword: {
			type: String,
			required: true,
			minlength: 5,
		},
		address1: {
			type: String,
			required: true,
		},
		address2: {
			type: String,
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
		zipCode: {
			type: Number,
			required: true,
		},
		isAcceptingContract: {
			type: Boolean,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('User', userSchema);
module.exports = User;
