const value = require('./value.js');
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const file = "../data/lastdata"
var old_value = 0.0

app.get('/', (req, res) => {
  data = req.query.data
  new_value = value(old_value, data)
  res.send("v2value="+new_value+";")
  old_value = new_value
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
