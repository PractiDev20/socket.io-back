/**
 * 
 * text: String
 * user: String
 * date: Date
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    text: String,
    user: String,
    date: {
        type: String,
        default: new Date
    },
});

module.exports = mongoose.model("Comment", commentSchema);

