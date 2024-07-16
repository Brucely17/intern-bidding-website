const mongoose = require('mongoose');

const bidSearchSchema = new mongoose.Schema({
    productCategory: {
        type: String,
        default: ''
    },
    bidStart: {
        type: Date,
        default: null
    },
    bidEnd: {
        type: Date,
        default: null
    },
    productTitle: {
        type: String,
        default: ''
    },
    productDescription: {
        type: String,
        default: ''
    },
    totalQty: {
        type: Number,
        default: 0
    },
    budgetDisclosure: {
        type: String,
        default: ''
    },
    budget: {
        type: String,
        default: ''
    },
    warrantyType: {
        type: String,
        default: ''
    },
    warrantyPeriod: {

        type: Number,
        default: ''
    },
    vendorLocation: {
        type: String,
        default: ''
    },
    experienceExceptions: {
        type: String,
        default: ''
    },
    bidStatus: {
        type: String,
        default: 'Published'
    }
});

module.exports = mongoose.model('BidSearch', bidSearchSchema);
