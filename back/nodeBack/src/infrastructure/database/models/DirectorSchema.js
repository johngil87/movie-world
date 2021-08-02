const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DirectorSchema = new Schema({
    name: { type: String, required: true}
});

const director = mongoose.model('Director', DirectorSchema);

module.exports = director;