const mocha = require("mocha");
const assert = require("assert");
const User = require("../models/user.model");

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
});