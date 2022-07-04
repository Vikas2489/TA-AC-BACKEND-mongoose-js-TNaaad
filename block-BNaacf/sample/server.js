const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sample", (err) => {
    console.log(err ? err : "connected to database");
});

let app = express();

app.listen(2222, () => {
    console.log("listening on port 2222");
})