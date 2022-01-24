const value = require('./value.js');
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const file = "../data/lastdata"
var data=0.0

app.get('/', (req, res) => {
  data = req.query.data
  output = value(file, data)
  res.send("DEVvalue="+output+";")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// testing
var assert = require('chai').assert

describe("test 1", function() {
  it("tests", function() {
    assert.typeOf(value(file, data), 'number', 'value is a number');
  })
})
