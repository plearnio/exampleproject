const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const book = require('./route/book')
const config = require('./config').mongo
const x = 10
console.log(`test ${x}`)
mongoose.connect(`mongodb://${config.host}:${config.port}/${config.database}`)
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/book', book)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
