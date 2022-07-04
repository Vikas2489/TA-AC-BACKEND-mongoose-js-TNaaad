let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let schema1 = new Schema({
    name: String,
    age: { type: Number, default: 0 },
    email: { type: String, lowercase: true },
    marks: [Number],
    sportsWhichYouLike: [String]
}, {
    time: timestamps
});