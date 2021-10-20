const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    //let x = doesUserExist(username);
    User.findOne({ "username": username })
        .then(user => {
            if (password == user.password) {
                res.json(user);
            } else {
                res.json('Incorrect Password!');
            }
        })
        .catch(err => {       
            res.status(400).json('Error: ' + err);
        });
});

/*function doesUserExist(username) {
    User.findOne({ "username": username })
        .then(user => {
            return true;
        })
        .catch(err => {       
            return false;
        });
}*/

router.route('/create').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const birth_date = Date.parse(req.body.birth_date);

    const newUser = new User({ 
        username, 
        password, 
        first_name, 
        last_name, 
        email, 
        birth_date 
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;