const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const requestSchema = new Schema({
    requestor: {
        type: String,
        required: true,
        trim: true
    },
    recipient: {
        type: String,
        required: true,
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
    }
}, {
    timestamps: true,
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;