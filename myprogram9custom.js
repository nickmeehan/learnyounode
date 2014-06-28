var http = require('http')
var urlOne = process.argv[2]
var urlTwo = process.argv[3]
var urlThree = process.argv[4]

http.get(urlOne, function(response) {
  var output = ""
  response.setEncoding("utf8")
  response.on("data", function(data) {
    output += data
  })
  response.on("end", function() {
    console.log(output)
    http.get(urlTwo, function(response) {
      var output = ""
      response.setEncoding("utf8")
      response.on("data", function(data) {
        output += data
      })
      response.on("end", function() {
        console.log(output)
        http.get(urlThree, function(response) {
          var output = ""
          response.setEncoding("utf8")
          response.on("data", function(data) {
            output += data
          })
          response.on("end", function() {
            console.log(output)
          })
        })
      })
    })
  })
})