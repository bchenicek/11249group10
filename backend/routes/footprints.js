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
    const vehicle_CO2 = req.body.vehicle_CO2;
    const pTransit_CO2 = req.body.pTransit_CO2;
    const airTravel_CO2 = req.body.airTravel_CO2;
    const electric_CO2 = req.body.electric_CO2;
    const water_CO2 = req.body.water_CO2;
    const natGas_CO2 = req.body.natGas_CO2;
    const oFuel_CO2 = req.body.oFuel_CO2;
/*    const animalProtein_CO2 = req.body.animalProtein_CO2;
    const grains_CO2 = req.body.grains_CO2;
    const dairy_CO2 = req.body.dairy_CO2;
    const FruitVeg_CO2 = req.body.FruitVeg_CO2;
    const snacks_CO2 = req.body.snacks_CO2;
    const goods_CO2 = req.body.goods_CO2;
    const services_CO2 = req.body.services_CO2;  */

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
        shopping_services,
        vehicle_CO2,
        pTransit_CO2,
        airTravel_CO2,
        electric_CO2,
        water_CO2,
        natGas_CO2,
        oFuel_CO2
/*      animalProtein_CO2,
        grains_CO2,
        dairy_CO2,
        FruitVeg_CO2, 
        snacks_CO2,
        goods_CO2,
        services_CO2        */
    });

    newFootprint.save()
        .then(() => res.json('Footprint added!'))
        .catch(err => res.json('Error: ' + err));
});

module.exports = router;