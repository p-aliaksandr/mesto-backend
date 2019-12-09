const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    required: true,
    type: String,
    match: /https?:\/\/([Ww]{3}\.)?([A-Za-z0-9](-?[A-Za-z0-9]+)+(\.[A-Za-z]{2,})+|((2[0-5][0-5]\.|[0-1]?\d?\d?\.){3}(2[0-5][0-5]|[0-1]?\d?\d)))(:\d{2,5})?(\/[\S]*)*/,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

userSchema.path('email').validate(validator.isEmail, 'Invalid Email');

module.exports = mongoose.model('user', userSchema);
