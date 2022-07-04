let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema2 = new Schema({
    city: String,
    village: String,
    state: String,
    pin: Number,
    objectId: Schema.Types.objectId
}, { time: timestamps });