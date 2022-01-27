const value = require('./value.js')
const express = require('express')
const app = express()
const port = 3000
// const fs = require('fs')
// const file = "../data/lastdata"
// const buffer = fs.readFileSync(file)

// old_value = parseFloat(buffer)
old_value = 0.000

app.get('/', (req, res) => {
  data = req.query.data
  new_value = value(old_value, parseFloat(data))+Math.random()-0.5
  res.send("FFEATvalue="+new_value+";")
  console.log("data: "+data+"  new: "+new_value+"  old: "+old_value)
  old_value = new_value
})

app.listen(port, () => {
  console.log(old_value)
  console.log(`Example app listening at http://localhost:${port}`)
})


process.stdin.resume();//so the program will not close instantly

function exitHandler(options, exitCode) {
    console.log(old_value)
    if (options.write) fs.writeFileSync(file, old_value.toString());
    if (exitCode || exitCode === 0) console.log(exitCode);
    if (options.exit) process.exit();
}

//do something when app is closing
process.on('exit', exitHandler.bind(null,{write:false}));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {write:false, exit:true}));

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, {exit:true}));
process.on('SIGUSR2', exitHandler.bind(null, {exit:true}));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));

