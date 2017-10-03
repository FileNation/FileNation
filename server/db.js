const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/accounts');

const Schema = mongoose.Schema;

mongoose.connection.on('connected', () => console.log('connected'));

module.exports = {
  mongoose,
  Schema
};
