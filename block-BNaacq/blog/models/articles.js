let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let articleSchema = new Schema({
    title: { type: String, lowercase: true },
    description: { type: String, lowercase: true },
    tags: { type: [String], lowercase: true },
    likes: { type: String, lowercase: true },
    author: { type: Schema.Types.ObjectId, type: ref },
    comments: String,
}, { timestamps: true });

let Article = mongoose.model("Article", articleSchema);

module.exports = Article;