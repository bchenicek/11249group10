const router = require('express').Router();

let Footprint = require('../models/footprint.model');

router.route('/:user_id').get((req, res) => {
    Footprint.find({user_id: req.params.user_id})
    .then(footprints => res.json(footprints))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) => {
    const user_id = req.body.user_id;
    const city = req.body.city;
    const state = req.body.state;
    const household_size = req.body.household_size;
    const household_income = req.body.household_income;
    const vehicle_miles = req.body.vehicle_miles;
    const vehicle_mpg = req.body.vehicle_mpg;
    const public_transit_miles = req.body.public_transit_miles;
    const air_miles = req.body.air_miles;
    const living_space_area = req.body.living_space_area;
    const electric_bill = req.body.electric_bill;
    const water_bill = req.body.water_bill;
    const natural_gas = req.body.natural_gas;
    const other_fuels = req.body.other_fuels;
    const animal_protein_cal = req.body.animal_protein_cal;
    const grains_cal = req.body.grains_cal;
    const dairy_cal = req.body.dairy_cal;
    const fruit_veg_cal = req.body.fruit_veg_cal;
    const snacks_cal = req.body.snacks_cal;
    const shopping_goods = req.body.shopping_goods;
    const shopping_services = req.body.shopping_services;

    const newFootprint = new Footprint({
        user_id,
        city,
        state,
        household_size,
        household_income,
        vehicle_miles,
        vehicle_mpg,
        public_transit_miles,
        air_miles,
        living_space_area,
        electric_bill,
        water_bill,
        natural_gas,
        other_fuels,
        animal_protein_cal,
        grains_cal,
        dairy_cal,
        fruit_veg_cal,
        snacks_cal,
        shopping_goods,
        shopping_services 
    });

    newFootprint.save()
        .then(() => res.json('Footprint added!'))
        .catch(err => res.json('Error: ' + err));
});

module.exports = router;