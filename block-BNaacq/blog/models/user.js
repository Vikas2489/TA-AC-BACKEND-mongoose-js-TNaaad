let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: { type: String, lowercase: true },
    email: { type: String, lowercase: true, match: /@/ },
    age: Number,
}, { timestamps: true });

let User = mongoose.model("User", userSchema);

module.exports = User;