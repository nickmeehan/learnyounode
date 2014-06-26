var fs = require('fs')
var myModule = require('./myprogram6module')

myModule(process.argv[2], process.argv[3], function(error, data) {
  for (var i = 0; i < data.length; i++) {
    console.log(data[i])
  }
})

// fs.readdir(process.argv[2], )