let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let commentsSchema = new Schema({
    content: { type: String, lowercase: true },
    author: { type: Schema.Types.ObjectId, ref: user },
    article: { type: Schema.Types.ObjectId, ref: article }
}, { timestamps: true });

let Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;