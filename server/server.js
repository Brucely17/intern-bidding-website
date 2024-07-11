const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const Customer = require('./models/customer');
const Vendor = require('./models/vendor');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();
const app = express();
const PORT = process.env.PORT;

// MongoDB connection string
const uri = process.env.MONGODB_URI;
console.log()
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
