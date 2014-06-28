var http = require('http')
var async = require('async')
var urls = []
var requestResults = []

var printRequests = function() {
  for (var i = 0; i < 3; i++) {
    console.log(requestResults[i])
  }
}

for (var i = 0; i < 3; i++) {
  urls.push(process.argv[2 + i])
}

var httpGet = function(url, callback) {
  http.get(url, function(response) {
    var output = ""
    response.setEncoding("utf8")
    response.on("data", function(data) {
      output += data
    })
    response.on("end", function() {
      var index = urls.indexOf(url)
      requestResults[index] = output
      callback()
    })
  })
}

var printOnceRequestsComplete = function() {
  printRequests()
}

async.each(urls, httpGet, printOnceRequestsComplete)