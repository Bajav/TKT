// a controller is where all the logic happens ,
// it handles which routes were hit and how to respond to them

import User from "../Models/User";

// function to get all users
exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
  console.log(users);
};

exports.createUser = async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json(newUser);
};
