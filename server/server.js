const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const Customer = require('./models/customer');
const dotenv = require('dotenv');
const Vendor = require('./models/vendor');
const bcrypt = require('bcrypt'); // For password hashing

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT;

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

// Endpoint to handle vendor details
app.post('/vendor-details', async (req, res) => {
  try{
    const formData = req.body;
    console.log(formData);
    const newVendor = await Vendor.create({
      willingToSell: formData.willingToSell,
      bankDetails: formData.vendorBankDetails,
      yearOfRegistration: formData.yearOfRegistration,
      vendorType: formData.vendorType,
      subCategory: formData.subCategory,
    })
    res.status(201).json({message : 'Vendor Details stored successfully'})
  }catch(e){
    console.log("An error occured in the server side : ",e);
  }
});

// Endpoint to handle customer details
app.post('/customer-details', async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData);
    const hashedPassword = await bcrypt.hash(formData.password, 10); // Hash the password before saving
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
      password: hashedPassword, // Save the hashed password
    });
    res.status(201).json({ message: 'Customer details saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while saving customer details' });
  }
});

// Endpoint for login
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const customer = await Customer.findOne({ userId: username });
    if (!customer) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, customer.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while logging in' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

