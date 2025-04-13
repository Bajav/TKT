// this is a controller , this handles all data manipulation
// models/User.js
import mongoose from 'mongoose';

// we create a user schema , 
// we use it to create a new user to our mongoose DB
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// we export the mongoose model
module.exports = mongoose.model('User', userSchema);
