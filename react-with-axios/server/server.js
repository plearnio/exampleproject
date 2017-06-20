const express = require('express')
const cors = require('cors')

const app = express()

const PORT = 5000

// dummy data
const dummyData = {
  name : 'pruek',
  age : 22
}

// change port here
app.use('/', cors({ origin: 'http://localhost:3001' }))

app.get('/', function (req, res) {
  res.json(dummyData)
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})