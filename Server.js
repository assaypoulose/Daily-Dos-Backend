const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const routes = require('./routes/DailyDosRoute');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000; // Use all caps for environment variable

// Middleware to parse JSON data
app.use(express.json());
app.use(cors())

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.log(err));

// Use the routes
app.use(routes);

// Start the server
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));


// todolist123