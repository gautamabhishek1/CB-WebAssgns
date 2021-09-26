const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        required: true,
    },
    lastname: {
        type: String,
        trim: true,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,    
    },  
    check: {
        type: String,  
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    }, 
},

 { timestamps: true }

);

const Visitor = mongoose.model('Visitor',visitorSchema);

module.exports = Visitor;