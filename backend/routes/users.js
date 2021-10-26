const router = require('express').Router();
const bcrypt = require('bcrypt');

let User = require('../models/user.model');
let Footprint = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    User.findOne({ "username": username })
        .then(user => {
            const hashed = user.password;
            bcrypt.compare(password, hashed)
                .then(result => {
                    if (result) {
                        res.json({
                            "status": "login_successful",
                            "message": "Login attempt was successful.",
                            "account_data": user
                        })
                    } else {
                        res.json({
                            "status": "incorrect_password",
                            "message": "An error was thrown while comparing the given password to the hashed password."
                        })
                    }
                })
                .catch(err => {       
                    res.status(400).json({
                        "status": "catch_error",
                        "message": "An error was thrown while comparing the given password to the hashed password."
                    })
                });
        })
        .catch(err => {       
            res.json({
                "status": "user_does_not_exist",
                "message": "There is no account associated with the given user."
            })
        });
});

router.route('/create').post((req, res) => {
    const username = req.body.username;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const birth_date = Date.parse(req.body.birth_date);

    User.find({ "username": username })
        .then(result => {
            if (result.length > 0) {
                res.json({
                    "status": "duplicate_username",
                    "message": "A user already exists with the given username."
                })
            }
        })
        .catch(err => {
            res.status(400).json({
                "status": "catch_error",
                "message": "An error was thrown while checking for duplicate usernames."
            })
        })

    User.find({ "email": email })
        .then(result => {
            if (result.length > 0) {
                res.json({
                    "status": "duplicate_email",
                    "message": "A user already exists with the given email."
                })
            }
        })
        .catch(err => {
            res.status(400).json({
                "status": "catch_error",
                "message": "An error was thrown while checking for dupliate emails."
            })
        })

    const saltRounds = 10;
    bcrypt.hash(req.body.password, saltRounds)
        .then(hashed => {
            const newUser = new User({ 
                username, 
                password: hashed, 
                first_name, 
                last_name, 
                email, 
                birth_date 
            });
        
            newUser.save()
                .then(() => res.json('User added!'))
                .catch(err => {
                    res.status(400).json({
                        "status": "catch_error",
                        "message": "An error was thrown while saving the user to the database."
                    })
                })
        })
        .catch(err => {
            res.status(400).json({
                "status": "catch_error",
                "message": "An error was thrown while hashing the password."
            })
        })
});

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