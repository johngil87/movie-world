const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: { type: String, required: true},
    poster_path: { type: String, required: false},
    backdrop_path: { type: String, required: false},
    category: { type: Array, required: false},
    movieDirector: { type: Array, required: false},
    characters: { type: Array, required: false},
    plot: { type: Array, required: true}
});

const movie = mongoose.model('Movie', MovieSchema);

module.exports = movie;