var fs = require('fs')

var text = fs.readFileSync(process.argv[2])
var lineCount = text.toString().split('\n')
lineCount = lineCount.length - 1
console.log(lineCount)