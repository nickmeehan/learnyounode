var http = require('http')
var concatStream = require('concat-stream')

var output = ""

http.get(process.argv[2], function(response) {
  response.setEncoding("utf8")
  response.pipe(concatStream(function(data) {
    console.log(data.length)
    console.log(data)
  }))
})