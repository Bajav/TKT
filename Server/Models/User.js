// this is a controller , this handles all data manipulation
// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model('User', userSchema);
