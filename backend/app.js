require('dotenv').config();
const express = require('express');
const connectDb = require('./database/db');
const router = require('./routes/routes');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the CORS module

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Use CORS middleware to handle cross-origin requests

app.use(express.json());
app.use('/', router);

const start = async () => {
  try {
    await connectDb(process.env.CONNECTION_URL);
    console.log('App connected to the database');
    
    app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit the application if there's a database connection error
  }
};

start();
