let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    age: { type: Number, default: 0 },
    email: { type: String, lowercase: true },
    password: { type: String, minlength: 5, maxlength: 15 },
    createdAt: { type: Date, default: new Date() }
}, { time: timeStamps });

module.exports = mongoose.model("User", userSchema);