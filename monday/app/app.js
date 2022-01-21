const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const file = "../data/lastdata"

app.get('/', (req, res) => {
  data = req.query.data
    if (data === undefined) {
      const buffer = fs.readFileSync(file);
      output = parseFloat(buffer)+Math.random()-0.5
      fs.writeFileSync(file, output.toString())
    } else {
      if (isNaN(data) === false) {
        output = parseFloat(data)+Math.random()-0.5
      } else {
        output = Math.random()-0.5
      }
      fs.writeFileSync(file, output.toString())
    }
  res.send("MASTERvalue="+output+";")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
