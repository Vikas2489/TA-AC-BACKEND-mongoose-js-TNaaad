let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let commentsSchema = new Schema({
    content: { type: String, lowercase: true },
    author: Schema.Types.ObjectId,
    article: Schema.Types.ObjectId,
}, { timestamps: true });

let Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;