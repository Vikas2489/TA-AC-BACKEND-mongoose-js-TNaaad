let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let addressSchema = new Schema({
    village: String,
    city: { type: String, minLength: 5, maxLength: 10, },
    state: { type: String, minLength: 5, maxLength: 10, },
    pin: Number,
    user: mongoose.Schema.Types.ObjectId,
}, { time: timeStamps });

module.exports = mongoose.model("Address", addressSchema);