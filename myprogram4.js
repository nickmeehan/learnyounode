var fs = require('fs')

var text;
fs.readFile(process.argv[2], function(error, data) {
  text = data;
  var lineCount = text.toString().split('\n')
  lineCount = lineCount.length - 1
  console.log(lineCount)
})