var http = require('http')
var concatStream = require('concat-stream')
var requestResults = []
var count = 0

var printRequests = function() {
  for (var i = 0; i < 3; i++) {
    console.log(requestResults[i])
  }
}

var httpGet = function(index) {
  http.get(process.argv[2 + index], function(response) {
    response.setEncoding("utf8")
    response.pipe(concatStream(function(data) {
      requestResults[index] = data
      count += 1

      if (count === 3) {
        printRequests()
      }
    }))
  })
}

for (var i = 0; i < 3; i++) {
  httpGet(i)
}