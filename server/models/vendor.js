const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
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
        enum: ['Proprietor', 'Partnership', 'LLP', 'Pvt', 'Ltd'],
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
        },
        cancelledCheque: {
            type: String, 
            required: true
        }
    },
    
    willingToSell: {
        type: Boolean,
        required: true
    },

    bankDetails: {
        accountName: {
            type: String,
            required: function() { return this.willingToSell; }
        },
        accountNo: {
            type: String,
            required: function() { return this.willingToSell; }
        },
        bankName: {
            type: String,
            required: function() { return this.willingToSell; }
        },
        ifscCode: {
            type: String,
            required: function() { return this.willingToSell; }
        },
        branch: {
            type: String,
            required: function() { return this.willingToSell; }
        }
    },
    earOfRegistration: {
        type: Number,
        required: true
    },
    vendorType: {
        type: String,
        enum: ['IT', 'Electrical', 'Electronics', 'Furniture', 'Civil', 'Infrastructure', 'Others'],
        required: true
    },
    subCategory: {
        type: String
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

// Create the Vendor model
const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
