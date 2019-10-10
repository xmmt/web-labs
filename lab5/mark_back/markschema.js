var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MarkdownSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    body: {
        type: String
    },
    modified: {
        type: Date
    }
});

var MarkdownModel = mongoose.model('mark', MarkdownSchema);
module.exports = MarkdownModel;