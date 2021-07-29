const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name: { type: String, required: true}
});

const character = mongoose.model('Character', CharacterSchema);

module.exports = character;