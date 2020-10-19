const problems = require('./Problems.js')
const bodyParser = require('body-parser')

const express = require('express')
const app = express()
const port = 8080

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.post('/watchmen', problems.watchmen)
app.post('/pairs', problems.pairs)
app.post('/knight', problems.knight)

app.listen(port, function () {
  console.log("CONECTADO AL PORT" + port)
})

app.use(bodyParser.json({ limit: '100mb' }))
app.use(bodyParser.urlencoded({ limit: '100mb', extended: false }))
