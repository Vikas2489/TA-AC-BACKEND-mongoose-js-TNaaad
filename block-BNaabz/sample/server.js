let express = require("express");
let logger = require("morgan");
let cookieParser = require("cookie-parser");
let mongose = require("mongoose");

let app = express();

mongose.connect("mongodb://localhost/", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("hurrayyyyyy connected!");
    }
})
app.use(logger("tiny"));
app.use(cookieParser());