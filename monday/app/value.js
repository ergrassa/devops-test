module.exports = function value(prev, data) {
    if (data === undefined) {
      output = parseFloat(prev)
    } else {
      if (isNaN(data) === false) {
//      if (typeof data === 'number') {
        output = parseFloat(data)
      } else {
        output = parseFloat(0.0)
      }
    }
console.log(output)
return output 
}
