const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const Customer = require('./models/customer');
const dotenv = require('dotenv');
const Vendor = require('./models/vendor');
const bcrypt = require('bcrypt'); // For password hashing
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const bcryptSalt = bcrypt.genSaltSync(8);
const jwtSecret = "vishwaaArumugam";



// MongoDB connection string
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Enable CORS with specific origin and credentials


app.use(cors({
  origin: 'http://localhost:5173', // your frontend origin
  credentials: true // allow credentials (cookies, authorization headers, etc.)
  origin: 'http://localhost:5173', 
  credentials: true,
  
}));
app.use(express.json());
app.use(cookieParser());



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
    const hashedPassword =  bcrypt.hashSync(formData.password, bcryptSalt); 
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
      password: hashedPassword, 
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
    console.log(customer);

    if (!customer) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, customer.password);

    const isPasswordValid = bcrypt.compareSync(password, customer.password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }
    res.status(200).json({ message: 'Login successful' });

    const tokenPayload = {
      email: customer.email,
      id: customer._id,
    };

    jwt.sign(tokenPayload, jwtSecret, {}, (err, token) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'An error occurred while generating the token' });
      }

      res.cookie('token', token, { httpOnly: true, secure: false, sameSite: 'strict' });
      return res.status(200).json({ message: 'Login successful', customer });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while logging in' });
  }
});


app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    console.log(token);
    if(token) {
      jwt.verify(token, jwtSecret, {}, async (err, user) => {
          if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
          }
          const {name, email, _id} = await Customer.findById(user.
            id
          );
          res.json({name, email, _id});
      });
    } else {
      res.json(null);
    }
});

//sample route for logging out the user not implemented yet
app.post('/logout', (req, res) => {
    res.cookie('token', '').json(true);
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

