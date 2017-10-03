'use strict';
const bcrypt = require('bcrypt');
const saltRounds = 10;

const db = require('../db.js');


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema ({
    username: String,
    password: String,
    email: String,
    files: String
});

const UserModel = mongoose.model('User', User);

exports.getUsers = async () => {
   return UserModel.find();
};

exports.deleteOne = async (data) => {
  let username = data.username;
  return UserModel.find({ username }).remove()

}

exports.findUser = async (data) => {
  return UserModel.findOne({ username: data })
}

exports.postUsers = async (data) => {
  try {
    const hash = await bcrypt.hash(data.password, saltRounds)
      // Store hash in your password DB.
      const newUser = new UserModel ({
        username: data.username,
        password: hash,
        email: data.email,
        files: data.files
      });
      // console.log('THIS IS THE DATA FOR THE USER MODEL', data.username, hash, data.email, data.files);
      // console.log('THIS IS THE NEW USER', newUser);
      await newUser.save();
  } catch (e) {
      console.log(e);
  }

};
