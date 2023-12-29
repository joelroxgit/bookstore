const express = require('express');
const router = express.Router();
const Book = require('../models/models');

// Create a new book
router.post('/book', async (req, res) => {
  try {
    // Validate required fields
    if (!req.body.title || !req.body.author || !req.body.publishyear) {
      return res.status(400).send({ message: 'All fields are mandatory' });
    }

    // Create a new book
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishyear: req.body.publishyear,
    };

    const book = await Book.create(newBook);
    return res.status(201).send(book); // Send the created book with status 201 (Resource Created)
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: error.message });
  }
});

// Get all books
router.get('/book', async (req, res) => {
  try {
    // Retrieve all books
    const books = await Book.find({});
    return res.status(200).send({ count: books.length, data: books });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: error.message });
  }
});

// Get a book by ID
router.get('/book/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Find a book by ID
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).send({ message: 'Book not found' });
    }

    return res.status(200).send({ data: book });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: error.message });
  }
});

// Update a book by ID
router.put('/book/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Validate required fields
    if (!req.body.title || !req.body.author || !req.body.publishyear) {
      return res.status(400).send('All fields are mandatory');
    }

    // Update the book by ID
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedBook) {
      return res.status(404).send('Book not found');
    }

    return res.status(200).send({ data: updatedBook });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: error.message });
  }
});

// Delete a book by ID
router.delete('/book/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Delete the book by ID
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).send('Book not found');
    }

    return res.status(200).send({ data: deletedBook });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
