const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    address: String,
    password: String,     //For Post register
})

module.exports = mongoose.model('users', userSchema);