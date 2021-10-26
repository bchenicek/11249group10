const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const footprintSchema = new Schema({
    user_id: 
    {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    state: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    household_size: {
        type: Number,
        required: true
    },
    household_income: {
        type: Number,
        required: true
    },
    vehicle_miles: {
        type: Number
    },
    vehicle_mpg: {
        type: Number
    },
    public_transit_miles: {
        type: Number
    },
    air_miles: {
        type: Number
    },
    living_space_area: {
        type: Number
    },
    electric_bill: {
        type: Number,
        required: true
    },
    water_bill: {
        type: Number,
        required: true
    },
    natural_gas: {
        type: Number
    },
    other_fuels: {
        type: Number
    },
    animal_protien_cal: {
        type: Number,
        required: true
    },
    grains_cal: {
        type: Number,
        required: true
    },
    dairy_cal: {
        type: Number,
        required: true
    },
    fruit_veg_cal: {
        type: Number,
        required: true
    },
    snacks_cal: {
        type: Number,
        required: true
    },
    shopping_goods: {
        type: Number,
        required: true
    },
    shopping_services: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
});

const Footprint = mongoose.model('Footprint', footprintSchema);

module.exports = Footprint;