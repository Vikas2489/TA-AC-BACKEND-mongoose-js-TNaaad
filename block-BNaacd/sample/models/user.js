let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let schema1 = new Schema({
    name: String,
    age: { type: Number, age: 0 },
    email: { type: String, lowerCase: true }
}, {
    time: timestamps
});