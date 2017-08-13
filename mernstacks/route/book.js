const express = require('express')

const book = express.Router()

book.use((req, res, next) => {
  next()
})

book.route('/')
  .get((req, res) => {
    res.send('test index')
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
