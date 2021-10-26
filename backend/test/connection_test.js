/*
const mongoose = require("mongoose");
const express = require('express');
const cors = require('cors');

mongoose.Promise = global.Promise;

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;


before(function(done) {
    mongoose.connect(uri, { useNewUrlParser: true });
    mongoose.connection.once("open", function() {
        console.log("Connection has been made!");
        done();
        mongoose.connection.close(true);
    }).on("error", function(error) {
       console.log("Connection error", error); 
    });
});

*/
