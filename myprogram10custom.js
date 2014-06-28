var net = require('net')
var portNumber = process.argv[2]

var prependZero = function(number) {
  return "0" + number
}

var convertMonth = function(dateObj) {
  var month = dateObj.getMonth() + 1
  if (month < 10) {
    month = prependZero(month)
    return month
  } else {
    return month
  }
}

var convertHour = function(dateObj) {
  var hour = dateObj.getHours()
  if (hour < 10) {
    hour = prependZero(hour)
    return hour
  } else {
    return hour
  }
}

var server = net.createServer(function(socket) {
  var date = new Date()
  var year = date.getFullYear()
  var month = convertMonth(date)
  var day = date.getDate()
  var hour = convertHour(date)
  var minute = date.getMinutes()
  var fullDate = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + '\n'
  socket.end(fullDate)
})

server.listen(portNumber)