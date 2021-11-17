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
        minlength: 2
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
    animal_protein_cal: {
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
    },
    vehicle_CO2: {
        type: Number
    },
    pTransit_CO2: {
        type: Number
    },
    airTravel_CO2: {
        type: Number
    },
    electric_CO2: {
        type: Number
    },
    water_CO2: {
        type: Number
    },
    natGas_CO2: {
        type: Number
    },
    oFuel_CO2: {
        type: Number
    },
    animalProtein_CO2: {
        type: Number
    },
    grains_CO2: {
        type: Number
    },
    dairy_CO2: {
        type: Number
    },
    FruitVeg_CO2: {
        type: Number
    },
    snacks_CO2: {
        type: Number
    },
    goods_CO2: {
        type: Number
    },
    services_CO2: {
        type: Number 
    }
}, {
    timestamps: true,
});

const Footprint = mongoose.model('Footprint', footprintSchema);

module.exports = Footprint;