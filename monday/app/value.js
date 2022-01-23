const fs = require('fs')

module.exports = function value(file, data) {
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
console.log(output)
return output
}
