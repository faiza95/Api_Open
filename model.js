const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema({
	firstName: String,
	lastName: String,
	tShirtNumber: Number,
	age: Number
});

module.exports = mongoose.model('player', playerSchema , 'player')