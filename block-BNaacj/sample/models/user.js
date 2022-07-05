let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let date = new Date();

let schema1 = new Schema({
    name: String,
    age: { type: Number, default: 0 },
    email: { type: String, lowercase: true },
    password: { type: String, minimum: 5, maximum: 15 },
    createdAt: { type: Date, default: date.toLocaleDateString() }
}, {
    time: timestamps
});