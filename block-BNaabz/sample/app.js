let express = require("express");
let logger = require("morgan");
let cookieParser = require("cookie-parser");
let mongose = require("mongoose");

mongose.connect("mongodb://localhost/sample", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("hurrayyyyyy connected!");
    }
})

let app = express();


app.use(logger("tiny"));
app.use(cookieParser());


app.listen(5000, () => {
    console.log("listening on 5k");
})