const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const bookScheme = new Schema({
  name: String,
  price: Number
})

const Books = mongoose.model('books', bookScheme)

module.exports = Books
