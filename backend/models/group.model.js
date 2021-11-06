const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const groupSchema = new Schema({
    group_name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    group_type: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: false,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    members: {
        type: Array,
        required: true
    }
}, {
    timestamps: true,
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;