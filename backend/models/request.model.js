const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const requestSchema = new Schema({
    requestor_id: {
        type: String,
        required: true,
        trim: true
    },
    requestor_name: {
        type: String,
        required: true,
        trim: true
    },
    recipient: {
        type: String,
        required: true,
        trim: true
    },
    recipient_name: {
        type: String,
        required: false,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    group_id: {
        type: String,
        required: false,
        trim: true
    },
    group_name: {
        type: String,
        required: false,
        trim: true
    },
    message: {
        type: String,
        required: false,
        trim: true
    }
}, {
    timestamps: true,
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;