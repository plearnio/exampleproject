const express = require('express')

const book = express.Router()
const Books = require('../models/Books')

book.use((req, res, next) => {
  next()
})

book.route('/')
  .get((req, res) => {
    Books.find({}, (err, docs) => {
      if (err) res.send(err)
      else res.json(docs)
    })
  })
  .post((req, res) => {
    console.log(req)
    console.log(req.body)
    res.send('post test')
  })
// book.route('/register')
//   .post((req, res) => {
//     console.log(req.body)
//     res.send('test register')
//   })


module.exports = book
