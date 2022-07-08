let express = require("express");
let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sample", (err) => {
    console.log(err ? err : "connected true");
})

let app = express();

app.listen(2222, () => {
    console.log("listening on 2222 port");
})