let express = require("express");
let mongoose = require("mongoose");

// connecting to database
mongoose.connect("mongodb://localhost/sample", (err) => {
    console.log(err ? err : "Hurray connected to database");
});

let app = express();

app.listen(3333, () => {
    console.log("listening to 3333 port");
})