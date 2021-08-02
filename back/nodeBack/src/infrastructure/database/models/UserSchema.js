const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: { type: Object, required: true},
    userEmail: { type: String, required: true},
    userImage: { type: Object, required: false},
    idFavorites: { type: Array, required: false},
    rate: { type: Array, required: false}
});

const user = mongoose.model('User', UserSchema);

module.exports = user;