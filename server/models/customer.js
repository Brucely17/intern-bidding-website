const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    gstNo: {
        type: String,
        required: true
    },
    companyType: {
        type: String,
        enum: ['Proprietor', 'Partnership', 'LLP', 'Pvt' , 'Ltd'],
        required: true
    },
    companyRegistrationNo: {
        type: String,
        required: true
    },
    authorizedPersonName: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: true
    },
    alternateContactNo: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    forgotPasswordOption: {
        type: String,
        enum: ['Mail OTP', 'Mobile OTP'],
        required: true
    },
    documents: {
        gst: {
            type: String, 
            required: true
        }, 
        msme: {
            type: String 
        },
        companyRegistrationDocs: {
            type: String, 
            required: true
        }
    },
    verificationStatus: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending'
    },
    adminComments: {
        type: String
    }

});

const Customer = mongoose.model('Customer',customerSchema);
module.exports = Customer;
