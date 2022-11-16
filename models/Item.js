const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Item model
const itemSchema = new Schema(
  {
    title: {
        type: String,
        required: true,
        minlength: 3,
    },
    description: {
        type: String,
        required: true,
        minlength: 3,
    },
    location: {
        type: String,
        required: true,
        minlength: 3,
    },
    image: {
        type: Buffer,
        required: true,
      },
    imageType: {
        type: String,
        required: true,
      },
    price: {
        type: Number,
        minlength: 3,
    },
    username: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    }
  },
  {
    timestamps: true,
  }
);

itemSchema.virtual('imagePath').get(function() {
    if (this.image != null && this.imageType != null) {
      return `data:${this.imageType};charset=utf-8;base64,${this.image.toString('base64')}`
    }
  });

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;