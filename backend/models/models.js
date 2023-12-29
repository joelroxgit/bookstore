const mongoose = require('mongoose');

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishyear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // Corrected option to enable timestamps
  }
);

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
