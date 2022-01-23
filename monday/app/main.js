const value = require('./value.js');
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const file = "../data/lastdata"

app.get('/', (req, res) => {
  data = req.query.data
  output = value(file, data)
  res.send("DEVvalue="+output+";")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
