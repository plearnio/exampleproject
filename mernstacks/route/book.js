const express = require('express')
const mongoose = require('mongoose')

const book = express.Router()
const Books = require('../models/Books')

book.use((req, res, next) => {
  next()
})

book.route('/allbooks')
  .get((req, res) => {
    Books.find({}).then((err, docs) => {
      if (err) res.send(err)
      else res.json(docs)
    })
  })
  .post((req, res) => {
    const newBook = Books(req.body)
    newBook.save((err) => {
      if (err) res.send(err)
      else res.send('Post Success !')
    })
  })

book.route('/:bookid')
  .get((req, res) => {
    const id = req.params.bookid
    Books.findById(id).then((err, docs) => {
      if (err) res.send(err)
      else res.json(docs)
    })
  })
  .put((req, res) => {
    const id = req.params.bookid
    const bookUpdate = req.body
    Books.findOneAndUpdate({ _id: mongoose.Types.ObjectId(id) }, bookUpdate, (err) => {
      if (err) res.end('Wrong ID type')
      else res.send('Update Success !')
    })
  })

module.exports = book
