var http = require('http')
var url = require('url')
var portNumber = process.argv[2]

var routes = {
  '/api/parsetime': function(date) {
    var time = { 'hour': date.getHours(), 'minute': date.getMinutes(), 'second': date.getSeconds() }
    return JSON.stringify(time)
  },
  '/api/unixtime': function(date) {
    var time = { 'unixtime': date.getTime() }
    return JSON.stringify(time)
  }
}

var server = http.createServer(function(request, response) {
  var parsedUrl = url.parse(request.url, true)
  var requestDate = new Date(parsedUrl.query['iso'])
  var resource = routes[parsedUrl.pathname]

  if (resource) {
    response.writeHead(200, { 'Content-Type': 'application/json' } )
    response.end(resource(requestDate))
  } else {
    response.writeHead(404)
    response.end()
  }
})

server.listen(portNumber)