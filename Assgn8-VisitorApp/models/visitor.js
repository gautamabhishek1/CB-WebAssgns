const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
    name: {
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
    }

});

const Visitor = mongoose.model('Visitor',visitorSchema);

module.exports = Visitor;