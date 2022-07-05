let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let articleSchema = ({
    title: { type: String, lowercase: true, trim: true, match: /$/, maxLength: 15, minLength: 10 },
    description: { type: String }
}, {
    time: timeStamps,
});

module.exports = mongoose.model("Article", articleSchema);