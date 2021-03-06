const mocha = require("mocha");
const assert = require("assert");
const User = require("../models/user.model");
const mongoose = require("mongoose");

describe('Saving record', function() {
    it('Save a user in the database', function() {
        var user = new User({
            username: 'Username123',
            password: '12345psW',
            firstname: "Test",
            lastname: "Test",
            email: "test@gmail.com",
            birth_date: new Date("December 17, 1995") 
        });
        user.save().then(function() {
            assert(user.isNew === false); {/*false when value is saved in the database after creation*/}
            done(); {/*telling mocha that our test is done, can move on to next test*/}
        });
    });

    it('Username length less than minLength', function() {
        var user = new User({
            username: 'U1',
            password: '12345psW',
            firstname: "Test",
            lastname: "Test",
            email: "test@gmail.com",
            birth_date: new Date("December 17, 1995") 
        });
        user.save().then(function() {
            assert(user.isNew === true); {/*true means that the user was not able to be saved to database*/}
            done(); {/*telling mocha that our test is done, can move on to next test*/}
        });
    });

    it('Password length less than minLength', function() {
        
        var user = new User({
            username: 'Username123',
            password: '12345ps', 
            firstname: "Test",
            lastname: "Test",
            email: "test@gmail.com",
            birth_date: new Date("December 17, 1995") 
        });
        user.save().then(function() {
            assert(user.isNew === true); {/*false when value is saved in the database after creation*/}
            done(); {/*telling mocha that our test is done, can move on to next test*/}
        });
    });
    
    
});