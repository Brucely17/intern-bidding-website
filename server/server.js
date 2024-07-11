const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const Customer = require('./models/customer');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection string
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Enable CORS with specific origin and credentials
app.use(cors({
  origin: 'http://localhost:5173', // your frontend origin
  credentials: true // allow credentials (cookies, authorization headers, etc.)
}));

app.use(express.json());

// Endpoint to handle customer details
app.post('/customer-details', async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData);
    // res.json('sss')
    const newCustomer = await Customer.create({
      name: formData.customerName,
      address: formData.customerAddress,
      gstNo: formData.customerGstNo,
      companyType: formData.companyType,
      companyRegistrationNo: formData.companyRegNo,
      authorizedPersonName: formData.authorizedPersonName,
      mobileNo: formData.mobileNo,
      alternateContactNo: formData.alternateContactNo,
      email: formData.mailId,
      userId: formData.userId,
      password: formData.password,
    })
    res.status(201).json({ message: 'Customer details saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while saving customer details' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
