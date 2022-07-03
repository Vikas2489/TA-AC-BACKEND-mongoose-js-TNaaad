let express = require("express");
let mongoose = require("mongoose");

// connect to database

mongoose.connect("mongodb://localhost/sample", (err) => {
    console.log(err ? err : "connected to database");
})

let app = express();