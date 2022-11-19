const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			minlength: 3,
		},
		category: {
			type: String,
			required: true,
		},
		listingType: {
			type: String,
			required: true,
		},
		condition: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
			minlength: 3,
		},
		images: [
			{
				type: String,
				required: true,
			},
		],
		tags: [{ type: String }],
		username: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
);

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;
