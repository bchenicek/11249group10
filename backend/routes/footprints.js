const router = require('express').Router();

let Footprint = require('../models/footprint.model');

router.route('/footprint').post((req, res) => {
    const city = req.body.city;
    const state = req.body.state;
    const household_size = req.body.household_size;
    const household_income = req.body.household_income;
    const vehicle_miles = req.body.vehicle_miles;
    const vehicle_mpg = req.body.vehicle_mpg;
    const pt_miles = req.body.pt_miles;
    const air_miles = req.body.air_miles;
    const ls_area = req.body.ls_area;
    const el_bill = req.body.el_bill;
    const water_bill = req.body.water_bill;
    const nat_gas = req.body.nat_gas;
    const fuels = req.body.fuels;
    const protien = req.body.protien;
    const grains = req.body.grains;
    const dairy = req.body.dairy;
    const fruit_veg = req.body.fruit_veg;
    const snacks = req.body.snacks;
    const sh_goods = req.body.sh_goods;
    const sh_services = req.body.sh_services;

    const newFootprint = new Footprint({
        city,
        state,
        household_size,
        household_income,
        vehicle_miles,
        vehicle_mpg,
        pt_miles,
        air_miles,
        ls_area,
        el_bill,
        water_bill,
        nat_gas,
        fuels,
        protien,
        grains,
        dairy,
        fruit_veg,
        snacks,
        sh_goods,
        sh_services 
    });
    newFootprint.save();
});

module.exports = router;