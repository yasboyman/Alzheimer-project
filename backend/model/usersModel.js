const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {type: String, unique: true, required: [true, 'Please add a name']},
  password: {type: String, unique: true, required: [true, 'Please add a password'], minlength: 3,},
  email: {type: String, unique: true, required: [true, 'Please add an email']},
}, {timestamps: true})

module.exports = mongoose.model('Users', userSchema)